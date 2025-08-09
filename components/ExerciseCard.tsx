import React from 'react';
import { Exercise, AnswerStatus, ExerciseType } from '../types';
import { CheckCircleIcon, XCircleIcon } from './icons';


interface ExerciseCardProps {
  exercise: Exercise;
  userAnswer: string;
  onAnswerChange: (answer: string) => void;
  answerStatus: AnswerStatus;
  onEnterPress: () => void;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, userAnswer, onAnswerChange, answerStatus, onEnterPress }) => {

    const renderPrompt = () => (
        <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100">{exercise.prompt}</h2>
            {exercise.farsiPrompt && <p className="text-lg text-slate-300 mt-2" style={{ direction: 'rtl' }}>{exercise.farsiPrompt}</p>}
        </div>
    );
    
    const renderContent = () => {
        switch (exercise.type) {
            case ExerciseType.MULTIPLE_CHOICE:
                return (
                    <div className="mt-8 w-full space-y-3">
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