import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TESTIMONIES } from '../data/content';

type FormState = 'idle' | 'submitting' | 'success';

export default function Testimonies() {
  const { t } = useApp();
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', anonymous: false, story: '', topic: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // [BACKEND] Submit story for moderation before publishing
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <>
      <section className="bg-primary py-16 px-4" aria-labelledby="testimonies-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h1 id="testimonies-heading" className="font-display font-black text-6xl md:text-8xl uppercase text-white leading-none">
            {t('Stories of', 'Hadithi za')}
            <br />
            <span className="text-amber">{t('Change', 'Mabadiliko')}</span>
          </h1>
          <p className="text-white/70 mt-4 max-w-xl mx-auto">
            {t(
              'Real stories from real people. Every story here is published with full consent, and members may use first name only or stay anonymous.',
              'Hadithi za kweli kutoka kwa watu wa kweli. Kila hadithi hapa imechapishwa kwa idhini kamili, na wanachama wanaweza kutumia jina la kwanza tu au kubaki bila kutambulika.'
            )}
          </p>
        </div>
      </section>

      <section className="py-14 px-4" aria-labelledby="stories-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="stories-heading" className="sr-only">{t('Member testimonies', 'Ushuhuda wa Wanachama')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIES.map(t_ => (
              <article key={t_.id} className="bg-white dark:bg-[#1A1535] rounded-2xl border border-slate-100 dark:border-slate-800 p-6 relative">
                <svg width="32" height="24" viewBox="0 0 40 30" fill="#6D28D9" className="mb-4 opacity-20" aria-hidden="true">
                  <path d="M0 30V18C0 8.4 4.8 2.4 14.4 0L16.8 3.6C12 5.2 9.2 8.4 8.4 13.2H16.8V30H0zm22.8 0V18C22.8 8.4 27.6 2.4 37.2 0L39.6 3.6C34.8 5.2 32 8.4 31.2 13.2H39.6V30H22.8z"/>
                </svg>
                <blockquote className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  "{t_.shortQuote}"
                </blockquote>
                <footer className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-black text-primary text-lg">
                    {t_.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm">{t_.name}</p>
                    <p className="text-xs text-slate-400">{t('Age', 'Umri')} {t_.ageGroup} · <span className="text-primary">{t_.topic}</span></p>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Submission form */}
      <section className="py-14 px-4 bg-white dark:bg-[#130F2A]" aria-labelledby="share-heading">
        <div className="max-w-xl mx-auto">
          <h2 id="share-heading" className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white mb-2">
            {t('Share Your Story', 'Shiriki Hadithi Yako')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            {t(
              'Your testimony could encourage someone else. All submissions are reviewed before publishing. You can share anonymously.',
              'Ushuhuda wako unaweza kumtia moyo mtu mwingine. Mawasilisho yote yanakaguliwa kabla ya kuchapishwa. Unaweza kushiriki bila kutambulika.'
            )}
          </p>

          {formState === 'success' ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">🙏</div>
              <h3 className="font-display font-black text-3xl uppercase text-slate-900 dark:text-white">
                {t('Thank you!', 'Asante!')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                {t(
                  'We have received your story and will review it before publishing. We may reach out to confirm details.',
                  'Tumepokea hadithi yako na tutaikagua kabla ya kuchapisha. Tunaweza kuwasiliana nawe kuthibitisha maelezo.'
                )}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {t('Name (first name only is fine)', 'Jina (jina la kwanza tu inatosha)')}
                </label>
                <input
                  id="name" type="text" value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#0D0B1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition"
                  placeholder={t('e.g. Amina or Anonymous', 'mfano: Amina au Bila Jina')}
                />
              </div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.anonymous}
                  onChange={e => setForm(f => ({ ...f, anonymous: e.target.checked }))}
                  className="w-5 h-5 accent-primary"
                />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {t('Publish anonymously (no name shown)', 'Chapisha bila kutambulika (hakuna jina litakaloonyeshwa)')}
                </span>
              </label>
              <div>
                <label htmlFor="storyTopic" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {t('Topic / Theme', 'Mada / Dhamira')}
                </label>
                <select
                  id="storyTopic" value={form.topic}
                  onChange={e => setForm(f => ({ ...f, topic: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#0D0B1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
                >
                  <option value="">{t('Choose a theme…', 'Chagua dhamira…')}</option>
                  {['Salvation', 'Healing', 'Belonging', 'Provision', 'Forgiveness', 'Purpose', 'Friendship', 'Other'].map(tp => (
                    <option key={tp} value={tp}>{tp}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="story" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {t('Your Story *', 'Hadithi Yako *')}
                </label>
                <textarea
                  id="story" required rows={6} value={form.story}
                  onChange={e => setForm(f => ({ ...f, story: e.target.value }))}
                  placeholder={t('Share what God has done in your life…', 'Shiriki alichofanya Mungu katika maisha yako…')}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#0D0B1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-full text-lg transition-colors disabled:opacity-60"
              >
                {formState === 'submitting' ? t('Submitting…', 'Inawasilisha…') : t('Submit My Story ✨', 'Wasilisha Hadithi Yangu ✨')}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
