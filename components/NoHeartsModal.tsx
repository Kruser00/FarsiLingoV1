import React, { useState, useEffect } from 'react';
import { useUserProgress } from '../contexts/UserProgressContext';
import { HeartIcon, GemIcon, XCircleIcon, VideoIcon, ClockIcon } from './icons';
import { showRewardedVideo } from '../services/adService';
import { playButtonClickSound } from '../services/soundService';

const AD_REWARD_COOLDOWN_MS = 5 * 60 * 1000; // 5 minutes
const GEMS_FOR_REFILL = 50;

interface NoHeartsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NoHeartsModal: React.FC<NoHeartsModalProps> = ({ isOpen, onClose }) => {
    const { gems, refillHeartsWithGems, refillHeartsWithAd, lastAdRewardTimestamp, isSoundEnabled, showInfoModal, showConfirmationModal } = useUserProgress();
    const [isShowingAd, setIsShowingAd] = useState(false);
    const [cooldownTime, setCooldownTime] = useState(0);

    useEffect(() => {
        if (!isOpen) return;

        const updateCooldown = () => {
            const timeSinceLastAd = Date.now() - lastAdRewardTimestamp;
            const remaining = AD_REWARD_COOLDOWN_MS - timeSinceLastAd;
            setCooldownTime(Math.max(0, remaining));
        };

        updateCooldown();
        const interval = setInterval(updateCooldown, 1000);

        return () => clearInterval(interval);
    }, [lastAdRewardTimestamp, isOpen]);

    const handleGemRefill = () => {
        playButtonClickSound(isSoundEnabled);
        const success = refillHeartsWithGems();
        if (success) {
            onClose();
        } else {
            showInfoModal('الماس کافی نیست', 'شما برای پر کردن قلب های خود به الماس بیشتری نیاز دارید.');
        }
    }

    const handleAdRefill = () => {
        if (isShowingAd || cooldownTime > 0) return;
        playButtonClickSound(isSoundEnabled);

        showConfirmationModal({
            title: 'دریافت قلب با تماشای ویدیو',
            message: 'برای پر کردن تمام قلب‌های خود، باید ویدیو را تا انتها تماشا کنید. آیا مایل به ادامه هستید؟',
            confirmText: 'بله، تماشا می‌کنم',
            cancelText: 'نه، ممنون',
            onConfirm: async () => {
                setIsShowingAd(true);
                try {
                    const rewarded = await showRewardedVideo();
                    if (rewarded) {
                        refillHeartsWithAd();
                        onClose();
                    } else {
                        showInfoModal('جایزه دریافت نشد', 'برای دریافت قلب باید ویدیو را تا انتها تماشا کنید. لطفاً دوباره تلاش کنید.');
                    }
                } catch (error) {
                    console.error("Ad error:", error);
                    const errorMessage = error instanceof Error ? error.message : String(error);
                    showInfoModal('خطا در تبلیغ', errorMessage);
                } finally {
                    setIsShowingAd(false);
                }
            }
        });
    };

    const minutes = Math.floor(cooldownTime / 60000);
    const seconds = Math.floor((cooldownTime % 60000) / 1000).toString().padStart(2, '0');
    const isAdButtonDisabled = isShowingAd || cooldownTime > 0;

    if (!isOpen) {
        return null;
    }

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
                    برای شروع یک درس جدید، قلب‌های خود را دوباره پر کنید یا منتظر بمانید.
                </p>
                <button
                    onClick={handleAdRefill}
                    disabled={isAdButtonDisabled}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-lg font-bold shadow-md transition-all hover:scale-105 bg-indigo-600 text-white hover:bg-indigo-500 disabled:bg-indigo-400/70 disabled:cursor-not-allowed"
                >
                    {isShowingAd ? (
                        <>
                           <div className="w-6 h-6 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
                           <span className="ml-2">در حال بارگذاری تبلیغ...</span>
                        </>
                    ) : cooldownTime > 0 ? (
                        <>
                            <ClockIcon className="w-6 h-6"/>
                            <span>{minutes}:{seconds} دیگر صبر کنید</span>
                        </>
                    ) : (
                        <>
                           <VideoIcon className="w-6 h-6" />
                           <span>مشاهده تبلیغ برای قلب کامل</span>
                        </>
                    )}
                </button>
                <button
                    onClick={handleGemRefill}
                    disabled={gems < GEMS_FOR_REFILL}
                    className="w-full mt-3 flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-lg font-bold shadow-md transition-all hover:scale-105 bg-teal-600 text-white hover:bg-teal-500 disabled:bg-slate-600 disabled:cursor-not-allowed"
                >
                    <GemIcon className="w-6 h-6" />
                    پر کردن قلب‌ها ({GEMS_FOR_REFILL} الماس)
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
