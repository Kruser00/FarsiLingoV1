import React from 'react';
import { useUserProgress } from '../contexts/UserProgressContext';
import { HeartIcon, XCircleIcon } from './icons';

interface NoHeartsModalProps {
  isOpen: boolean;
  onClose: () => void; // This will now function as "onQuit"
}

const NoHeartsModal: React.FC<NoHeartsModalProps> = ({ isOpen, onClose }) => {
    const { } = useUserProgress();

    if (!isOpen) {
        return null;
    }

    return (
        <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
            <div 
                className="bg-slate-800/90 border-2 border-slate-700 rounded-2xl p-8 text-center w-full max-w-md relative shadow-2xl"
                onClick={e => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-3 right-3 text-slate-400 hover:text-white" aria-label="بستن">
                    <XCircleIcon className="w-8 h-8"/>
                </button>
                <HeartIcon className="w-20 h-20 text-red-500/50 mx-auto" />
                <h2 className="text-3xl font-bold mt-4 text-slate-100" style={{direction: 'rtl'}}>
                    شما تمام قلب‌هایتان را از دست دادید!
                </h2>
                <p className="text-lg text-slate-300 mt-2 mb-6" style={{direction: 'rtl'}}>
                    برای ادامه درس باید قلب داشته باشید.
                </p>
                <div className="space-y-3">
                    <button
                        onClick={onClose}
                        className="w-full mt-4 px-6 py-3 rounded-xl text-lg font-bold transition-colors text-slate-100 bg-indigo-600 hover:bg-indigo-500"
                    >
                        خروج از درس
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoHeartsModal;