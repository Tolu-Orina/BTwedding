import React from 'react';
import { createPortal } from 'react-dom';
import Countdown from './Countdown';

const Hero: React.FC = () => {
  const dynamicContent = (
    <div className="bg-pink-50/50 opacity-80 backdrop-blur shadow-2xl rounded-2xl p-8 md:p-12 transition-all hover:scale-[1.02]">
      <Countdown />
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <a href="#story" className="w-full sm:w-auto px-8 py-3 bg-blue-700 text-white rounded-full text-sm font-semibold tracking-widest hover:bg-blue-600 transition-all shadow-lg">
          OUR STORY
        </a>
        <a href="#rsvp" className="w-full sm:w-auto px-8 py-3 border border-blue-700 text-blue-700 rounded-full text-sm font-semibold tracking-widest hover:bg-blue-50 transition-all">
          RSVP NOW
        </a>
      </div>
    </div>
  );

  const container = document.getElementById('hero-dynamic');
  if (container) {
    return createPortal(dynamicContent, container);
  }

  return null;
};

export default Hero;
