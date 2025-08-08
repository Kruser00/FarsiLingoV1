import React from 'react';
import { HomeIcon, HeartIcon, FlameIcon, GemIcon, SpeakerLoudIcon, SpeakerOffIcon } from './icons';
import { useUserProgress } from '../contexts/UserProgressContext';

interface HeaderProps {
    onHomeClick: () => void;
    showHomeButton: boolean;
}

const StatItem: React.FC<{ icon: React.ReactNode; value: number | string; colorClass: string; }> = ({ icon, value, colorClass }) => (
    <div className={`flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/50`}>
        <div className={colorClass}>{icon}</div>
        <span className="font-bold text-slate-200 text-md">{value}</span>
    </div>
);

export const Header: React.FC<HeaderProps> = ({ onHomeClick, showHomeButton }) => {
    const { hearts, streak, gems, userLevel, isSoundEnabled, toggleSound } = useUserProgress();
    
    return (
        <header className="w-full flex justify-between items-center py-2 flex-wrap gap-y-2">
            <div className="flex items-center gap-3">
                 <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl font-bold">FL</span>
                 </div>
                 <div>
                    <h1 className="text-2xl font-bold text-slate-100 leading-tight">
                        FarsiLingo
                    </h1>
                    {userLevel && (
                         <p className="text-sm text-indigo-300 font-semibold">{userLevel} Level</p>
                    )}
                 </div>
            </div>
            <div className="flex items-center gap-2">
                {showHomeButton && (
                    <>
                        <StatItem icon={<HeartIcon className="w-5 h-5"/>} value={hearts} colorClass="text-red-500" />
                        <StatItem icon={<FlameIcon className="w-5 h-5"/>} value={streak} colorClass="text-orange-400" />
                        <StatItem icon={<GemIcon className="w-5 h-5"/>} value={gems} colorClass="text-teal-400" />
                        <button
                            onClick={toggleSound}
                            className="p-2.5 rounded-lg text-slate-300 bg-slate-800/50 hover:bg-white/10 transition-colors"
                            aria-label={isSoundEnabled ? "Mute sounds" : "Unmute sounds"}
                        >
                            {isSoundEnabled ? <SpeakerLoudIcon className="w-5 h-5" /> : <SpeakerOffIcon className="w-5 h-5" />}
                        </button>
                        <button
                            onClick={onHomeClick}
                            className="p-2.5 rounded-lg text-slate-300 bg-slate-800/50 hover:bg-white/10 transition-colors"
                            aria-label="رفتن به خانه"
                        >
                            <HomeIcon className="w-5 h-5" />
                        </button>
                    </>
                )}
            </div>
        </header>
    );
};