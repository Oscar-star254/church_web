import { useState } from 'react';
import { useApp } from '../context/AppContext';

const SERVE_AREAS = [
  { id: 'music', icon: '🎸', title: 'Music & Worship', desc: 'Vocals, guitar, bass, drums, keys, or backing vocals. Rehearse Saturdays at 2 PM.' },
  { id: 'tech', icon: '🎬', title: 'Media & Tech', desc: 'Camera, video editing, live streaming, graphics, and sound. Thursday evenings.' },
  { id: 'design', icon: '🎨', title: 'Design & Creative', desc: 'Social media graphics, event posters, printed materials. Flexible schedule.' },
  { id: 'ushering', icon: '🤝', title: 'Ushering & Hospitality', desc: 'Welcoming guests, managing seating, and making everyone feel at home. Fridays.' },
  { id: 'outreach', icon: '🌍', title: 'Outreach & Missions', desc: 'Monthly community service, food packs, prayer walks, and evangelism teams.' },
  { id: 'children', icon: '👶', title: 'Children & Junior Youth', desc: 'Help with the 13–17 teen programme. Must pass basic safeguarding training.' },
  { id: 'hospitality', icon: '🍕', title: 'Food & Events Setup', desc: 'Preparing refreshments, event setup and cleanup. Great for behind-the-scenes people.' },
  { id: 'admin', icon: '📊', title: 'Admin & Logistics', desc: 'Spreadsheets, communication, coordination. Perfect for organised people.' },
];

type FormState = 'idle' | 'submitting' | 'success';

export default function Volunteer() {
  const { t } = useApp();
  const [selected, setSelected] = useState<string[]>([]);
  const [form, setForm] = useState({ name: '', phone: '', skills: '', availability: '' });
  const [status, setStatus] = useState<FormState>('idle');

  const toggle = (id: string) => setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selected.length === 0) { alert(t('Please select at least one area to serve.', 'Tafadhali chagua angalau eneo moja la kuhudumu.')); return; }
    setStatus('submitting');
    // [BACKEND] Save volunteer interest and notify team leaders
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="text-6xl mb-4">🙌</div>
        <h2 className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white">{t("Let's go!", 'Tuzende!')}</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-sm">
          {t("We've received your expression of interest. A team leader will be in touch within a week to get you started!", "Tumepokea udhihirisho wako wa nia. Kiongozi wa timu atakuwasiliana ndani ya wiki moja kukuanza!")}
        </p>
      </div>
    );
  }

  return (
    <>
      <section className="bg-primary py-16 px-4" aria-labelledby="vol-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/60 font-bold text-sm uppercase tracking-widest mb-3">🙌 {t('Get Involved', 'Jiunge')}</p>
          <h1 id="vol-heading" className="font-display font-black text-6xl md:text-8xl uppercase text-white leading-none">
            {t('Serve', 'Huduma')}
          </h1>
          <p className="text-white/70 mt-4 max-w-xl mx-auto">
            {t(
              "The church works best when everyone plays a part. Find the area that fits your gifts and let's serve together.",
              "Kanisa inafanya kazi vizuri zaidi wakati kila mtu anacheza sehemu yake. Pata eneo linalofaa zawadi zako na tuhudumiwe pamoja."
            )}
          </p>
        </div>
      </section>

      <section className="py-14 px-4" aria-labelledby="serve-areas-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="serve-areas-heading" className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white mb-2">
            {t('Ways to Serve', 'Njia za Kuhudumu')}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm">
            {t('Select one or more areas below, then fill in the form.', 'Chagua moja au zaidi ya maeneo hapa chini, kisha jaza fomu.')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {SERVE_AREAS.map(area => (
              <button
                key={area.id}
                onClick={() => toggle(area.id)}
                className={`text-left rounded-2xl p-4 border-2 transition-all ${
                  selected.includes(area.id)
                    ? 'border-primary bg-primary/10 dark:bg-primary/20'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1A1535] hover:border-primary/40'
                }`}
                aria-pressed={selected.includes(area.id)}
              >
                <div className="text-3xl mb-2">{area.icon}</div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">{area.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{area.desc}</p>
                {selected.includes(area.id) && (
                  <span className="mt-2 inline-block text-primary font-bold text-xs">✓ {t('Selected', 'Imechaguliwa')}</span>
                )}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} noValidate className="max-w-xl bg-white dark:bg-[#1A1535] rounded-2xl border border-slate-100 dark:border-slate-800 p-6 md:p-8">
            <h2 className="font-display font-black text-3xl uppercase text-slate-900 dark:text-white mb-6">
              {t('Sign Up to Serve', 'Jiandikishe Kuhudumu')}
            </h2>
            <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />
            <div className="space-y-4">
              <div>
                <label htmlFor="vName" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t('Full Name *', 'Jina Kamili *')}</label>
                <input id="vName" type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#0D0B1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition" />
              </div>
              <div>
                <label htmlFor="vPhone" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t('Phone *', 'Simu *')}</label>
                <input id="vPhone" type="tel" required value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#0D0B1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition" />
              </div>
              <div>
                <label htmlFor="vSkills" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t('Relevant Skills / Experience', 'Ujuzi / Uzoefu Unaohusiana')}</label>
                <textarea id="vSkills" rows={3} value={form.skills} onChange={e => setForm(f => ({ ...f, skills: e.target.value }))}
                  placeholder={t('e.g. I play guitar, I study graphic design…', 'mfano: Ninacheza gitaa, nasomea usanifu wa picha…')}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#0D0B1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none resize-none transition" />
              </div>
              <div>
                <label htmlFor="vAvail" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t('Availability', 'Upatikanaji')}</label>
                <input id="vAvail" type="text" value={form.availability} onChange={e => setForm(f => ({ ...f, availability: e.target.value }))}
                  placeholder={t('e.g. Fridays always, Saturdays sometimes', 'mfano: Ijumaa daima, Jumamosi wakati mwingine')}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#0D0B1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition" />
              </div>
              {selected.length > 0 && (
                <div className="p-3 bg-primary/5 dark:bg-primary/10 rounded-xl text-sm">
                  <span className="font-bold text-primary">{t('Selected areas: ', 'Maeneo yaliyochaguliwa: ')}</span>
                  <span className="text-slate-700 dark:text-slate-300">{selected.map(id => SERVE_AREAS.find(a => a.id === id)?.title).join(', ')}</span>
                </div>
              )}
              <button type="submit" disabled={status === 'submitting'}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-full text-lg transition-colors disabled:opacity-60">
                {status === 'submitting' ? t('Submitting…', 'Inawasilisha…') : t('I Want to Serve! 🙌', 'Nataka Kuhudumu! 🙌')}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
