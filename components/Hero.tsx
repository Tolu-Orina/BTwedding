
import React from 'react';
import Countdown from './Countdown';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Using a vibe similar to the Engagement Shoot Full Body Front */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10000ms] hover:scale-110"
        // style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1920&auto=format&fit=crop')` }}
        style={{ backgroundImage: 'url("BT.jpeg")' }}
      >
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      <div className="relative z-2 text-center px-4 max-w-4xl ">
        <h2 className="text-white text-sm md:text-lg uppercase tracking-[0.3em] mb-6 animate-pulse">
          #BeautifulinhisTime <span className="mx-2">|</span> #Tolu'sBlessyn26
        </h2>
        <h1 className="text-white text-6xl md:text-9xl font-serif mb-2 leading-tight">
          Blessyn <span className="italic font-normal">&</span> Tolu 
        </h1>
        <div className="mb-8">
          <span className="text-xl md:text-3xl text-white italic font-serif tracking-[0.3em]">
            are getting married</span>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white/90 font-serif text-xl md:text-2xl mb-12 italic">
          <span>April 10 & 11, 2026</span>
          <span className="hidden md:inline">•</span>
          <span>Lagos, Nigeria</span>
        </div>
        
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
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60">
        <span className="text-[10px] tracking-[0.2em] uppercase mb-2">Scroll</span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-white h-1/2 animate-[scroll_2s_infinite]"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
