import { GoogleGenAI, Type } from "@google/genai";
import type { VercelRequest, VercelResponse } from '@vercel/node';

if (!process.env.API_KEY) {
    // This will cause the function to fail on deployment if the env var is not set, which is good.
    throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const lessonSchema = {
    type: Type.ARRAY,
    items: {
        type: Type.OBJECT,
        properties: {
            type: { type: Type.STRING, enum: ['MULTIPLE_CHOICE', 'TRANSLATE_TO_ENGLISH', 'LEARN'], description: 'The type of exercise.' },
            prompt: { type: Type.STRING, description: 'The main instruction or question for the user in English. For fill-in-the-blank, this is the instruction (e.g., "Complete the sentence"). For LEARN type, this is the English word/phrase.' },
            farsiPrompt: { type: Type.STRING, description: 'The Farsi translation of the prompt. For LEARN type, this is the Farsi translation of the word/phrase.' },
            sentence: { type: Type.STRING, description: 'For "MULTIPLE_CHOICE" fill-in-the-blank questions or "LEARN" type, this field holds an example sentence. For fill-in-the-blank, use "___". Example: "She ___ to the market every day."' },
            farsiSentenceExample: { type: Type.STRING, description: 'The Farsi translation of the example sentence provided in the "sentence" field for LEARN type exercises. Should be null for other types.' },
            options: { type: Type.ARRAY, items: { type: Type.STRING }, description: 'An array of strings with possible answers for MULTIPLE_CHOICE. Should be null/empty for other types.' },
            answer: { type: Type.STRING, description: 'The correct answer. Should be null/empty for LEARN type.' },
            farsiSentence: { type: Type.STRING, description: 'The sentence in Farsi for translation exercises.' },
            difficulty: { type: Type.STRING, enum: ['Beginner', 'Intermediate', 'Advanced'], description: 'The difficulty level of this specific exercise.' },
        },
        required: ['type', 'prompt']
    },
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { action, payload } = req.body;

    try {
        switch (action) {
            case 'generateLesson': {
                const { topic, level } = payload;
                const systemInstruction = `You are an expert English teacher creating learning materials for Farsi speakers. Your output MUST be a valid JSON array of exercise objects. Do not include any text or markdown formatting outside of the JSON array.`;
                const prompt = `
      Generate a complete, structured English lesson about "${topic}" for a ${level}-level learner.
      The lesson must be a JSON array of 10 to 14 items, combining teaching and quizzing.
      
      Follow these rules precisely:
      1.  The JSON output must be an array of objects, matching the provided schema.
      2.  Structure the lesson in "teach-then-test" blocks. A block consists of 1-2 'LEARN' type items followed by 2-3 'MULTIPLE_CHOICE' or 'TRANSLATE_TO_ENGLISH' items that test the concepts just introduced in the 'LEARN' items. Repeat this pattern.
      3.  For 'LEARN' items:
          a. 'type' MUST be 'LEARN'.
          b. 'prompt' is the English word or phrase (e.g., "Delicious").
          c. 'farsiPrompt' is its Farsi translation (e.g., "خوشمزه").
          d. 'sentence' is a clear example sentence in English (e.g., "This apple is delicious.").
          e. 'farsiSentenceExample' MUST be the direct Farsi translation of the 'sentence' (e.g., "این سیب خوشمزه است.").
          f. 'answer' and 'options' should be empty strings or null.
      4.  For 'MULTIPLE_CHOICE' and 'TRANSLATE_TO_ENGLISH' items, ensure they directly relate to the vocabulary or grammar from the preceding 'LEARN' items.
      5.  For 'MULTIPLE_CHOICE' fill-in-the-blank questions:
          a. The 'prompt' field should contain the instruction (e.g., "Complete the sentence").
          b. The 'sentence' field MUST contain the sentence with a blank space represented by "___".
      6.  All text content must be complete and professional. Do not use placeholders.
      7.  Difficulty must be strictly for ${level} learners.
    `;
                
                const response = await ai.models.generateContent({
                    model: "gemini-2.5-flash",
                    contents: prompt,
                    config: {
                        systemInstruction: systemInstruction,
                        responseMimeType: "application/json",
                        responseSchema: lessonSchema,
                    },
                });

                const jsonText = response.text.trim();
                const lessonData = JSON.parse(jsonText);
                
                if (!Array.isArray(lessonData)) {
                    throw new Error("Parsed lesson data is not an array.");
                }
                
                return res.status(200).json(lessonData);
            }

            case 'evaluateAnswer': {
                const { userAnswer, correctAnswer } = payload;
                
                const normalizedUserAnswer = userAnswer.trim().toLowerCase().replace(/[.,'?!";:]/g, "").replace(/\s\s+/g, ' ');
                const normalizedCorrectAnswer = correctAnswer.trim().toLowerCase().replace(/[.,'?!";:]/g, "").replace(/\s\s+/g, ' ');

                if (normalizedUserAnswer === normalizedCorrectAnswer) {
                    return res.status(200).json({ isCorrect: true });
                }
                
                if (Math.abs(normalizedUserAnswer.length - normalizedCorrectAnswer.length) > Math.max(5, normalizedCorrectAnswer.length * 0.4)) {
                    return res.status(200).json({ isCorrect: false });
                }

                const systemInstruction = `You are an expert language evaluation AI for a language learning app. Your task is to determine if the user's answer is semantically correct, allowing for minor errors. Your response MUST be a single word: "true" or "false". Do not provide any explanation or punctuation.`;
                const prompt = `
      The user is learning English. Please evaluate their answer leniently.

      The expected correct answer is:
      "${correctAnswer}"

      The user's answer is:
      "${userAnswer}"

      Consider the user's answer correct if it is semantically equivalent to the correct answer.
      Please ignore minor errors like:
      - Spelling mistakes (e.g., 'hallo' instead of 'hello').
      - Punctuation differences (e.g., missing a period or using a different comma).
      - Capitalization differences.
      - Extra or missing articles ('a', 'an', 'the') if the meaning is not significantly changed.
      - Minor grammatical errors that do not change the core meaning of the sentence.

      Based on these lenient rules, is the user's answer correct?
      Respond with only "true" or "false".
    `;
                
                const response = await ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: prompt,
                    config: {
                        systemInstruction: systemInstruction,
                        maxOutputTokens: 5,
                        temperature: 0.0,
                        thinkingConfig: { thinkingBudget: 0 } 
                    }
                });

                const resultText = response.text.trim().toLowerCase();
                return res.status(200).json({ isCorrect: resultText === 'true' });
            }

            default:
                return res.status(400).json({ error: 'Invalid action' });
        }
    } catch (error: any) {
        console.error(`[Vercel Function Error] Action: ${action}`, error);
        return res.status(500).json({ error: 'An error occurred while processing your request.', details: error.message });
    }
}