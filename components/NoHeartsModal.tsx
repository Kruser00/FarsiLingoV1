import React from 'react';
import { useUserProgress } from '../contexts/UserProgressContext';
import { HeartIcon, GemIcon, XCircleIcon, VideoIcon } from './icons';

interface NoHeartsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NoHeartsModal: React.FC<NoHeartsModalProps> = ({ isOpen, onClose }) => {
    const { gems, refillHeartsWithGems, refillHeartsWithAd } = useUserProgress();
    const GEMS_FOR_REFILL = 50;

    if (!isOpen) {
        return null;
    }

    const handleGemRefill = () => {
        const success = refillHeartsWithGems();
        if (success) {
            onClose();
        } else {
            alert('شما به اندازه کافی الماس ندارید!');
        }
    }

    const handleAdRefill = () => {
        refillHeartsWithAd();
        onClose();
    };

    return (
        <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div 
                className="bg-slate-800/90 border-2 border-slate-700 rounded-2xl p-8 text-center w-full max-w-md relative shadow-2xl"
                onClick={e => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-3 right-3 text-slate-400 hover:text-white">
                    <XCircleIcon className="w-8 h-8"/>
                </button>
                <HeartIcon className="w-20 h-20 text-red-500/50 mx-auto" />
                <h2 className="text-3xl font-bold mt-4 text-slate-100" style={{direction: 'rtl'}}>
                    شما تمام قلب‌هایتان را از دست دادید!
                </h2>
                <p className="text-lg text-slate-300 mt-2 mb-6" style={{direction: 'rtl'}}>
                    برای شروع یک درس جدید، قلب‌های خود را دوباره پر کنید یا برای دریافت قلب رایگان، یک تبلیغ تماشا کنید.
                </p>
                <button
                    onClick={handleAdRefill}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-lg font-bold shadow-md transition-all hover:scale-105 bg-indigo-600 text-white hover:bg-indigo-500"
                >
                    <VideoIcon className="w-6 h-6" />
                    مشاهده تبلیغ برای قلب کامل
                </button>
                <button
                    onClick={handleGemRefill}
                    disabled={gems < GEMS_FOR_REFILL}
                    className="w-full mt-3 flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-lg font-bold shadow-md transition-all hover:scale-105 bg-teal-600 text-white hover:bg-teal-500 disabled:bg-slate-600 disabled:cursor-not-allowed"
                >
                    <GemIcon className="w-6 h-6" />
                    پر کردن قلب‌ها (۵۰ الماس)
                </button>
                 <button
                    onClick={onClose}
                    className="w-full mt-4 px-6 py-3 rounded-xl text-lg font-bold transition-colors text-slate-300 hover:bg-slate-700/50"
                >
                    متوجه شدم
                </button>
            </div>
        </div>
    );
};

export default NoHeartsModal;