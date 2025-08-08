import { Exercise } from '../types';

async function callApi<T>(action: string, payload: unknown): Promise<T> {
    try {
        const response = await fetch('/api/gemini', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ action, payload }),
        });

        if (!response.ok) {
            const errorBody = await response.json().catch(() => ({ error: 'Failed to parse error response' }));
            console.error('API Error:', response.status, errorBody);
            throw new Error(errorBody.error || `Request failed with status ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Error calling API for action "${action}":`, error);
        // Rethrow a more generic error to be displayed to the user
        throw new Error("A network error occurred. Please check your connection and try again.");
    }
}


export const generateLesson = async (topic: string, level: string): Promise<Exercise[]> => {
  try {
    return await callApi<Exercise[]>('generateLesson', { topic, level });
  } catch (error) {
    console.error("Error generating lesson:", error);
    throw new Error("Could not generate the lesson. Please try again.");
  }
};

export const generatePlacementTest = async (): Promise<Exercise[]> => {
    try {
        return await callApi<Exercise[]>('generatePlacementTest', {});
    } catch (error) {
        console.error("Error generating placement test:", error);
        throw new Error("Could not generate the placement test. Please try again.");
    }
};

export const evaluateAnswer = async (userAnswer: string, correctAnswer: string): Promise<boolean> => {
  const normalizedUserAnswer = userAnswer.trim().toLowerCase().replace(/[.,'?!";:]/g, "").replace(/\s\s+/g, ' ');
  const normalizedCorrectAnswer = correctAnswer.trim().toLowerCase().replace(/[.,'?!";:]/g, "").replace(/\s\s+/g, ' ');

  if (normalizedUserAnswer === normalizedCorrectAnswer) {
    return true;
  }
  
  // Heuristic to avoid unnecessary API calls for wildly different answers
  if (Math.abs(normalizedUserAnswer.length - normalizedCorrectAnswer.length) > Math.max(5, normalizedCorrectAnswer.length * 0.4)) {
      return false;
  }

  try {
    const result = await callApi<{ isCorrect: boolean }>('evaluateAnswer', { userAnswer, correctAnswer });
    return result.isCorrect;
  } catch (error) {
    console.error("Error evaluating answer with proxy, falling back to strict check:", error);
    // Fallback to a normalized strict check on API error
    return normalizedUserAnswer === normalizedCorrectAnswer;
  }
};
