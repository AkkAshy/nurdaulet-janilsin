'use client';

import { useState, useEffect } from 'react';

// Дата свадьбы: 9 января 2026, 18:00
const WEDDING_DATE = new Date('2026-01-09T18:00:00');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = WEDDING_DATE.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'Күн' },
    { value: timeLeft.hours, label: 'Сағат' },
    { value: timeLeft.minutes, label: 'Минут' },
    { value: timeLeft.seconds, label: 'Секунд' },
  ];

  // Плейсхолдер до гидратации
  if (!mounted) {
    return (
      <div className="flex justify-center gap-4 md:gap-6">
        {['Күн', 'Сағат', 'Минут', 'Секунд'].map((label) => (
          <div key={label} className="flex flex-col items-center">
            <div className="w-18 h-18 md:w-24 md:h-24 rounded-xl bg-[var(--deep-blue)] flex items-center justify-center border-2 border-[var(--gold)] shadow-lg">
              <span className="text-3xl md:text-4xl font-bold text-[var(--gold)]">--</span>
            </div>
            <span className="mt-3 text-sm text-[var(--deep-blue)] font-semibold">{label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-4 md:gap-6">
      {timeUnits.map(({ value, label }) => (
        <div key={label} className="flex flex-col items-center">
          <div className="w-18 h-18 md:w-24 md:h-24 rounded-xl bg-[var(--deep-blue)] shadow-xl flex items-center justify-center border-2 border-[var(--gold)]">
            <span className="text-3xl md:text-4xl font-bold text-[var(--gold)] animate-pulse-gold">
              {value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="mt-3 text-sm text-[var(--deep-blue)] font-semibold tracking-wide">{label}</span>
        </div>
      ))}
    </div>
  );
}
