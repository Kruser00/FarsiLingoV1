import React, { createContext, useState, useEffect, useContext, ReactNode, useCallback } from 'react';
import { UserLevel, UserProgress } from '../types';

const MAX_HEARTS = 5;
const HEART_REFILL_RATE_HOURS = 4;
const GEMS_FOR_REFILL = 50;

const STORAGE_KEY = 'farsilingo_user_progress';

// XP and Leveling constants
const XP_BASE = 100;
const XP_GROWTH_RATE = 1.5;

// --- Level Calculation ---
// Calculates the total XP required to reach a specific level.
const getXpForLevel = (level: number): number => {
    if (level <= 1) return 0;
    return Math.floor(XP_BASE * Math.pow(level - 1, XP_GROWTH_RATE));
};

// Calculates the user's current level based on their total XP.
const getLevelForXp = (xp: number): number => {
    if (xp < XP_BASE) return 1;
    // Reverse the formula: level = (xp / base)^(1/growth) + 1
    return Math.floor(Math.pow(xp / XP_BASE, 1 / XP_GROWTH_RATE)) + 1;
};

interface InfoModalState {
    isOpen: boolean;
    title: string;
    message: string;
}

interface ConfirmationModalState {
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    confirmText?: string;
    cancelText?: string;
}

interface UserProgressContextType extends UserProgress {
    xpForCurrentLevel: number;
    xpForNextLevel: number;
    setUserLevel: (level: UserLevel) => void;
    addXp: (amount: number) => void;
    loseHeart: () => void;
    updateStreak: () => void;
    addGems: (amount: number) => void;
    refillHeartsWithGems: () => boolean;
    refillHeartsWithAd: () => void;
    addGemsFromAd: (amount: number) => void;
    toggleSound: () => void;
    infoModal: InfoModalState;
    confirmationModal: ConfirmationModalState;
    showInfoModal: (title: string, message: string) => void;
    hideInfoModal: () => void;
    showConfirmationModal: (config: Omit<ConfirmationModalState, 'isOpen'>) => void;
    hideConfirmationModal: () => void;
}

const UserProgressContext = createContext<UserProgressContextType | undefined>(undefined);

const getDefaultProgress = (): UserProgress => ({
    xp: 0,
    level: 1,
    gems: 0,
    hearts: MAX_HEARTS,
    streak: 0,
    lastLessonDate: null,
    lastHeartRefillTimestamp: Date.now(),
    lastAdRewardTimestamp: 0,
    userLevel: null,
    isSoundEnabled: true,
});

export const UserProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [progress, setProgress] = useState<UserProgress>(() => {
        try {
            const storedProgress = localStorage.getItem(STORAGE_KEY);
            if (storedProgress) {
                const parsed = JSON.parse(storedProgress);
                // Recalculate level on load in case the formula changes
                const level = getLevelForXp(parsed.xp || 0);
                return { ...getDefaultProgress(), ...parsed, level };
            }
            return getDefaultProgress();
        } catch (error) {
            console.error("Failed to parse user progress from localStorage", error);
            return getDefaultProgress();
        }
    });
    
    const [infoModal, setInfoModal] = useState<InfoModalState>({ isOpen: false, title: '', message: '' });
    const [confirmationModal, setConfirmationModal] = useState<ConfirmationModalState>({ isOpen: false, title: '', message: '', onConfirm: () => {} });

    useEffect(() => {
        // This effect runs on initial load to handle timed heart refills.
        const now = Date.now();
        const { hearts, lastHeartRefillTimestamp } = progress;

        if (hearts < MAX_HEARTS) {
            const hoursPassed = (now - lastHeartRefillTimestamp) / (1000 * 60 * 60);
            const heartsToRefill = Math.floor(hoursPassed / HEART_REFILL_RATE_HOURS);
            
            if (heartsToRefill > 0) {
                setProgress(prev => {
                    const newHearts = Math.min(MAX_HEARTS, prev.hearts + heartsToRefill);
                    const newTimestamp = prev.lastHeartRefillTimestamp + (heartsToRefill * HEART_REFILL_RATE_HOURS * 1000 * 60 * 60);
                    return { ...prev, hearts: newHearts, lastHeartRefillTimestamp: newTimestamp };
                });
            }
        }
    }, []); // Run only once on mount

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
        } catch (error) {
            console.error("Failed to save user progress to localStorage", error);
        }
    }, [progress]);
    
    const showInfoModal = useCallback((title: string, message: string) => {
        setInfoModal({ isOpen: true, title, message });
    }, []);

    const hideInfoModal = useCallback(() => {
        setInfoModal(prev => ({ ...prev, isOpen: false }));
    }, []);

    const showConfirmationModal = useCallback((config: Omit<ConfirmationModalState, 'isOpen'>) => {
        setConfirmationModal({ ...config, isOpen: true });
    }, []);

    const hideConfirmationModal = useCallback(() => {
        setConfirmationModal(prev => ({ ...prev, isOpen: false }));
    }, []);


    const setUserLevel = useCallback((level: UserLevel) => {
        setProgress(prev => ({ ...prev, userLevel: level }));
    }, []);

    const addXp = useCallback((amount: number) => {
        setProgress(prev => {
            const newXp = prev.xp + amount;
            const newLevel = getLevelForXp(newXp);
            return { ...prev, xp: newXp, level: newLevel };
        });
    }, []);

    const loseHeart = useCallback(() => {
        setProgress(prev => ({ ...prev, hearts: Math.max(0, prev.hearts - 1) }));
    }, []);

    const addGems = useCallback((amount: number) => {
        setProgress(prev => ({ ...prev, gems: prev.gems + amount }));
    }, []);

    const refillHeartsWithGems = useCallback(() => {
        if (progress.gems >= GEMS_FOR_REFILL) {
            setProgress(prev => ({
                ...prev,
                gems: prev.gems - GEMS_FOR_REFILL,
                hearts: MAX_HEARTS,
                lastHeartRefillTimestamp: Date.now(),
            }));
            return true;
        }
        return false;
    }, [progress.gems]);

    const refillHeartsWithAd = useCallback(() => {
        setProgress(prev => ({
            ...prev,
            hearts: MAX_HEARTS,
            lastHeartRefillTimestamp: Date.now(),
            lastAdRewardTimestamp: Date.now(),
        }));
    }, []);
    
    const addGemsFromAd = useCallback((amount: number) => {
        setProgress(prev => ({
            ...prev,
            gems: prev.gems + amount,
            lastAdRewardTimestamp: Date.now(),
        }));
    }, []);
    
    const updateStreak = useCallback(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalize to start of day
        
        const lastDate = progress.lastLessonDate ? new Date(progress.lastLessonDate) : null;
        
        if (lastDate) {
            lastDate.setHours(0, 0, 0, 0); // Normalize
            const diffTime = today.getTime() - lastDate.getTime();
            const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                // Consecutive day
                setProgress(prev => ({ ...prev, streak: prev.streak + 1, lastLessonDate: today.toISOString().split('T')[0] }));
            } else if (diffDays > 1) {
                // Broke the streak
                setProgress(prev => ({ ...prev, streak: 1, lastLessonDate: today.toISOString().split('T')[0] }));
            }
            // if diffDays is 0, do nothing to the streak, just ensure date is updated
        } else {
            // First lesson ever
            setProgress(prev => ({ ...prev, streak: 1, lastLessonDate: today.toISOString().split('T')[0] }));
        }
    }, [progress.lastLessonDate]);

    const toggleSound = useCallback(() => {
        setProgress(prev => ({ ...prev, isSoundEnabled: !prev.isSoundEnabled }));
    }, []);
    
    const xpForCurrentLevel = getXpForLevel(progress.level);
    const xpForNextLevel = getXpForLevel(progress.level + 1);


    return (
        <UserProgressContext.Provider value={{ 
            ...progress, 
            xpForCurrentLevel, 
            xpForNextLevel, 
            setUserLevel, 
            addXp, 
            loseHeart, 
            updateStreak, 
            addGems, 
            refillHeartsWithGems, 
            refillHeartsWithAd, 
            addGemsFromAd, 
            toggleSound,
            infoModal,
            confirmationModal,
            showInfoModal,
            hideInfoModal,
            showConfirmationModal,
            hideConfirmationModal
        }}>
            {children}
        </UserProgressContext.Provider>
    );
};

export const useUserProgress = (): UserProgressContextType => {
    const context = useContext(UserProgressContext);
    if (context === undefined) {
        throw new Error('useUserProgress must be used within a UserProgressProvider');
    }
    return context;
};
