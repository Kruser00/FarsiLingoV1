import React, { useState, useEffect, useCallback } from 'react';
import { Exercise, AnswerStatus, ExerciseType } from '../types';
import { generateLesson, evaluateAnswer } from '../services/geminiService';
import { playCorrectSound, playIncorrectSound, playHeartLostSound } from '../services/soundService';
import { ExerciseCard } from './ExerciseCard';
import { LessonFooter } from './LessonFooter';
import { ProgressBar } from './ProgressBar';
import { useUserProgress } from '../contexts/UserProgressContext';

interface LessonScreenProps {
  topic: string;
  level: string;
  onFinish: (score: number, total: number, xp: number) => void;
}

const LessonScreen: React.FC<LessonScreenProps> = ({ topic, level, onFinish }) => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus>('UNANSWERED');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isCheckingAnswer, setIsCheckingAnswer] = useState(false);
  const [sessionXp, setSessionXp] = useState(0);

  const { loseHeart, addXp } = useUserProgress();

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const lessonExercises = await generateLesson(topic, level);
        if (lessonExercises.length === 0) {
          setError('درسی برای این موضوع ساخته نشد. لطفا موضوع دیگری را امتحان کنید.');
        } else {
          setExercises(lessonExercises);
        }
      } catch (e: any) {
        setError(e.message || 'خطای غیرمنتظره ای رخ داد.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLesson();
  }, [topic, level]);

  const handleCheckAnswer = useCallback(async (spokenAnswer?: string) => {
    const answerToCheck = spokenAnswer ?? userAnswer;
    if (answerStatus !== 'UNANSWERED' || !answerToCheck.trim() || isCheckingAnswer) return;
    
    setIsCheckingAnswer(true);
    const currentExercise = exercises[currentIndex];
    const { type, answer } = currentExercise;

    const typesForLenientCheck: ExerciseType[] = [ExerciseType.TRANSLATE_TO_ENGLISH, ExerciseType.LISTENING, ExerciseType.SPEAKING];
    let isCorrect = false;

    try {
        if (typesForLenientCheck.includes(type)) {
            isCorrect = await evaluateAnswer(answerToCheck, answer);
        } else {
            isCorrect = answerToCheck.trim().toLowerCase() === answer.trim().toLowerCase();
        }
    } catch (e) {
        console.error("Error during answer evaluation:", e);
        isCorrect = answerToCheck.trim().toLowerCase() === answer.trim().toLowerCase();
    }
    
    if (isCorrect) {
      playCorrectSound();
      setAnswerStatus('CORRECT');
      setCorrectAnswers(prev => prev + 1);
      const xpGained = 10;
      setSessionXp(prev => prev + xpGained);
      addXp(xpGained);
    } else {
      playIncorrectSound();
      playHeartLostSound();
      loseHeart();
      setAnswerStatus('INCORRECT');
    }
    setIsCheckingAnswer(false);
  }, [answerStatus, userAnswer, exercises, currentIndex, isCheckingAnswer, loseHeart, addXp]);

  const handleContinue = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setUserAnswer('');
      setAnswerStatus('UNANSWERED');
    } else {
       onFinish(correctAnswers, exercises.length, sessionXp);
    }
  };

  if (isLoading) {
    return (
        <div className="flex flex-col items-center justify-center h-64">
            <div className="w-16 h-16 border-4 border-t-4 border-t-purple-500 border-gray-700 rounded-full animate-spin"></div>
            <p className="mt-4 text-slate-300" style={{ direction: 'rtl' }}>در حال ساخت درس {level} شما در مورد "{topic}"...</p>
        </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 bg-rose-900/50 rounded-lg">
        <h3 className="text-xl font-bold text-rose-300" style={{ direction: 'rtl' }}>اوه! مشکلی پیش آمد.</h3>
        <p className="mt-2 text-rose-400" style={{ direction: 'rtl' }}>{error}</p>
        <button onClick={() => onFinish(0, 0, 0)} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            بازگشت
        </button>
      </div>
    );
  }

  if (exercises.length === 0) {
    return null; // Or some other placeholder
  }
  
  const currentExercise = exercises[currentIndex];
  const progress = ((currentIndex + 1) / exercises.length) * 100;

  return (
    <div className="w-full flex flex-col" style={{minHeight: '60vh'}}>
      <ProgressBar progress={progress} />
      <div className="flex-grow flex items-center">
        <ExerciseCard
            exercise={currentExercise}
            userAnswer={userAnswer}
            onAnswerChange={setUserAnswer}
            answerStatus={answerStatus}
            onEnterPress={answerStatus === 'UNANSWERED' ? handleCheckAnswer : handleContinue}
        />
      </div>
      <LessonFooter
        answerStatus={answerStatus}
        onCheck={handleCheckAnswer}
        onContinue={handleContinue}
        isLastQuestion={currentIndex === exercises.length - 1}
        correctAnswer={currentExercise.answer}
        isCheckDisabled={!userAnswer.trim() || isCheckingAnswer}
        isChecking={isCheckingAnswer}
      />
    </div>
  );
};

export default LessonScreen;
