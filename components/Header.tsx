import React, { useState, useEffect } from 'react';
import { HomeIcon, HeartIcon, FlameIcon, GemIcon, SpeakerLoudIcon, SpeakerOffIcon, GiftIcon, ClockIcon } from './icons';
import { useUserProgress } from '../contexts/UserProgressContext';
import { showRewardedVideo } from '../services/adService';
import { playButtonClickSound } from '../services/soundService';

const AD_REWARD_COOLDOWN_MS = 5 * 60 * 1000; // 5 minutes
const GEMS_FROM_AD = 15;

const AdRewardButton: React.FC = () => {
    const { addGemsFromAd, lastAdRewardTimestamp, isSoundEnabled } = useUserProgress();
    const [cooldownTime, setCooldownTime] = useState(0);
    const [isWatchingAd, setIsWatchingAd] = useState(false);

    useEffect(() => {
        const updateCooldown = () => {
            const timeSinceLastAd = Date.now() - lastAdRewardTimestamp;
            const remaining = AD_REWARD_COOLDOWN_MS - timeSinceLastAd;
            setCooldownTime(Math.max(0, remaining));
        };

        updateCooldown(); // Initial check
        const interval = setInterval(updateCooldown, 1000);

        return () => clearInterval(interval);
    }, [lastAdRewardTimestamp]);

    const handleWatchAd = async () => {
        if (cooldownTime > 0 || isWatchingAd) return;
        
        playButtonClickSound(isSoundEnabled);
        setIsWatchingAd(true);
        try {
            const rewarded = await showRewardedVideo();
            if (rewarded) {
                addGemsFromAd(GEMS_FROM_AD);
            } else {
                alert('شما برای دریافت جایزه باید ویدیو را تا انتها تماشا کنید.');
            }
        } catch (error) {
            console.error("Ad error:", error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            alert(`مشکلی در نمایش تبلیغ به وجود آمد. لطفا دوباره تلاش کنید.\n\nخطا: ${errorMessage}`);
        } finally {
            setIsWatchingAd(false);
        }
    };

    const minutes = Math.floor(cooldownTime / 60000);
    const seconds = Math.floor((cooldownTime % 60000) / 1000).toString().padStart(2, '0');

    const isDisabled = cooldownTime > 0 || isWatchingAd;
    const buttonText = isWatchingAd ? 'در حال بارگذاری...' : cooldownTime > 0 ? `${minutes}:${seconds}` : `+${GEMS_FROM_AD}`;

    return (
        <button
            onClick={handleWatchAd}
            disabled={isDisabled}
            className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/50 text-slate-200 transition-colors disabled:opacity-60 disabled:cursor-not-allowed hover:bg-slate-700/80"
            aria-label={isDisabled ? `جایزه در ${minutes}:${seconds} در دسترس است` : `مشاهده تبلیغ برای ${GEMS_FROM_AD} الماس`}
        >
            <div className={cooldownTime > 0 ? "text-slate-400" : "text-teal-400"}>
                {cooldownTime > 0 ? <ClockIcon className="w-5 h-5" /> : <GiftIcon className="w-5 h-5" />}
            </div>
            <span className="font-bold text-md min-w-[50px] text-center">{buttonText}</span>
        </button>
    );
};


const StatItem: React.FC<{ icon: React.ReactNode; value: number | string; colorClass: string; }> = ({ icon, value, colorClass }) => (
    <div className={`flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/50`}>
        <div className={colorClass}>{icon}</div>
        <span className="font-bold text-slate-200 text-md">{value}</span>
    </div>
);

export const Header: React.FC<{ onHomeClick: () => void; showHomeButton: boolean; }> = ({ onHomeClick, showHomeButton }) => {
    const { hearts, streak, gems, userLevel, isSoundEnabled, toggleSound } = useUserProgress();
    
    const handleToggleSound = () => {
        playButtonClickSound(!isSoundEnabled); // Play sound based on the action it's about to perform
        toggleSound();
    };

    return (
        <header className="w-full flex items-center justify-between p-2 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 shadow-md sticky top-4 z-40">
            <div className="flex items-center gap-2">
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
                    <StatItem icon={<GemIcon className="w-5 h-5" />} value={gems} colorClass="text-sky-400" />
                    <StatItem icon={<FlameIcon className="w-5 h-5" />} value={streak} colorClass="text-orange-400" />
                    <StatItem icon={<HeartIcon className="w-5 h-5 fill-red-500 stroke-red-500" />} value={hearts} colorClass="text-red-500" />
                </div>
            )}
        </header>
    );
};