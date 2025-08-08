import React, { useEffect, useRef } from 'react';
import { Exercise, AnswerStatus, ExerciseType } from '../types';
import { SpeakerIcon, MicrophoneIcon, CheckCircleIcon, XCircleIcon } from './icons';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';


interface ExerciseCardProps {
  exercise: Exercise;
  userAnswer: string;
  onAnswerChange: (answer: string) => void;
  answerStatus: AnswerStatus;
  onEnterPress: (spokenAnswer?: string) => void;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, userAnswer, onAnswerChange, answerStatus, onEnterPress }) => {
    const { speak, isSpeaking } = useSpeechSynthesis();
    const { transcript, isListening, startListening, hasRecognitionSupport } = useSpeechRecognition();

    const prevIsListeningRef = useRef<boolean>(false);
    useEffect(() => {
        prevIsListeningRef.current = isListening;
    });
    const prevIsListening = prevIsListeningRef.current;

    useEffect(() => {
        if (transcript) {
            onAnswerChange(transcript);
        }
    }, [transcript, onAnswerChange]);
    
    // Automatically check the answer for speaking exercises when listening stops.
    useEffect(() => {
        if (exercise.type === ExerciseType.SPEAKING && prevIsListening && !isListening && transcript) {
            onEnterPress(transcript);
        }
    }, [exercise.type, prevIsListening, isListening, transcript, onEnterPress]);


    const handleSpeakAndListen = () => {
        if(isListening) {
            // This logic is handled by the browser's speech recognition UI
        } else {
            onAnswerChange(""); // Clear previous answer
            startListening();
        }
    }

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

            case ExerciseType.LISTENING:
                 return (
                    <div className="mt-8 w-full flex flex-col items-center">
                        <button
                            onClick={() => speak(exercise.answer)}
                            disabled={isSpeaking}
                            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full text-lg font-bold hover:bg-indigo-700 transition-colors disabled:bg-indigo-500/80"
                        >
                            <SpeakerIcon className="w-6 h-6" />
                            {isSpeaking ? 'در حال پخش...' : 'پخش صدا'}
                        </button>
                         <textarea
                            value={userAnswer}
                            onChange={(e) => onAnswerChange(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), onEnterPress())}
                            placeholder="آنچه می شنوید را تایپ کنید..."
                            disabled={answerStatus !== 'UNANSWERED'}
                            className="mt-4 w-full p-4 text-lg text-slate-200 bg-slate-800/60 border-2 border-slate-700/70 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition disabled:bg-slate-800/50"
                            rows={3}
                        />
                    </div>
                );

            case ExerciseType.SPEAKING:
                return (
                    <div className="mt-8 w-full flex flex-col items-center">
                       <div className="p-4 bg-slate-800/70 rounded-xl text-center mb-6">
                            <p className="text-xl font-bold text-slate-200">{exercise.answer}</p>
                       </div>
                       <button
                           onClick={handleSpeakAndListen}
                           disabled={answerStatus !== 'UNANSWERED' || !hasRecognitionSupport || isListening}
                           className={`flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold transition-all text-white transform hover:scale-105
                               ${isListening ? 'bg-rose-600 hover:bg-rose-700' : 'bg-indigo-600 hover:bg-indigo-700'}
                               ${!hasRecognitionSupport ? 'bg-slate-500 cursor-not-allowed' : ''}
                               ${isListening ? 'scale-110' : ''}
                               ${answerStatus !== 'UNANSWERED' ? 'bg-slate-600 cursor-not-allowed' : ''}
                           `}
                       >
                           <MicrophoneIcon className="w-6 h-6" />
                           {isListening ? 'در حال گوش دادن...' : 'الان صحبت کنید'}
                       </button>
                        {!hasRecognitionSupport && <p className="text-red-500 text-sm mt-2" style={{ direction: 'rtl' }}>تشخیص گفتار در این مرورگر پشتیبانی نمی‌شود.</p>}
                        {userAnswer && <p className="mt-4 text-slate-300 text-center italic" style={{ direction: 'rtl' }}>شما گفتید: "{userAnswer}"</p>}
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