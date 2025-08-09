import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import HomeScreen from './components/HomeScreen';
import LessonScreen from './components/LessonScreen';
import LessonCompleteScreen from './components/LessonCompleteScreen';
import PlacementTestScreen from './components/PlacementTestScreen';
import PlacementTestCompleteScreen from './components/PlacementTestCompleteScreen';
import ChooseLevelScreen from './components/ChooseLevelScreen';
import { Header } from './components/Header';
import { AppView, UserLevel } from './types';
import { UserProgressProvider, useUserProgress } from './contexts/UserProgressContext';
import InfoModal from './components/InfoModal';
import ConfirmationModal from './components/ConfirmationModal';
import AnimatedBackground from './components/AnimatedBackground';

const AppContent: React.FC = () => {
  const { 
    userLevel, 
    setUserLevel, 
    addXp, 
    infoModal, 
    hideInfoModal,
    confirmationModal,
    hideConfirmationModal
  } = useUserProgress();

  // Set the initial view based on whether a user level is already stored.
  // This ensures the start screen is only shown on the first visit.
  const [currentView, setCurrentView] = useState<AppView>(() => userLevel ? 'HOME' : 'START');
  
  const [currentLesson, setCurrentLesson] = useState<{ topic: string; level: string } | null>(null);
  const [lessonResult, setLessonResult] = useState<{ score: number, total: number, xp: number } | null>(null);
  const [lessonKey, setLessonKey] = useState<number>(0);
  const [placementTestLevel, setPlacementTestLevel] = useState<UserLevel>('Beginner');

  const startLesson = (topic: string, level: string) => {
    setCurrentLesson({ topic, level });
    setCurrentView('LESSON');
    setLessonKey(prevKey => prevKey + 1);
  };

  const handleLessonFinish = (score: number, total: number, xp: number) => {
    // Logic to unlock next level
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
    if (userLevel && currentLesson?.topic.includes('Challenge') && percentage >= 80) {
        const levelRanks: Record<UserLevel, number> = { Beginner: 1, Intermediate: 2, Advanced: 3 };
        const unlockedLevel = currentLesson.level as UserLevel;
        if (levelRanks[unlockedLevel] > levelRanks[userLevel]) {
             setUserLevel(unlockedLevel);
        }
    }

    setLessonResult({ score, total, xp });
    setCurrentView('LESSON_COMPLETE');
  };

  const restartLesson = () => {
    if (currentLesson) {
        startLesson(currentLesson.topic, currentLesson.level);
    }
  };

  const goHome = () => {
    setCurrentLesson(null);
    setLessonResult(null);
    setCurrentView('HOME');
  };

  const goToStart = () => {
    setCurrentLesson(null);
    setLessonResult(null);
    setCurrentView('START');
  }

  const handleStartPlacementTest = () => setCurrentView('PLACEMENT_TEST');
  
  const handleChooseLevel = () => {
    setCurrentView('CHOOSE_LEVEL');
  };

  const handleLevelSelected = (level: UserLevel) => {
    setUserLevel(level);
    setCurrentView('HOME');
  };

  const handlePlacementTestFinish = (scores: Record<UserLevel, { score: number; total: number }>) => {
    let determinedLevel: UserLevel = 'Beginner';
    const advancedPassed = scores.Advanced.total > 0 && (scores.Advanced.score / scores.Advanced.total) >= 0.66;
    const intermediatePassed = scores.Intermediate.total > 0 && (scores.Intermediate.score / scores.Intermediate.total) >= 0.66;

    if (advancedPassed) {
        determinedLevel = 'Advanced';
    } else if (intermediatePassed) {
        determinedLevel = 'Intermediate';
    } else {
        determinedLevel = 'Beginner';
    }
    
    setPlacementTestLevel(determinedLevel);
    setUserLevel(determinedLevel);
    setCurrentView('PLACEMENT_TEST_COMPLETE');
  };

  // The previous check here is no longer needed as the initial state of 
  // `currentView` correctly handles the application's starting point.

  const renderContent = () => {
    switch (currentView) {
      case 'START':
        return <StartScreen onStartTest={handleStartPlacementTest} onChooseLevel={handleChooseLevel} />;
      case 'CHOOSE_LEVEL':
        return <ChooseLevelScreen onSelectLevel={handleLevelSelected} />;
      case 'PLACEMENT_TEST':
        return <PlacementTestScreen onFinish={handlePlacementTestFinish} onGoHome={goToStart} />;
      case 'PLACEMENT_TEST_COMPLETE':
        return <PlacementTestCompleteScreen level={placementTestLevel} onContinue={goHome} />;
      case 'HOME':
        return <HomeScreen onStartLesson={startLesson} userLevel={userLevel} />;
      case 'LESSON':
        if (currentLesson) {
          return <LessonScreen key={lessonKey} topic={currentLesson.topic} level={currentLesson.level} onFinish={handleLessonFinish} />;
        }
        return null;
      case 'LESSON_COMPLETE':
        if (lessonResult && currentLesson) {
          return <LessonCompleteScreen 
            score={lessonResult.score}
            total={lessonResult.total}
            xp={lessonResult.xp}
            topic={currentLesson.topic}
            onRestart={restartLesson}
            onGoHome={goHome}
          />;
        }
        return null;
      default:
        return <StartScreen onStartTest={handleStartPlacementTest} onChooseLevel={handleChooseLevel} />;
    }
  }

  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen bg-transparent text-slate-800 dark:text-slate-200 flex flex-col items-center p-4 selection:bg-purple-400/50">
        <div className="w-full max-w-2xl mx-auto">
          <Header onHomeClick={currentView === 'HOME' || !userLevel ? goToStart : goHome} showHomeButton={currentView !== 'START' && !!userLevel} />
          <main className="mt-8">
            {renderContent()}
          </main>
        </div>
      </div>
      <InfoModal
        isOpen={infoModal.isOpen}
        title={infoModal.title}
        message={infoModal.message}
        onClose={hideInfoModal}
      />
      <ConfirmationModal
        isOpen={confirmationModal.isOpen}
        title={confirmationModal.title}
        message={confirmationModal.message}
        onConfirm={() => {
            confirmationModal.onConfirm();
            hideConfirmationModal();
        }}
        onClose={hideConfirmationModal}
        confirmText={confirmationModal.confirmText}
        cancelText={confirmationModal.cancelText}
      />
    </>
  );
};


const App: React.FC = () => (
    <UserProgressProvider>
        <AppContent />
    </UserProgressProvider>
);


export default App;