import React, { useState, useEffect } from 'react';
import { HomeIcon, HeartIcon, SpeakerLoudIcon, SpeakerOffIcon, VideoIcon, ClockIcon } from './icons';
import { useUserProgress } from '../contexts/UserProgressContext';
import { playButtonClickSound } from '../services/soundService';
import { showRewardedVideo } from '../services/adService';

const StatItem: React.FC<{ icon: React.ReactNode; value: number | string; colorClass: string; }> = ({ icon, value, colorClass }) => (
    <div className={`flex items-center gap-1 p-1.5 md:p-2 rounded-lg bg-slate-800/50`}>
        <div className={colorClass}>{icon}</div>
        <span className="font-bold text-slate-200 text-sm md:text-md">{value}</span>
    </div>
);

const AD_REWARD_COOLDOWN_MS = 5 * 60 * 1000; // 5 minutes
const MAX_HEARTS = 5;

const AdRewardButton: React.FC = () => {
    const { 
        hearts, 
        refillHeartsWithAd, 
        lastAdRewardTimestamp, 
        isSoundEnabled, 
        showInfoModal, 
        showConfirmationModal 
    } = useUserProgress();
    
    const [isShowingAd, setIsShowingAd] = useState(false);
    const [cooldownTime, setCooldownTime] = useState(0);

    useEffect(() => {
        const updateCooldown = () => {
            const timeSinceLastAd = Date.now() - lastAdRewardTimestamp;
            const remaining = AD_REWARD_COOLDOWN_MS - timeSinceLastAd;
            setCooldownTime(Math.max(0, remaining));
        };

        updateCooldown();
        const interval = setInterval(updateCooldown, 1000);
        return () => clearInterval(interval);
    }, [lastAdRewardTimestamp]);

    const handleAdRefill = () => {
        if (isShowingAd || cooldownTime > 0 || hearts >= MAX_HEARTS) return;
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
                        showInfoModal('جایزه دریافت شد!', 'قلب‌های شما با موفقیت پر شد.');
                    } else {
                        showInfoModal('جایزه دریافت نشد', 'برای دریافت قلب باید ویدیو را تا انتها تماشا کنید.');
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

    const isButtonDisabled = isShowingAd || cooldownTime > 0 || hearts >= MAX_HEARTS;
    const minutes = Math.floor(cooldownTime / 60000);
    const seconds = Math.floor((cooldownTime % 60000) / 1000).toString().padStart(2, '0');

    let buttonContent;
    if (isShowingAd) {
        buttonContent = (
            <>
                <div className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
                <span className="text-sm">در حال بارگذاری...</span>
            </>
        );
    } else if (cooldownTime > 0) {
        buttonContent = (
            <>
                <ClockIcon className="w-4 h-4" />
                <span className="text-sm font-mono">{minutes}:{seconds}</span>
            </>
        );
    } else if (hearts >= MAX_HEARTS) {
        buttonContent = (
            <>
                <HeartIcon className="w-4 h-4 fill-green-500" />
                <span className="text-sm">پر</span>
            </>
        );
    } else {
        buttonContent = (
            <>
                <VideoIcon className="w-4 h-4" />
                <span className="text-sm">قلب رایگان</span>
            </>
        );
    }
    
    return (
        <button
            onClick={handleAdRefill}
            disabled={isButtonDisabled}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-600 text-white shadow-md transition-all hover:bg-indigo-500 disabled:bg-slate-600 disabled:opacity-70 disabled:cursor-not-allowed"
            aria-label="دریافت قلب با تماشای ویدیو"
        >
            {buttonContent}
        </button>
    );
};

export const Header: React.FC<{ onHomeClick: () => void; showHomeButton: boolean; }> = ({ onHomeClick, showHomeButton }) => {
    const { hearts, userLevel, isSoundEnabled, toggleSound } = useUserProgress();
    
    const handleToggleSound = () => {
        playButtonClickSound(!isSoundEnabled); // Play sound based on the action it's about to perform
        toggleSound();
    };

    return (
        <header className="w-full flex items-center justify-between p-2 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 shadow-md sticky top-4 z-40">
            <div className="flex items-center gap-1 md:gap-2">
                {showHomeButton && (
                    <button onClick={onHomeClick} className="p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="Home">
                        <HomeIcon className="w-7 h-7 text-slate-300" />
                    </button>
                )}
                 <button onClick={handleToggleSound} className="p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label={isSoundEnabled ? "Mute sounds" : "Unmute sounds"}>
                    {isSoundEnabled ? <SpeakerLoudIcon className="w-6 h-6 text-slate-300" /> : <SpeakerOffIcon className="w-6 h-6 text-slate-400" />}
                </button>
            </div>
            
            {userLevel && (
                <div className="flex items-center gap-2 md:gap-3">
                    <AdRewardButton />
                    <StatItem icon={<HeartIcon className="w-5 h-5 fill-red-500 stroke-red-500" />} value={hearts} colorClass="text-red-500" />
                </div>
            )}
        </header>
    );
};
