import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: string): TimeLeft {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

interface Props {
  targetDate: string;
  eventTitle: string;
  eventTitleSw?: string;
  lang?: 'en' | 'sw';
}

export default function Countdown({ targetDate, eventTitle, eventTitleSw, lang = 'en' }: Props) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));
  const label = lang === 'sw' ? (eventTitleSw ?? eventTitle) : eventTitle;

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const pad = (n: number) => String(n).padStart(2, '0');
  const units = [
    { label: lang === 'sw' ? 'Siku' : 'Days', value: timeLeft.days },
    { label: lang === 'sw' ? 'Masaa' : 'Hours', value: timeLeft.hours },
    { label: lang === 'sw' ? 'Dakika' : 'Mins', value: timeLeft.minutes },
    { label: lang === 'sw' ? 'Sekunde' : 'Secs', value: timeLeft.seconds },
  ];

  const isPast = new Date(targetDate).getTime() <= Date.now();

  return (
    <div className="bg-primary text-white py-4 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white/60 text-xs uppercase tracking-widest font-bold">
            {lang === 'sw' ? 'Tukio Lijalo' : 'Next Event'}
          </p>
          <p className="font-display font-bold text-xl sm:text-2xl">{label}</p>
        </div>
        {isPast ? (
          <span className="bg-white/20 rounded-xl px-6 py-2 font-display font-bold text-lg">
            {lang === 'sw' ? 'Inaendelea Sasa!' : 'Happening Now!'}
          </span>
        ) : (
          <div className="flex gap-3">
            {units.map(u => (
              <div key={u.label} className="text-center bg-white/10 rounded-xl px-3 py-2 min-w-[56px]">
                <div className="font-display font-black text-2xl sm:text-3xl leading-none">{pad(u.value)}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/70 mt-0.5">{u.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
