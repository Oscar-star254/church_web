import { useState } from 'react';
import { Link } from 'react-router';
import { useApp } from '../context/AppContext';
import { UPCOMING_EVENTS } from '../data/content';

const TYPES = ['All', 'weekly', 'camp', 'outreach', 'social', 'worship', 'training'];
const TYPE_LABELS: Record<string, string> = {
  All: 'All', weekly: 'Weekly', camp: 'Camp', outreach: 'Outreach',
  social: 'Social', worship: 'Worship', training: 'Training',
};
const TYPE_COLORS: Record<string, string> = {
  weekly: 'bg-primary/10 text-primary border-primary/20',
  camp: 'bg-amber/20 text-amber-700 dark:text-amber-400 border-amber/30',
  outreach: 'bg-emerald/10 text-emerald border-emerald/20',
  social: 'bg-sky/10 text-sky border-sky/20',
  worship: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800',
  training: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700',
};

function addToCalendar(ev: typeof UPCOMING_EVENTS[0]) {
  const start = new Date(ev.nextDate);
  const end = new Date(start.getTime() + 2.5 * 60 * 60 * 1000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(ev.title)}&dates=${fmt(start)}/${fmt(end)}&details=${encodeURIComponent(ev.description)}&location=${encodeURIComponent(ev.location)}`;
  window.open(url, '_blank');
}

export default function Events() {
  const { t, lang } = useApp();
  const [filter, setFilter] = useState('All');
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const filtered = filter === 'All' ? UPCOMING_EVENTS : UPCOMING_EVENTS.filter(e => e.type === filter);

  return (
    <>
      <section className="bg-[#0D0B1E] py-16 px-4" aria-labelledby="events-page-heading">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-light font-bold text-sm uppercase tracking-widest mb-3">{t("What's happening", 'Kinachoendelea')}</p>
          <h1 id="events-page-heading" className="font-display font-black text-6xl md:text-8xl uppercase text-white leading-none">
            {t('Events', 'Matukio')}
          </h1>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            {t(
              'From weekly services to camps, outreach, and game nights — there is always something happening at Ignite Youth.',
              'Kutoka ibada za kila wiki hadi kambi, huduma, na usiku wa michezo — daima kuna kitu kinachoendelea Ignite Youth.'
            )}
          </p>
        </div>
      </section>

      <section className="py-12 px-4" aria-labelledby="events-list-heading">
        <div className="max-w-6xl mx-auto">
          {/* Filters + view toggle */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-8">
            <div className="flex flex-wrap gap-2">
              {TYPES.map(type => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-1.5 rounded-full text-sm font-bold border transition-colors ${
                    filter === type
                      ? 'bg-primary text-white border-primary'
                      : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary'
                  }`}
                >
                  {TYPE_LABELS[type]}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              {(['grid', 'list'] as const).map(v => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  aria-label={`${v} view`}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-colors ${
                    view === v ? 'bg-primary border-primary text-white' : 'border-slate-200 dark:border-slate-700 text-slate-400'
                  }`}
                >
                  {v === 'grid' ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          <h2 id="events-list-heading" className="sr-only">{t('Events list', 'Orodha ya Matukio')}</h2>

          {filtered.length === 0 && (
            <p className="text-center text-slate-400 py-12">{t('No events found for this filter.', 'Hakuna matukio yaliyopatikana kwa kichujio hiki.')}</p>
          )}

          {view === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map(ev => (
                <article key={ev.id} className="bg-white dark:bg-[#1A1535] rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-lg hover:shadow-primary/5 transition-shadow group">
                  <div className="relative">
                    <img
                      src={ev.image}
                      alt={ev.imageAlt}
                      loading="lazy"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full border ${TYPE_COLORS[ev.type] ?? ''}`}>
                      {ev.typeLabel}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-snug">
                      {lang === 'sw' ? ev.titleSw : ev.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 line-clamp-2">
                      {lang === 'sw' ? ev.descriptionSw : ev.description}
                    </p>
                    <div className="mt-3 space-y-1.5 text-sm text-slate-500 dark:text-slate-400">
                      <p className="flex gap-1.5 items-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        {new Date(ev.date).toLocaleDateString('en-KE', { weekday: 'long', day: 'numeric', month: 'long' })}
                      </p>
                      <p className="flex gap-1.5 items-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        {ev.time}
                      </p>
                      <p className="flex gap-1.5 items-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        {ev.location}
                      </p>
                      <p className="font-semibold text-primary">{ev.cost}</p>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Link
                        to="/rsvp"
                        state={{ event: ev }}
                        className="flex-1 text-center bg-primary text-white font-bold px-3 py-2 rounded-full text-sm hover:bg-primary-dark transition-colors"
                      >
                        {t('RSVP', 'Jiandikishe')}
                      </Link>
                      <button
                        onClick={() => addToCalendar(ev)}
                        aria-label="Add to Google Calendar"
                        className="w-10 h-10 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="12" y1="14" x2="12" y2="18"/><line x1="10" y1="16" x2="14" y2="16"/></svg>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map(ev => (
                <article key={ev.id} className="bg-white dark:bg-[#1A1535] rounded-2xl border border-slate-100 dark:border-slate-800 flex gap-4 overflow-hidden hover:shadow-md transition-shadow">
                  <img
                    src={ev.image}
                    alt={ev.imageAlt}
                    loading="lazy"
                    className="w-32 sm:w-48 object-cover flex-shrink-0"
                  />
                  <div className="p-4 flex flex-col justify-center flex-1 min-w-0">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full border inline-block w-fit mb-2 ${TYPE_COLORS[ev.type] ?? ''}`}>
                      {ev.typeLabel}
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white">{lang === 'sw' ? ev.titleSw : ev.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      {new Date(ev.date).toLocaleDateString('en-KE', { weekday: 'short', day: 'numeric', month: 'short' })} · {ev.time} · {ev.location}
                    </p>
                    <p className="font-semibold text-primary text-sm mt-0.5">{ev.cost}</p>
                    <div className="flex gap-2 mt-3">
                      <Link to="/rsvp" state={{ event: ev }} className="bg-primary text-white font-bold px-4 py-1.5 rounded-full text-sm hover:bg-primary-dark transition-colors">
                        {t('RSVP', 'Jiandikishe')}
                      </Link>
                      <button onClick={() => addToCalendar(ev)} className="border border-slate-200 dark:border-slate-700 text-slate-500 font-bold px-4 py-1.5 rounded-full text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        + {t('Calendar', 'Kalenda')}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
