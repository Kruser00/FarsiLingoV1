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

// --- Jaro-Winkler similarity function for smarter answer evaluation ---
function jaroWinkler(s1: string, s2: string): number {
    if (s1 === s2) return 1.0;
    if (!s1 || !s2) return 0.0;

    let m = 0;
    const range = Math.floor(Math.max(s1.length, s2.length) / 2) - 1;
    const s1Matches = new Array(s1.length).fill(false);
    const s2Matches = new Array(s2.length).fill(false);

    for (let i = 0; i < s1.length; i++) {
        const start = Math.max(0, i - range);
        const end = Math.min(i + range + 1, s2.length);
        for (let j = start; j < end; j++) {
            if (!s2Matches[j] && s1[i] === s2[j]) {
                s1Matches[i] = true;
                s2Matches[j] = true;
                m++;
                break;
            }
        }
    }

    if (m === 0) return 0.0;

    let t = 0;
    let k = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1Matches[i]) {
            while (!s2Matches[k]) k++;
            if (s1[i] !== s2[k]) t++;
            k++;
        }
    }

    const jaro = (m / s1.length + m / s2.length + (m - t / 2) / m) / 3;

    // Winkler bonus
    let p = 0.1;
    let l = 0;
    const limit = Math.min(4, s1.length, s2.length);
    while (l < limit && s1[l] === s2[l]) l++;
    
    return jaro + l * p * (1 - jaro);
}


export const generateLesson = async (topic: string, level: string): Promise<Exercise[]> => {
  const lessonCacheKey = `lesson-${level}-${topic}`;
  
  // 1. Try to load from localStorage first
  try {
    const cachedLesson = localStorage.getItem(lessonCacheKey);
    if (cachedLesson) {
      console.log(`Loading lesson "${topic}" from cache.`);
      return JSON.parse(cachedLesson);
    }
  } catch (e) {
    console.warn("Could not read lesson from localStorage", e);
  }

  // 2. If not in cache, call API
  try {
    console.log(`Generating lesson "${topic}" via API.`);
    const lessonExercises = await callApi<Exercise[]>('generateLesson', { topic, level });
    
    // 3. Cache the new lesson in localStorage
    try {
      localStorage.setItem(lessonCacheKey, JSON.stringify(lessonExercises));
    } catch (e) {
      console.warn("Could not save lesson to localStorage", e);
    }
    
    return lessonExercises;
  } catch (error) {
    console.error("Error generating lesson:", error);
    throw new Error("Could not generate the lesson. Please try again.");
  }
};

export const generatePlacementTest = async (): Promise<Exercise[]> => {
    const testCacheKey = 'placement-test';

    // 1. Try to load from localStorage
    try {
        const cachedTest = localStorage.getItem(testCacheKey);
        if (cachedTest) {
            console.log("Loading placement test from cache.");
            return JSON.parse(cachedTest);
        }
    } catch(e) {
        console.warn("Could not read placement test from localStorage", e);
    }

    // 2. Call API if not cached
    try {
        console.log("Generating placement test via API.");
        const testExercises = await callApi<Exercise[]>('generatePlacementTest', {});

        // 3. Cache the new test
        try {
            localStorage.setItem(testCacheKey, JSON.stringify(testExercises));
        } catch(e) {
            console.warn("Could not save placement test to localStorage", e);
        }
        return testExercises;
    } catch (error) {
        console.error("Error generating placement test:", error);
        throw new Error("Could not generate the placement test. Please try again.");
    }
};

export const evaluateAnswer = async (userAnswer: string, correctAnswer: string): Promise<boolean> => {
  const normalizedUserAnswer = userAnswer.trim().toLowerCase().replace(/[.,'?!";:]/g, "").replace(/\s\s+/g, ' ');
  const normalizedCorrectAnswer = correctAnswer.trim().toLowerCase().replace(/[.,'?!";:]/g, "").replace(/\s\s+/g, ' ');

  // Strict check first for perfect match
  if (normalizedUserAnswer === normalizedCorrectAnswer) {
    return true;
  }
  
  // Use Jaro-Winkler similarity for a more intelligent client-side check
  // This reduces API calls for answers that are clearly wrong.
  const similarity = jaroWinkler(normalizedUserAnswer, normalizedCorrectAnswer);
  if (similarity < 0.75) { // Threshold can be tuned
      console.log(`Answer rejected by client-side check (Similarity: ${similarity.toFixed(2)})`);
      return false;
  }

  // If the answer is close enough, use the API for a lenient check
  console.log(`Answer passed client-side check (Similarity: ${similarity.toFixed(2)}), verifying with API.`);
  try {
    const result = await callApi<{ isCorrect: boolean }>('evaluateAnswer', { userAnswer, correctAnswer });
    return result.isCorrect;
  } catch (error) {
    console.error("Error evaluating answer with proxy, falling back to strict check:", error);
    // Fallback to a normalized strict check on API error
    return normalizedUserAnswer === normalizedCorrectAnswer;
  }
};
