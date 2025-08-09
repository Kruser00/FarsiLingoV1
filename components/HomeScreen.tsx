import React from 'react';
import { BookOpenIcon, UtensilsIcon, PlaneIcon, ShoppingCartIcon, UsersIcon, CalendarIcon, BriefcaseIcon, UserIcon, CalendarDaysIcon, HeartIcon, MapPinIcon, MessageSquareIcon, LockIcon, ClockIcon, HelpCircleIcon, ArchiveIcon, CloudIcon, HeartPulseIcon, HourglassIcon, ScaleIcon, QuoteIcon, GlobeIcon, PaletteIcon, AppleIcon, SmileIcon, ShoppingBagIcon, CompassIcon, HouseIcon, BusIcon, CheckCircleIcon, TrophyIcon } from './icons';
import { UserLevel } from '../types';
import { useUserProgress } from '../contexts/UserProgressContext';
import { playButtonClickSound, triggerHapticFeedback } from '../services/soundService';

interface HomeScreenProps {
  onStartLesson: (topic: string, level: string) => void;
  userLevel: UserLevel | null; // From placement test or chosen
}

const levelRanks: Record<UserLevel, number> = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
};

const LevelProgress: React.FC = () => {
    const { level, xp, xpForCurrentLevel, xpForNextLevel } = useUserProgress();
    
    const xpInCurrentLevel = xp - xpForCurrentLevel;
    const xpNeededForNextLevel = xpForNextLevel - xpForCurrentLevel;
    const progressPercentage = xpNeededForNextLevel > 0 ? (xpInCurrentLevel / xpNeededForNextLevel) * 100 : 100;

    return (
        <div className="w-full bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl mb-8">
            <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-lg text-indigo-400">سطح {level}</span>
                <span className="text-sm font-semibold text-slate-300" style={{direction: 'rtl'}}>
                    {xpInCurrentLevel.toLocaleString()} / {xpNeededForNextLevel.toLocaleString()} XP
                </span>
            </div>
            <div className="w-full bg-slate-700/70 rounded-full h-3">
                <div
                    className="bg-indigo-500 h-3 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
        </div>
    );
};

const difficultyLevels = [
  {
    level: 'Beginner',
    description: 'با اصول اولیه شروع کنید.',
    color: 'text-indigo-400',
    borderColor: 'border-indigo-500/30',
    topics: [
      { name: 'Basic Greetings', farsiName: 'احوالپرسی اولیه', icon: <BookOpenIcon className="w-8 h-8" /> },
      { name: 'Introducing Yourself', farsiName: 'معرفی کردن خود', icon: <UserIcon className="w-8 h-8" /> },
      { name: 'The Alphabet', farsiName: 'الفبا', icon: (
          <div className="w-8 h-8 text-2xl font-bold flex items-center justify-center gap-px">
            <span className="text-sky-400">A</span><span className="text-rose-400">B</span><span className="text-emerald-400">C</span>
          </div>
        )
      },
      { name: 'Numbers', farsiName: 'اعداد', icon: (
          <div className="w-8 h-8 text-2xl font-bold flex items-center justify-center gap-px">
            <span className="text-indigo-400">1</span><span className="text-teal-400">2</span><span className="text-fuchsia-400">3</span>
          </div>
        ) 
      },
      { name: 'Beginner Challenge 1', farsiName: 'آزمون ۱: مبانی', icon: <TrophyIcon className="w-8 h-8 text-amber-400" /> },
      
      { name: 'Colors', farsiName: 'رنگ‌ها', icon: <PaletteIcon className="w-8 h-8" /> },
      { name: 'Family Members', farsiName: 'اعضای خانواده', icon: <UsersIcon className="w-8 h-8" /> },
      { name: 'Animals', farsiName: 'حیوانات', icon: <GlobeIcon className="w-8 h-8" /> },
      { name: 'Basic Foods', farsiName: 'غذاهای اصلی', icon: <AppleIcon className="w-8 h-8" /> },
      { name: 'Beginner Challenge 2', farsiName: 'آزمون ۲: واژگان', icon: <TrophyIcon className="w-8 h-8 text-amber-400" /> },

      { name: 'My Home', farsiName: 'خانه من', icon: <HouseIcon className="w-8 h-8" /> },
      { name: 'Common Objects', farsiName: 'اشیاء رایج', icon: <ArchiveIcon className="w-8 h-8" /> },
      { name: 'Days of the Week', farsiName: 'روزهای هفته', icon: <CalendarDaysIcon className="w-8 h-8" /> },
      { name: 'Telling Time', farsiName: 'گفتن زمان', icon: <ClockIcon className="w-8 h-8" /> },
      { name: 'Beginner Challenge 3', farsiName: 'آزمون ۳: زندگی روزمره', icon: <TrophyIcon className="w-8 h-8 text-amber-400" /> },

      { name: 'Months and Dates', farsiName: 'ماه‌ها و تاریخ‌ها', icon: <CalendarIcon className="w-8 h-8" /> },
      { name: 'Weather Words', farsiName: 'کلمات آب و هوا', icon: <CloudIcon className="w-8 h-8" /> },
      { name: 'At a Restaurant', farsiName: 'در رستوران', icon: <UtensilsIcon className="w-8 h-8" /> },
      { name: 'Shopping Basics', farsiName: 'خرید اولیه', icon: <ShoppingBagIcon className="w-8 h-8" /> },
      { name: 'Beginner Challenge 4', farsiName: 'آزمون ۴: موقعیت‌ها', icon: <TrophyIcon className="w-8 h-8 text-amber-400" /> },
    ]
  },
  {
    level: 'Intermediate',
    description: 'مهارت های مکالمه خود را بسازید.',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    topics: [
      { name: 'Ordering Food', farsiName: 'سفارش دادن غذا', icon: <UtensilsIcon className="w-8 h-8" /> },
      { name: 'Shopping for Clothes', farsiName: 'خرید لباس', icon: <ShoppingCartIcon className="w-8 h-8" /> },
      { name: 'Asking for Directions', farsiName: 'آدرس پرسیدن', icon: <MapPinIcon className="w-8 h-8" /> },
      { name: 'Intermediate Challenge 1', farsiName: 'آزمون ۱: موقعیت‌های واقعی', icon: <TrophyIcon className="w-8 h-8 text-amber-400" /> },

      { name: 'Making Plans', farsiName: 'برنامه‌ریزی', icon: <CalendarIcon className="w-8 h-8" /> },
      { name: 'Hobbies and Interests', farsiName: 'سرگرمی‌ها و علایق', icon: <HeartIcon className="w-8 h-8" /> },
      { name: 'Talking about the Weather', farsiName: 'صحبت در مورد آب و هوا', icon: <CloudIcon className="w-8 h-8" /> },
      { name: 'Intermediate Challenge 2', farsiName: 'آزمون ۲: مکالمه', icon: <TrophyIcon className="w-8 h-8 text-amber-400" /> },

      { name: 'At the Doctor', farsiName: 'در مطب دکتر', icon: <HeartPulseIcon className="w-8 h-8" /> },
      { name: 'Past and Future Tenses', farsiName: 'زمان های گذشته و آینده', icon: <HourglassIcon className="w-8 h-8" /> },
    ]
  },
  {
    level: 'Advanced',
    description: 'در سناریوهای پیچیده استاد شوید.',
    color: 'text-fuchsia-400',
    borderColor: 'border-fuchsia-500/30',
    topics: [
      { name: 'Traveling and Directions', farsiName: 'سفر و مسیرها', icon: <PlaneIcon className="w-8 h-8" /> },
      { name: 'Job Interview Practice', farsiName: 'تمرین مصاحبه شغلی', icon: <BriefcaseIcon className="w-8 h-8" /> },
      { name: 'Discussing Current Events', farsiName: 'بحث درباره اخبار روز', icon: <BookOpenIcon className="w-8 h-8" /> },
      { name: 'Expressing Opinions', farsiName: 'بیان نظرات', icon: <MessageSquareIcon className="w-8 h-8" /> },
      { name: 'Workplace Communication', farsiName: 'ارتباطات کاری', icon: <BriefcaseIcon className="w-8 h-8" /> },
      { name: 'Debating a Topic', farsiName: 'بحث و مناظره', icon: <ScaleIcon className="w-8 h-8" /> },
      { name: 'Idioms and Slang', farsiName: 'اصطلاحات و عامیانه', icon: <QuoteIcon className="w-8 h-8" /> },
      { name: 'Cultural Differences', farsiName: 'تفاوت های فرهنگی', icon: <GlobeIcon className="w-8 h-8" /> },
    ]
  },
];


const HomeScreen: React.FC<HomeScreenProps> = ({ onStartLesson, userLevel }) => {
  const { isSoundEnabled, completedLessons } = useUserProgress();
  const userRank = userLevel ? levelRanks[userLevel] : 0; // 0 means nothing unlocked if no level

  const handleLessonClick = (topic: string, level: string) => {
    playButtonClickSound(isSoundEnabled);
    triggerHapticFeedback(isSoundEnabled);
    onStartLesson(topic, level);
  }
  
  const allTopicsInPrevLevelAreComplete = (levelIndex: number): boolean => {
    if (levelIndex === 0) return true; // Beginner level needs no prior completion
    const prevLevel = difficultyLevels[levelIndex - 1];
    return prevLevel.topics.every(topic => completedLessons.includes(`${prevLevel.level}-${topic.name}`));
  };

  return (
    <div className="text-center">
      
      {userLevel && <LevelProgress />}

      <h2 className="text-2xl font-bold mb-2 text-slate-100" style={{ direction: 'rtl' }}>
        {userLevel ? `مسیر یادگیری شما` : 'یک درس را انتخاب کنید'}
      </h2>
      <p className="text-lg mb-8 text-slate-300" style={{ direction: 'rtl' }}>
        برای شروع، یک موضوع را از یک سطح باز انتخاب کنید.
      </p>

      <div className="space-y-8">
        {difficultyLevels.map((level, levelIndex) => {
          const currentRank = levelRanks[level.level as UserLevel];
          const isLevelUnlocked = userLevel && currentRank <= userRank;
          const isNextLevelToUnlock = userLevel && currentRank === levelRanks[userLevel] + 1;
          const isFarFutureLevel = userLevel && currentRank > levelRanks[userLevel] + 1;
          
          if (isFarFutureLevel) {
              return null;
          }

          if (!isLevelUnlocked && !isNextLevelToUnlock) {
            return (
              <div key={level.level} className="p-4 md:p-6 rounded-2xl shadow-lg border-2 bg-slate-900/40 backdrop-blur-sm border-slate-800/50 opacity-60">
                <h3 className={`flex items-center justify-center gap-3 text-2xl font-bold text-slate-500`}>
                  <LockIcon className="w-6 h-6" />
                  {level.level}
                </h3>
              </div>
            );
          }
          
          if (isNextLevelToUnlock) {
            const isPrevLevelComplete = allTopicsInPrevLevelAreComplete(levelIndex);

            // Locked because previous level is not finished
            if (!isPrevLevelComplete) {
              return (
                <div key={level.level} className={`p-4 md:p-6 rounded-2xl shadow-lg border-2 bg-slate-900/60 backdrop-blur-sm ${level.borderColor} opacity-80`}>
                  <h3 className={`flex items-center justify-center gap-3 text-2xl font-bold ${level.color}`}>
                    <LockIcon className="w-6 h-6" />
                    {level.level}
                  </h3>
                  <p className="text-slate-300 my-4" style={{ direction: 'rtl' }}>
                    {`برای باز کردن، تمام دروس سطح قبل را کامل کنید.`}
                  </p>
                  <button
                    disabled
                    className="w-full max-w-xs mx-auto px-6 py-3 rounded-xl text-lg font-bold shadow-md bg-slate-700 text-slate-400 cursor-not-allowed"
                  >
                    قفل است
                  </button>
                </div>
              );
            }
            
            // Unlocked level-up challenge
             return (
              <div key={level.level} className={`p-4 md:p-6 rounded-2xl shadow-lg border-2 bg-slate-900/60 backdrop-blur-sm ${level.borderColor}`}>
                 <h3 className={`flex items-center justify-center gap-3 text-2xl font-bold ${level.color}`}>
                  <TrophyIcon className="w-6 h-6" />
                  {`آزمون سطح ${level.level}`}
                </h3>
                <p className="text-slate-300 my-4" style={{ direction: 'rtl' }}>{`دانش خود را برای باز کردن سطح ${level.level} آزمایش کنید.`}</p>
                <button
                  onClick={() => handleLessonClick(`${level.level} Challenge`, level.level)}
                  className="w-full max-w-xs mx-auto px-6 py-3 rounded-xl text-lg font-bold shadow-md transition-transform hover:scale-105 bg-indigo-600 text-white hover:bg-indigo-500"
                >
                  شروع آزمون
                </button>
              </div>
            );
          }
          
          return (
            <div key={level.level} className={`p-4 md:p-6 rounded-2xl shadow-lg border-2 bg-slate-900/60 backdrop-blur-sm ${level.borderColor}`}>
              <h3 className={`text-2xl font-bold ${level.color}`}>{level.level}</h3>
              <p className="text-slate-300 mb-6" style={{ direction: 'rtl' }}>{level.description}</p>
              
              <div className="mt-6 flex flex-col items-center gap-2">
                {level.topics.map((topic, index) => {
                  const lessonId = `${level.level}-${topic.name}`;
                  const isCompleted = completedLessons.includes(lessonId);
                  const isPreviousLessonCompleted = index === 0 ? true : completedLessons.includes(`${level.level}-${level.topics[index - 1].name}`);
                  const isLocked = !isLevelUnlocked || !isPreviousLessonCompleted;
                  const isActive = !isLocked && !isCompleted;

                  return (
                    <React.Fragment key={topic.name}>
                      {index > 0 && (
                        <div className="w-1 h-6 bg-slate-700/50 rounded-full" />
                      )}

                      <button
                        onClick={() => !isLocked && handleLessonClick(topic.name, level.level)}
                        disabled={isLocked}
                        className={`w-full max-w-sm mx-auto flex items-center justify-between text-left gap-4 p-3 rounded-xl shadow-md transition-all duration-300 border-2
                          ${isLocked 
                            ? 'bg-slate-800/40 border-slate-800/60 cursor-not-allowed' 
                            : 'bg-slate-800/80 hover:bg-slate-700/90 hover:-translate-y-0.5'
                          }
                          ${isCompleted && !isLocked ? 'border-teal-500/50 bg-slate-800/60' : 'border-slate-700/80'}
                          ${isActive ? 'border-indigo-500/80 shadow-indigo-500/20 shadow-lg animate-pulse' : ''}
                        `}
                      >
                        <div className={`flex items-center justify-center w-14 h-14 rounded-lg flex-shrink-0 text-white ${isLocked ? 'bg-slate-700/50' : isCompleted ? 'bg-slate-700/80' : 'bg-indigo-500'}`}>
                          {isLocked ? <LockIcon className="w-7 h-7 text-slate-500" /> : <div className={`${isCompleted ? 'opacity-60' : ''}`}>{topic.icon}</div>}
                        </div>
                        <div className="flex-grow">
                          <h4 className={`font-bold ${isLocked ? 'text-slate-500' : 'text-slate-100'}`} style={{ direction: 'rtl' }}>{topic.farsiName}</h4>
                          <p className={`text-sm ${isLocked ? 'text-slate-600' : 'text-slate-400'}`}>{topic.name}</p>
                        </div>
                        {isCompleted && !isLocked && (
                          <div className="flex-shrink-0 pr-2">
                            <CheckCircleIcon className="w-8 h-8 text-teal-400" />
                          </div>
                        )}
                      </button>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeScreen;