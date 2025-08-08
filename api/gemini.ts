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
            type: { type: Type.STRING, enum: ['MULTIPLE_CHOICE', 'TRANSLATE_TO_ENGLISH', 'LISTENING', 'SPEAKING'], description: 'The type of exercise.' },
            prompt: { type: Type.STRING, description: 'The main instruction or question for the user in English.' },
            farsiPrompt: { type: Type.STRING, description: 'The Farsi translation of the prompt.' },
            options: { type: Type.ARRAY, items: { type: Type.STRING }, description: 'An array of strings with possible answers for MULTIPLE_CHOICE.' },
            answer: { type: Type.STRING, description: 'The correct answer.' },
            farsiSentence: { type: Type.STRING, description: 'The sentence in Farsi for translation exercises.' },
            difficulty: { type: Type.STRING, enum: ['Beginner', 'Intermediate', 'Advanced'], description: 'The difficulty level of this specific exercise.' },
        },
        required: ['type', 'prompt', 'answer']
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
      Generate a complete, short English lesson about "${topic}" for a ${level}-level learner.
      The lesson must be a JSON array of 5 to 7 exercises.
      
      Follow these rules precisely:
      1.  The JSON output must be an array of objects, matching the provided schema.
      2.  Include a mix of exercise types: 'MULTIPLE_CHOICE', 'TRANSLATE_TO_ENGLISH', 'LISTENING', and 'SPEAKING'.
      3.  All text content (prompts, options, answers) must be complete, final, and appropriate for a real lesson.
      4.  DO NOT use any placeholders, sample text, or instructional comments like "[your text here]" or "(e.g., ...)" in any field.
      5.  For MULTIPLE_CHOICE, provide 3-4 distinct options.
      6.  For TRANSLATE_TO_ENGLISH, the 'farsiSentence' field must contain the Farsi text to be translated.
      7.  Difficulty must be strictly for ${level} learners. For beginners, use simple vocabulary and grammar. For advanced, use more complex structures.
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

            case 'generatePlacementTest': {
                const systemInstruction = `You are an expert English teacher creating a placement test for Farsi speakers. Your output MUST be a valid JSON array of exercise objects. Do not include any text or markdown formatting outside of the JSON array.`;
                const prompt = `
            Generate a comprehensive placement test to accurately gauge an English learner's level.
            The test must be a JSON array of exactly 9 exercises.
            
            Follow these rules precisely:
            1.  The JSON output must be an array of objects, matching the provided schema.
            2.  Create exactly 3 'Beginner' exercises first.
            3.  Then, create exactly 3 'Intermediate' exercises.
            4.  Finally, create exactly 3 'Advanced' exercises.
            5.  The 'difficulty' field for each exercise MUST be set correctly to 'Beginner', 'Intermediate', or 'Advanced'.
            6.  Include a mix of exercise types: 'MULTIPLE_CHOICE', 'TRANSLATE_TO_ENGLISH', 'LISTENING', and 'SPEAKING'.
            7.  All text content must be complete and professional. Do not use placeholders.
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
                const testData = JSON.parse(jsonText);
                
                if (!Array.isArray(testData) || testData.length !== 9) {
                    throw new Error("Parsed placement test data is not a valid 9-exercise array.");
                }
                
                return res.status(200).json(testData);
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