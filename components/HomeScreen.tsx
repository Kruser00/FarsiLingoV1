import React from 'react';
import { BookOpenIcon, UtensilsIcon, PlaneIcon, ShoppingCartIcon, UsersIcon, CalendarIcon, BriefcaseIcon, UserIcon, CalendarDaysIcon, HeartIcon, MapPinIcon, MessageSquareIcon, LockIcon, ClockIcon, HelpCircleIcon, ArchiveIcon, CloudIcon, HeartPulseIcon, HourglassIcon, ScaleIcon, QuoteIcon, GlobeIcon, PaletteIcon, AppleIcon, SmileIcon, ShoppingBagIcon, CompassIcon, HouseIcon, BusIcon } from './icons';
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
      { name: 'Basic Greetings', farsiName: 'احوالپرسی اولیه', icon: <BookOpenIcon className="w-8 h-8 text-indigo-400" /> },
      { name: 'The Alphabet', farsiName: 'الفبا', icon: (
          <div className="w-8 h-8 text-2xl font-bold flex items-center justify-center gap-px">
            <span className="text-sky-400">A</span>
            <span className="text-rose-400">B</span>
            <span className="text-emerald-400">C</span>
          </div>
        )
      },
      { name: 'Numbers', farsiName: 'اعداد', icon: (
          <div className="w-8 h-8 text-2xl font-bold flex items-center justify-center gap-px">
            <span className="text-indigo-400">1</span>
            <span className="text-teal-400">2</span>
            <span className="text-fuchsia-400">3</span>
          </div>
        ) 
      },
      { name: 'Colors', farsiName: 'رنگ‌ها', icon: <PaletteIcon className="w-8 h-8 text-rose-400" /> },
      { name: 'Introducing Yourself', farsiName: 'معرفی کردن خود', icon: <UserIcon className="w-8 h-8 text-fuchsia-400" /> },
      { name: 'Family Members', farsiName: 'اعضای خانواده', icon: <UsersIcon className="w-8 h-8 text-teal-400" /> },
      { name: 'My Home', farsiName: 'خانه من', icon: <HouseIcon className="w-8 h-8 text-lime-400" /> },
      { name: 'Days of the Week', farsiName: 'روزهای هفته', icon: <CalendarDaysIcon className="w-8 h-8 text-sky-400" /> },
      { name: 'Months and Dates', farsiName: 'ماه‌ها و تاریخ‌ها', icon: <CalendarIcon className="w-8 h-8 text-amber-400" /> },
      { name: 'Telling Time', farsiName: 'گفتن زمان', icon: <ClockIcon className="w-8 h-8 text-rose-400" /> },
      { name: 'Common Objects', farsiName: 'اشیاء رایج', icon: <ArchiveIcon className="w-8 h-8 text-orange-400" /> },
      { name: 'Simple Questions', farsiName: 'سوالات ساده', icon: <HelpCircleIcon className="w-8 h-8 text-emerald-400" /> },
      { name: 'Polite Phrases', farsiName: 'عبارات مودبانه', icon: <SmileIcon className="w-8 h-8 text-yellow-400" /> },
      { name: 'Basic Foods', farsiName: 'غذاهای اصلی', icon: <AppleIcon className="w-8 h-8 text-red-500" /> },
      { name: 'Animals', farsiName: 'حیوانات', icon: <GlobeIcon className="w-8 h-8 text-teal-400" /> },
      { name: 'Describing People', farsiName: 'توصیف افراد', icon: <UsersIcon className="w-8 h-8 text-fuchsia-400" /> },
      { name: 'Common Verbs', farsiName: 'افعال رایج', icon: <MessageSquareIcon className="w-8 h-8 text-orange-400" /> },
      { name: 'Weather Words', farsiName: 'کلمات آب و هوا', icon: <CloudIcon className="w-8 h-8 text-cyan-400" /> },
      { name: 'City Places', farsiName: 'مکان‌های شهری', icon: <MapPinIcon className="w-8 h-8 text-blue-400" /> },
      { name: 'At a Restaurant', farsiName: 'در رستوران', icon: <UtensilsIcon className="w-8 h-8 text-orange-400" /> },
      { name: 'Shopping Basics', farsiName: 'خرید اولیه', icon: <ShoppingBagIcon className="w-8 h-8 text-violet-400" /> },
      { name: 'Basic Directions', farsiName: 'آدرس‌های پایه', icon: <CompassIcon className="w-8 h-8 text-blue-400" /> },
      { name: 'At the Airport', farsiName: 'در فرودگاه', icon: <PlaneIcon className="w-8 h-8 text-cyan-400" /> },
      { name: 'Public Transport', farsiName: 'حمل و نقل عمومی', icon: <BusIcon className="w-8 h-8 text-slate-400" /> },
    ]
  },
  {
    level: 'Intermediate',
    description: 'مهارت های مکالمه خود را بسازید.',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    topics: [
      { name: 'Ordering Food', farsiName: 'سفارش دادن غذا', icon: <UtensilsIcon className="w-8 h-8 text-amber-400" /> },
      { name: 'Shopping for Clothes', farsiName: 'خرید لباس', icon: <ShoppingCartIcon className="w-8 h-8 text-violet-400" /> },
      { name: 'Making Plans', farsiName: 'برنامه‌ریزی', icon: <CalendarIcon className="w-8 h-8 text-rose-400" /> },
      { name: 'Hobbies and Interests', farsiName: 'سرگرمی‌ها و علایق', icon: <HeartIcon className="w-8 h-8 text-red-400" /> },
      { name: 'Asking for Directions', farsiName: 'آدرس پرسیدن', icon: <MapPinIcon className="w-8 h-8 text-blue-400" /> },
      { name: 'Talking about the Weather', farsiName: 'صحبت در مورد آب و هوا', icon: <CloudIcon className="w-8 h-8 text-cyan-400" /> },
      { name: 'At the Doctor', farsiName: 'در مطب دکتر', icon: <HeartPulseIcon className="w-8 h-8 text-pink-400" /> },
      { name: 'Past and Future Tenses', farsiName: 'زمان های گذشته و آینده', icon: <HourglassIcon className="w-8 h-8 text-lime-400" /> },
    ]
  },
  {
    level: 'Advanced',
    description: 'در سناریوهای پیچیده استاد شوید.',
    color: 'text-fuchsia-400',
    borderColor: 'border-fuchsia-500/30',
    topics: [
      { name: 'Traveling and Directions', farsiName: 'سفر و مسیرها', icon: <PlaneIcon className="w-8 h-8 text-emerald-400" /> },
      { name: 'Job Interview Practice', farsiName: 'تمرین مصاحبه شغلی', icon: <BriefcaseIcon className="w-8 h-8 text-indigo-400" /> },
      { name: 'Discussing Current Events', farsiName: 'بحث درباره اخبار روز', icon: <BookOpenIcon className="w-8 h-8 text-slate-400" /> },
      { name: 'Expressing Opinions', farsiName: 'بیان نظرات', icon: <MessageSquareIcon className="w-8 h-8 text-orange-400" /> },
      { name: 'Workplace Communication', farsiName: 'ارتباطات کاری', icon: <BriefcaseIcon className="w-8 h-8 text-cyan-400" /> },
      { name: 'Debating a Topic', farsiName: 'بحث و مناظره', icon: <ScaleIcon className="w-8 h-8 text-yellow-400" /> },
      { name: 'Idioms and Slang', farsiName: 'اصطلاحات و عامیانه', icon: <QuoteIcon className="w-8 h-8 text-purple-400" /> },
      { name: 'Cultural Differences', farsiName: 'تفاوت های فرهنگی', icon: <GlobeIcon className="w-8 h-8 text-sky-400" /> },
    ]
  },
];


const HomeScreen: React.FC<HomeScreenProps> = ({ onStartLesson, userLevel }) => {
  const { isSoundEnabled } = useUserProgress();
  const userRank = userLevel ? levelRanks[userLevel] : 0; // 0 means nothing unlocked if no level

  const handleLessonClick = (topic: string, level: string) => {
    playButtonClickSound(isSoundEnabled);
    triggerHapticFeedback(isSoundEnabled);
    onStartLesson(topic, level);
  }

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
        {difficultyLevels.map((level) => {
          const currentRank = levelRanks[level.level as UserLevel];
          const isUnlocked = userLevel && currentRank <= userRank;
          const isNextLevelToUnlock = userLevel && currentRank === levelRanks[userLevel] + 1;

          // Render a locked card for levels far beyond the user's current rank
          if (!isUnlocked && !isNextLevelToUnlock) {
            return (
              <div key={level.level} className="p-4 md:p-6 rounded-2xl shadow-lg border-2 bg-slate-900/40 backdrop-blur-sm border-slate-800/50 opacity-60">
                <h3 className={`flex items-center justify-center gap-3 text-2xl font-bold text-slate-500`}>
                  <LockIcon className="w-6 h-6" />
                  {level.level}
                </h3>
                <p className="text-slate-400 mt-2" style={{ direction: 'rtl' }}>
                  ابتدا سطوح قبلی را کامل کنید.
                </p>
              </div>
            );
          }
          
          // Render a card with an unlock test for the immediate next level
          if (isNextLevelToUnlock) {
             return (
              <div key={level.level} className={`p-4 md:p-6 rounded-2xl shadow-lg border-2 bg-slate-900/60 backdrop-blur-sm ${level.borderColor}`}>
                 <h3 className={`flex items-center justify-center gap-3 text-2xl font-bold ${level.color}`}>
                  <LockIcon className="w-6 h-6" />
                  {level.level}
                </h3>
                <p className="text-slate-300 my-4" style={{ direction: 'rtl' }}>{level.description}</p>
                <button
                  onClick={() => handleLessonClick(`${level.level} Challenge`, level.level)}
                  className="w-full max-w-xs mx-auto px-6 py-3 rounded-xl text-lg font-bold shadow-md transition-transform hover:scale-105 bg-indigo-600 text-white hover:bg-indigo-500"
                >
                  باز کردن قفل با آزمون
                </button>
              </div>
            );
          }
          
          // Render an unlocked level with all its topics
          return (
            <div key={level.level} className={`p-4 md:p-6 rounded-2xl shadow-lg border-2 bg-slate-900/60 backdrop-blur-sm ${level.borderColor}`}>
              <h3 className={`text-2xl font-bold ${level.color}`}>{level.level}</h3>
              <p className="text-slate-300 mb-6" style={{ direction: 'rtl' }}>{level.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {level.topics.map((topic) => (
                  <button
                    key={topic.name}
                    onClick={() => handleLessonClick(topic.name, level.level)}
                    className="flex flex-col items-center justify-center text-center gap-2 p-3 bg-slate-800/50 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 w-full hover:bg-slate-700/70"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-slate-700/70 rounded-full">
                      {topic.icon}
                    </div>
                    <span className="text-sm font-semibold text-slate-200" style={{ direction: 'rtl' }}>{topic.farsiName}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeScreen;