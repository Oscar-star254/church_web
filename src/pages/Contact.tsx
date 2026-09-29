import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SITE } from '../data/content';

type FormState = 'idle' | 'submitting' | 'success';

export default function Contact() {
  const { t } = useApp();
  const [status, setStatus] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', newsletter: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // [BACKEND] Send email/notification to leaders
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <>
      <section className="bg-primary py-16 px-4" aria-labelledby="contact-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h1 id="contact-heading" className="font-display font-black text-6xl md:text-8xl uppercase text-white leading-none">
            {t('Get in Touch', 'Wasiliana Nasi')}
          </h1>
          <p className="text-white/70 mt-4">
            {t(
              "We love hearing from you. Whether you have a question, an idea, or just want to say hi — our team is here.",
              "Tunafurahi kusikia kutoka kwako. Iwe una swali, wazo, au unataka tu kusalimia — timu yetu ipo hapa."
            )}
          </p>
        </div>
      </section>

      <section className="py-14 px-4" aria-label="Contact information and form">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white mb-6">
              {t('Find Us', 'Tupate')}
            </h2>
            <div className="space-y-4">
              {[
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                  label: t('Address', 'Anwani'),
                  value: SITE.address,
                  href: SITE.mapLink,
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.81a16 16 0 006.29 6.29l1.17-1.17a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
                  label: t('Phone', 'Simu'),
                  value: SITE.phone,
                  href: `tel:${SITE.phone}`,
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                  label: 'Email',
                  value: SITE.email,
                  href: `mailto:${SITE.email}`,
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
                  label: t('Meetings', 'Mikutano'),
                  value: `${SITE.meetingDay} · ${SITE.meetingTime}`,
                  href: null,
                },
              ].map(item => (
                <div key={item.label} className="flex gap-3 items-start bg-white dark:bg-[#1A1535] rounded-2xl p-4 border border-slate-100 dark:border-slate-800">
                  <span className="text-primary mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-slate-900 dark:text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <h3 className="font-display font-bold text-2xl uppercase text-slate-900 dark:text-white mt-8 mb-4">
              {t('Follow Us', 'Tufuatilie')}
            </h3>
            <div className="flex gap-3">
              {[
                { label: 'Instagram', href: `https://instagram.com/${SITE.instagram}`, color: 'from-pink-500 to-orange-400' },
                { label: 'TikTok', href: `https://tiktok.com/@${SITE.tiktok}`, color: 'from-slate-800 to-slate-700' },
                { label: 'YouTube', href: `https://youtube.com/${SITE.youtube}`, color: 'from-red-600 to-red-500' },
                { label: 'WhatsApp', href: `https://wa.me/${SITE.whatsapp}`, color: 'from-[#128C7E] to-[#25D366]' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 text-center text-white font-bold text-xs py-3 rounded-xl bg-gradient-to-br ${s.color} hover:opacity-90 transition-opacity`}
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8">
              <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-slate-200 dark:bg-slate-800 rounded-2xl h-48 flex items-center justify-center text-slate-400 hover:opacity-80 transition-opacity">
                  <div className="text-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <p className="text-sm font-bold">{t('[EMBED: Google Map]', '[WEKA: Ramani ya Google]')}</p>
                    <p className="text-xs mt-1">{t('Click to view on Google Maps', 'Bonyeza kuona kwenye Ramani za Google')}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white mb-6">
              {t('Send a Message', 'Tuma Ujumbe')}
            </h2>
            {status === 'success' ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">✉️</div>
                <h3 className="font-display font-black text-3xl uppercase text-slate-900 dark:text-white">
                  {t('Message Sent!', 'Ujumbe Umetumwa!')}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mt-2">
                  {t("We'll get back to you within 24 hours. Or WhatsApp us for a faster reply!", "Tutajibu ndani ya masaa 24. Au tutumie WhatsApp kwa jibu la haraka!")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cn" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t('Name *', 'Jina *')}</label>
                    <input id="cn" type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#1A1535] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition" />
                  </div>
                  <div>
                    <label htmlFor="cp" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t('Phone', 'Simu')}</label>
                    <input id="cp" type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#1A1535] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition" />
                  </div>
                </div>
                <div>
                  <label htmlFor="ce" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Email</label>
                  <input id="ce" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#1A1535] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition" />
                </div>
                <div>
                  <label htmlFor="cs" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t('Subject *', 'Kichwa *')}</label>
                  <input id="cs" type="text" required value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#1A1535] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition" />
                </div>
                <div>
                  <label htmlFor="cm" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t('Message *', 'Ujumbe *')}</label>
                  <textarea id="cm" required rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#1A1535] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none resize-none transition" />
                </div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={form.newsletter} onChange={e => setForm(f => ({ ...f, newsletter: e.target.checked }))} className="w-4 h-4 accent-primary" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{t('Sign me up for the newsletter / WhatsApp broadcast', 'Niandikishe kwenye jarida / utangazaji wa WhatsApp')}</span>
                </label>
                <button type="submit" disabled={status === 'submitting'}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-full text-lg transition-colors disabled:opacity-60">
                  {status === 'submitting' ? t('Sending…', 'Inatuma…') : t('Send Message', 'Tuma Ujumbe')}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
