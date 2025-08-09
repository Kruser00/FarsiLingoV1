

export enum ExerciseType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  TRANSLATE_TO_ENGLISH = 'TRANSLATE_TO_ENGLISH',
}

export type UserLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Exercise {
  type: ExerciseType;
  prompt: string;
  farsiPrompt?: string;
  options?: string[];
  answer: string;
  farsiSentence?: string;
  difficulty?: UserLevel;
}

export type AppView = 'START' | 'HOME' | 'LESSON' | 'LESSON_COMPLETE' | 'PLACEMENT_TEST' | 'PLACEMENT_TEST_COMPLETE' | 'CHOOSE_LEVEL';
export type AnswerStatus = 'UNANSWERED' | 'CORRECT' | 'INCORRECT';

export interface UserProgress {
    xp: number;
    level: number;
    hearts: number;
    lastHeartRefillTimestamp: number; // UTC timestamp ms
    lastAdRewardTimestamp: number; // UTC timestamp ms
    userLevel: UserLevel | null;
    isSoundEnabled: boolean;
}