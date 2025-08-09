import React from 'react';
import { Exercise, AnswerStatus, ExerciseType } from '../types';
import { CheckCircleIcon, XCircleIcon, SpeakerLoudIcon } from './icons';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { useUserProgress } from '../contexts/UserProgressContext';

interface ExerciseCardProps {
  exercise: Exercise;
  userAnswer: string;
  onAnswerChange: (answer: string) => void;
  answerStatus: AnswerStatus;
  onEnterPress: () => void;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, userAnswer, onAnswerChange, answerStatus, onEnterPress }) => {
    const { speak } = useSpeechSynthesis();
    const { isSoundEnabled } = useUserProgress();
    
    const handleSpeak = (text: string) => {
        if(isSoundEnabled) {
            speak(text);
        }
    };

    const renderPrompt = () => (
        <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100">{exercise.prompt}</h2>
            {exercise.farsiPrompt && <p className="text-lg text-slate-300 mt-2" style={{ direction: 'rtl' }}>{exercise.farsiPrompt}</p>}
        </div>
    );
    
    const renderContent = () => {
        switch (exercise.type) {
            case ExerciseType.LEARN:
                return (
                    <div className="mt-8 w-full max-w-lg text-center bg-slate-800/60 p-6 rounded-2xl border-2 border-slate-700/70">
                        <div className="flex items-center justify-center gap-4">
                            <h3 className="text-3xl font-bold text-indigo-400">{exercise.prompt}</h3>
                            <button
                                onClick={() => handleSpeak(exercise.prompt)}
                                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                                aria-label={`Listen to "${exercise.prompt}"`}
                            >
                                <SpeakerLoudIcon className="w-7 h-7 text-slate-300"/>
                            </button>
                        </div>
                        <p className="text-xl text-slate-300 mt-2" style={{direction: 'rtl'}}>{exercise.farsiPrompt}</p>
                        
                        {exercise.sentence && (
                            <div className="mt-6 border-t border-slate-700 pt-4 text-left">
                                <p className="text-sm text-slate-400" style={{direction: 'rtl'}}>مثال:</p>
                                <p className="text-lg font-semibold text-slate-200 mt-1" style={{direction: 'ltr'}}>
                                    "{exercise.sentence}"
                                </p>
                                {exercise.farsiSentenceExample && (
                                    <p className="text-md text-slate-300 mt-2" style={{direction: 'rtl'}}>
                                        {exercise.farsiSentenceExample}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                );

            case ExerciseType.MULTIPLE_CHOICE:
                return (
                    <div className="mt-8 w-full">
                        {exercise.sentence && (
                            <div className="p-4 bg-slate-800/70 rounded-xl text-center mb-4">
                                <p className="text-xl font-semibold text-slate-200 tracking-wider" style={{direction: 'ltr'}}>
                                    {exercise.sentence.replace(/___/g, '______')}
                                </p>
                            </div>
                        )}
                        <div className="space-y-3">
                            {exercise.options?.map((option, index) => {
                                 const isSelected = userAnswer === option;
                                 const isCorrect = exercise.answer === option;
                                 let buttonClass = "bg-slate-800/60 hover:bg-slate-700/80 text-slate-200";

                                 if (answerStatus !== 'UNANSWERED' && isSelected) {
                                     buttonClass = isCorrect ? "bg-teal-900/70 border-teal-500 text-teal-300" : "bg-rose-900/70 border-rose-500 text-rose-300";
                                 } else if (answerStatus !== 'UNANSWERED' && isCorrect) {
                                     buttonClass = "bg-teal-900/70 border-teal-500 text-teal-300";
                                 }
                                 
                                 return (
                                    <button
                                        key={index}
                                        onClick={() => onAnswerChange(option)}
                                        disabled={answerStatus !== 'UNANSWERED'}
                                        className={`w-full p-4 rounded-xl border-2 text-lg font-semibold transition-all duration-200 flex items-center justify-between
                                            ${isSelected ? 'border-indigo-500' : 'border-slate-700/70'}
                                            ${buttonClass}
                                            ${answerStatus !== 'UNANSWERED' ? 'cursor-not-allowed' : ''}
                                        `}
                                    >
                                        {option}
                                        {answerStatus !== 'UNANSWERED' && isCorrect && <CheckCircleIcon className="w-6 h-6 text-teal-400" />}
                                        {answerStatus !== 'UNANSWERED' && isSelected && !isCorrect && <XCircleIcon className="w-6 h-6 text-rose-400" />}
                                    </button>
                                 );
                            })}
                        </div>
                    </div>
                );
            
            case ExerciseType.TRANSLATE_TO_ENGLISH:
                return (
                    <div className="mt-8 w-full">
                        <div className="p-4 bg-slate-800/70 rounded-xl text-center">
                            <p className="text-lg font-semibold text-slate-200" style={{direction: 'rtl'}}>{exercise.farsiSentence}</p>
                        </div>
                        <textarea
                            value={userAnswer}
                            onChange={(e) => onAnswerChange(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), onEnterPress())}
                            placeholder="به انگلیسی تایپ کنید..."
                            disabled={answerStatus !== 'UNANSWERED'}
                            className="mt-4 w-full p-4 text-lg text-slate-200 bg-slate-800/60 border-2 border-slate-700/70 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition disabled:bg-slate-800/50"
                            rows={3}
                        />
                    </div>
                );

            default:
                return null;
        }
    };
    
    return (
      <div className="w-full flex flex-col items-center p-4">
        {renderPrompt()}
        {renderContent()}
      </div>
    );
};