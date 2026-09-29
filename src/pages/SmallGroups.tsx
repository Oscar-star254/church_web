import { useState } from 'react';
import { Link } from 'react-router';
import { useApp } from '../context/AppContext';
import { SMALL_GROUPS } from '../data/content';

const INTERESTS = ['All', 'Bible Study', 'Music & Worship', 'Media & Tech', 'Outreach', 'Creative Arts', 'Hospitality'];
const AGE_GROUPS = ['All', '13–17', '16–25', '18–25', 'All Ages'];

const INTEREST_COLORS: Record<string, string> = {
  'Bible Study': 'bg-primary/10 text-primary',
  'Music & Worship': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  'Media & Tech': 'bg-sky/10 text-sky',
  'Outreach': 'bg-emerald/10 text-emerald',
  'Creative Arts': 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
  'Hospitality': 'bg-amber/10 text-amber-700 dark:text-amber-400',
};

export default function SmallGroups() {
  const { t } = useApp();
  const [interest, setInterest] = useState('All');
  const [ageGroup, setAgeGroup] = useState('All');

  const filtered = SMALL_GROUPS.filter(g => {
    const matchInterest = interest === 'All' || g.interest === interest;
    const matchAge = ageGroup === 'All' || g.ageGroup === ageGroup || g.ageGroup === 'All';
    return matchInterest && matchAge;
  });

  return (
    <>
      <section className="bg-primary py-16 px-4" aria-labelledby="groups-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/60 font-bold text-sm uppercase tracking-widest mb-3">{t('Find Your Community', 'Pata Jamii Yako')}</p>
          <h1 id="groups-heading" className="font-display font-black text-6xl md:text-8xl uppercase text-white leading-none">
            {t('Small Groups', 'Vikundi Vidogo')}
          </h1>
          <p className="text-white/70 mt-4 max-w-xl mx-auto">
            {t(
              'Big church. Intimate community. Find your people in a small group that matches your interests, schedule, and season of life.',
              'Kanisa kubwa. Jamii ya karibu. Pata watu wako katika kikundi kidogo kinachooana na maslahi yako, ratiba yako, na kipindi cha maisha yako.'
            )}
          </p>
        </div>
      </section>

      <section className="py-12 px-4" aria-labelledby="groups-list-heading">
        <div className="max-w-6xl mx-auto">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-bold text-slate-500 dark:text-slate-400 self-center">{t('Interest:', 'Maslahi:')}</span>
              {INTERESTS.map(i => (
                <button
                  key={i}
                  onClick={() => setInterest(i)}
                  className={`px-3 py-1 rounded-full text-sm font-bold border transition-colors ${
                    interest === i
                      ? 'bg-primary text-white border-primary'
                      : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary'
                  }`}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>

          <h2 id="groups-list-heading" className="sr-only">{t('Small groups directory', 'Orodha ya vikundi vidogo')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map(group => (
              <article key={group.id} className="bg-white dark:bg-[#1A1535] rounded-2xl border border-slate-100 dark:border-slate-800 p-5 hover:shadow-lg hover:shadow-primary/5 transition-shadow">
                <div className="flex justify-between items-start gap-3 mb-3">
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white">{group.name}</h3>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${INTEREST_COLORS[group.interest] ?? 'bg-slate-100 text-slate-600'}`}>
                    {group.interest}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{group.description}</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <p className="flex gap-1.5 items-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    {group.meetingDay}
                  </p>
                  <p className="flex gap-1.5 items-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {group.meetingTime}
                  </p>
                  <p className="flex gap-1.5 items-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {group.location}
                  </p>
                  <p className="flex gap-1.5 items-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                    {t('Ages', 'Umri')} {group.ageGroup}
                  </p>
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
                  {t('Leader:', 'Kiongozi:')} {group.leader}
                </p>
                <Link
                  to="/rsvp"
                  className="mt-4 w-full text-center block bg-primary hover:bg-primary-dark text-white font-bold py-2.5 rounded-full text-sm transition-colors"
                >
                  ✋ {t('Join This Group', 'Jiunge na Kikundi Hiki')}
                </Link>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-slate-400 py-12">
              {t('No groups match your filters. Try a different combination.', 'Hakuna vikundi vinavyooana na vichujio vyako. Jaribu mchanganyiko mwingine.')}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
