import { useState } from 'react';
import { useApp } from '../context/AppContext';

type FormState = 'idle' | 'submitting' | 'success';

const PRAYER_WALL = [
  { id: 1, name: 'Anonymous', request: 'Pray for my KCSE exams next month. I need peace and strength.', date: '2025-07-28', shared: true },
  { id: 2, name: 'K.M.', request: 'Please pray for my family — we are going through a very difficult season financially.', date: '2025-07-26', shared: true },
  { id: 3, name: 'Anonymous', request: 'I am struggling with loneliness. Pray that God helps me find community.', date: '2025-07-24', shared: true },
  { id: 4, name: 'B.O.', request: 'Pray for my job interview next week.', date: '2025-07-22', shared: true },
];

export default function Prayer() {
  const { t } = useApp();
  const [form, setForm] = useState({ name: '', request: '', anonymous: false, shareWithTeam: true, shareOnWall: false });
  const [status, setStatus] = useState<FormState>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // [BACKEND] Save prayer request; notify prayer team via email/WhatsApp
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <>
      <section className="bg-[#0D0B1E] py-16 px-4" aria-labelledby="prayer-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary-light font-bold text-sm uppercase tracking-widest mb-3">🙏 {t('Prayer', 'Maombi')}</p>
          <h1 id="prayer-heading" className="font-display font-black text-6xl md:text-7xl uppercase text-white leading-none">
            {t('We Are Praying', 'Tunaomba')}
            <br />
            <span className="text-accent">{t('For You', 'Kwa Ajili Yako')}</span>
          </h1>
          <p className="text-white/60 mt-4">
            {t(
              'You are not alone. Submit your prayer request and our prayer team will lift you up. You can choose to share it on the prayer wall or keep it private.',
              'Huko peke yako. Wasilisha ombi lako la maombi na timu yetu ya maombi itakuinua. Unaweza kuchagua kuishiriki kwenye ukuta wa maombi au kuibeka faragha.'
            )}
          </p>
        </div>
      </section>

      <section className="py-14 px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto" aria-labelledby="prayer-form-heading">
        {/* Form */}
        <div>
          <h2 id="prayer-form-heading" className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white mb-6">
            {t('Submit a Request', 'Wasilisha Ombi')}
          </h2>

          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🙏</div>
              <h3 className="font-display font-black text-3xl uppercase text-slate-900 dark:text-white">
                {t('We have got you!', 'Tunakushughulikia!')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-sm mx-auto">
                {t(
                  'Your prayer request has been received. Our prayer team will be praying for you. You are loved.',
                  'Ombi lako la maombi limepokelewa. Timu yetu ya maombi itakuomba. Unapendwa.'
                )}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />
              <div>
                <label htmlFor="prayerName" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {t('Your Name (optional)', 'Jina Lako (hiari)')}
                </label>
                <input
                  id="prayerName" type="text" value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#1A1535] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition"
                  placeholder={t('First name or leave blank', 'Jina la kwanza au acha tupu')}
                />
              </div>
              <div>
                <label htmlFor="request" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {t('Your Prayer Request *', 'Ombi Lako la Maombi *')}
                </label>
                <textarea
                  id="request" required rows={5} value={form.request}
                  onChange={e => setForm(f => ({ ...f, request: e.target.value }))}
                  placeholder={t('Share what is on your heart…', 'Shiriki kilichopo moyoni mwako…')}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#1A1535] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none resize-none transition"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={form.anonymous} onChange={e => setForm(f => ({ ...f, anonymous: e.target.checked }))} className="mt-1 w-4 h-4 accent-primary" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {t('Submit anonymously', 'Wasilisha bila kutambulika')}
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={form.shareWithTeam} onChange={e => setForm(f => ({ ...f, shareWithTeam: e.target.checked }))} className="mt-1 w-4 h-4 accent-primary" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {t('Share with the prayer team (private)', 'Shiriki na timu ya maombi (faragha)')}
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={form.shareOnWall} onChange={e => setForm(f => ({ ...f, shareOnWall: e.target.checked }))} className="mt-1 w-4 h-4 accent-primary" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {t('Share on the public prayer wall (visible to all members)', 'Shiriki kwenye ukuta wa maombi wa umma (inaonekana kwa wanachama wote)')}
                  </span>
                </label>
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-full text-lg transition-colors disabled:opacity-60"
              >
                {status === 'submitting' ? t('Submitting…', 'Inawasilisha…') : t('Submit Prayer Request 🙏', 'Wasilisha Ombi la Maombi 🙏')}
              </button>
            </form>
          )}
        </div>

        {/* Prayer wall */}
        <div>
          <h2 className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white mb-6">
            {t('Prayer Wall', 'Ukuta wa Maombi')}
          </h2>
          <div className="space-y-4">
            {PRAYER_WALL.map(req => (
              <div key={req.id} className="bg-white dark:bg-[#1A1535] rounded-2xl border border-slate-100 dark:border-slate-800 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {req.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-900 dark:text-white">{req.name}</p>
                    <p className="text-xs text-slate-400">{new Date(req.date).toLocaleDateString('en-KE', { day: 'numeric', month: 'short' })}</p>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">"{req.request}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
