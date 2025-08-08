import React, { createContext, useState, useEffect, useContext, ReactNode, useCallback } from 'react';
import { UserLevel, UserProgress } from '../types';

const MAX_HEARTS = 5;
const HEART_REFILL_RATE_HOURS = 4;
const GEMS_FOR_REFILL = 50;

const STORAGE_KEY = 'farsilingo_user_progress';

interface UserProgressContextType extends UserProgress {
    setUserLevel: (level: UserLevel) => void;
    addXp: (amount: number) => void;
    loseHeart: () => void;
    updateStreak: () => void;
    addGems: (amount: number) => void;
    refillHeartsWithGems: () => boolean;
    refillHeartsWithAd: () => void;
}

const UserProgressContext = createContext<UserProgressContextType | undefined>(undefined);

const getDefaultProgress = (): UserProgress => ({
    xp: 0,
    gems: 0,
    hearts: MAX_HEARTS,
    streak: 0,
    lastLessonDate: null,
    lastHeartRefillTimestamp: Date.now(),
    userLevel: null,
});

export const UserProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [progress, setProgress] = useState<UserProgress>(() => {
        try {
            const storedProgress = localStorage.getItem(STORAGE_KEY);
            return storedProgress ? JSON.parse(storedProgress) : getDefaultProgress();
        } catch (error) {
            console.error("Failed to parse user progress from localStorage", error);
            return getDefaultProgress();
        }
    });

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

    const setUserLevel = useCallback((level: UserLevel) => {
        setProgress(prev => ({ ...prev, userLevel: level }));
    }, []);

    const addXp = useCallback((amount: number) => {
        setProgress(prev => ({ ...prev, xp: prev.xp + amount }));
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

    return (
        <UserProgressContext.Provider value={{ ...progress, setUserLevel, addXp, loseHeart, updateStreak, addGems, refillHeartsWithGems, refillHeartsWithAd }}>
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