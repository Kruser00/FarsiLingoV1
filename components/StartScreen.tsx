import React from 'react';
import { ClipboardListIcon, ChevronRightIcon } from './icons';

const StartScreen: React.FC<{ onStartTest: () => void; onChooseLevel: () => void; }> = ({ onStartTest, onChooseLevel }) => {
  return (
    <div className="text-center flex flex-col items-center justify-center p-4" style={{minHeight: '60vh'}}>
      <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg mb-6">
          <span className="text-white text-4xl font-bold">FL</span>
      </div>
      <h1 className="text-4xl font-bold text-slate-100" style={{direction: 'rtl'}}>به FarsiLingo خوش آمدید</h1>
      <p className="text-lg text-slate-300 mt-4 mb-10 max-w-lg" style={{ direction: 'rtl' }}>
        مسیر یادگیری انگلیسی خود را شروع کنید. سطح خود را پیدا کنید یا مستقیماً وارد دروس شوید.
      </p>

      <div className="w-full max-w-md space-y-4">
        <button
          onClick={onStartTest}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-lg font-bold shadow-md transition-transform hover:scale-105 bg-indigo-600 text-white hover:bg-indigo-500"
        >
          <ClipboardListIcon className="w-6 h-6" />
          شروع آزمون تعیین سطح
        </button>
        <button
          onClick={onChooseLevel}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-lg font-bold shadow-md transition-transform hover:scale-105 bg-slate-700/80 text-slate-200 hover:bg-slate-700"
        >
          <ChevronRightIcon className="w-6 h-6" />
          سطحم را خودم انتخاب می‌کنم
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
