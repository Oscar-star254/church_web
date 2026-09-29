import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SITE } from '../data/content';

export default function Members() {
  const { t } = useApp();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t(
      '[BACKEND REQUIRED] Member login is not yet connected. Set up Supabase Auth or Firebase Auth and connect it here.',
      '[BACKEND INAHITAJIKA] Kuingia kwa mwanachama bado hakujaunganishwa. Sanidi Supabase Auth au Firebase Auth na uiunganishe hapa.'
    ));
  };

  return (
    <>
      <section className="bg-[#0D0B1E] py-16 px-4" aria-labelledby="members-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary-light font-bold text-sm uppercase tracking-widest mb-3">🔐 {t('Members Only', 'Wanachama Tu')}</p>
          <h1 id="members-heading" className="font-display font-black text-6xl md:text-7xl uppercase text-white leading-none">
            {t('Member Area', 'Eneo la Wanachama')}
          </h1>
          <p className="text-white/60 mt-4">
            {t(
              'Private schedules, volunteer rosters, materials, and announcements for registered members.',
              'Ratiba za faragha, orodha za wanaojitolea, nyenzo, na matangazo kwa wanachama waliojisajili.'
            )}
          </p>
        </div>
      </section>

      <section className="py-14 px-4" aria-label="Member login">
        <div className="max-w-md mx-auto">
          {/* Backend notice */}
          <div className="mb-6 p-4 bg-amber/10 dark:bg-amber/5 rounded-2xl border border-amber/30">
            <p className="font-bold text-amber-700 dark:text-amber-400 text-sm">
              🔧 {t('[BACKEND REQUIRED]', '[BACKEND INAHITAJIKA]')}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {t(
                'This login form is a front-end placeholder. To activate, connect it to Supabase Auth (recommended), Firebase Auth, or another authentication provider. See the code comment in Members.tsx for instructions.',
                'Fomu hii ya kuingia ni mwongozo wa mbele ya seva. Ili kuamilisha, iunganishe na Supabase Auth (iliyopendekezwa), Firebase Auth, au mtoa huduma mwingine wa uthibitisho. Angalia maoni ya msimbo katika Members.tsx kwa maelekezo.'
              )}
            </p>
          </div>

          <div className="bg-white dark:bg-[#1A1535] rounded-2xl border border-slate-100 dark:border-slate-800 p-6 md:p-8">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="mEmail" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Email</label>
                <input id="mEmail" type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#0D0B1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition" />
              </div>
              <div>
                <label htmlFor="mPass" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t('Password', 'Nenosiri')}</label>
                <input id="mPass" type="password" required value={pass} onChange={e => setPass(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#0D0B1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition" />
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-full text-lg transition-colors">
                {t('Sign In', 'Ingia')}
              </button>
              <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                {t("Don't have an account? ", "Huna akaunti? ")}
                <a href={`mailto:${SITE.email}?subject=Member Account Request`} className="text-primary font-bold hover:underline">
                  {t('Request access', 'Omba ufikiaji')}
                </a>
              </p>
            </form>
          </div>

          {/* What you'll find inside */}
          <div className="mt-8">
            <h2 className="font-display font-black text-2xl uppercase text-slate-900 dark:text-white mb-4">{t('Inside the Member Area', 'Ndani ya Eneo la Wanachama')}</h2>
            <ul className="space-y-3">
              {[
                { icon: '📅', label: t('Private event schedules and timelines', 'Ratiba za faragha za matukio na mipangilio') },
                { icon: '📋', label: t('Volunteer rosters and serving schedules', 'Orodha za wanaojitolea na ratiba za kuhudumu') },
                { icon: '📄', label: t('Bible study notes and leader materials', 'Maelezo ya masomo ya Biblia na nyenzo za viongozi') },
                { icon: '📢', label: t('Internal announcements and updates', 'Matangazo ya ndani na masasisho') },
                { icon: '📸', label: t('Private photo albums (with consent)', 'Albamu za picha za faragha (kwa idhini)') },
              ].map(item => (
                <li key={item.label} className="flex gap-3 items-start">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
