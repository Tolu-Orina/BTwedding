
import React, { useState, useEffect } from 'react';
import { WEDDING_DATE_TRADITIONAL } from '../constants';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = WEDDING_DATE_TRADITIONAL.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className="flex space-x-4 md:space-x-8 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="text-3xl md:text-5xl font-serif font-bold text-blue-700">{value.toString().padStart(2, '0')}</div>
          <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-400 mt-2">{unit}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
