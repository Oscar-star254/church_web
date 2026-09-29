import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { UPCOMING_EVENTS, SITE } from '../data/content';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function RSVP() {
  const { t } = useApp();
  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', email: '',
    ageGroup: '', event: '', guardianName: '', guardianPhone: '',
    allergies: '', notes: '', isMinor: false,
  });
  const [status, setStatus] = useState<FormState>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleAgeGroup = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setForm(f => ({ ...f, ageGroup: val, isMinor: val === '13-15' || val === '16-17' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // [BACKEND] POST form data to your backend / Supabase / Firebase
    // Replace this timeout with an actual fetch/axios call
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mb-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h2 className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white">
          {t("You're registered! 🔥", 'Umesajiliwa! 🔥')}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-sm">
          {t(
            `We have your spot! You will receive a confirmation on WhatsApp or SMS soon. See you there! If you have questions, reach us at ${SITE.phone}.`,
            `Nafasi yako ipo! Utapokea uthibitisho kwenye WhatsApp au SMS hivi karibuni. Tuonane huko! Ukiwa na maswali, wasiliana nasi kwa ${SITE.phone}.`
          )}
        </p>
        <a
          href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi! I just registered for an event. Can I confirm my spot?")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 bg-[#25D366] text-white font-bold px-6 py-3 rounded-full"
        >
          {t('Confirm on WhatsApp', 'Thibitisha kwenye WhatsApp')}
        </a>
      </div>
    );
  }

  return (
    <>
      <section className="bg-primary py-14 px-4" aria-labelledby="rsvp-heading">
        <div className="max-w-2xl mx-auto text-center">
          <h1 id="rsvp-heading" className="font-display font-black text-6xl uppercase text-white">
            {t('Sign Up', 'Jiandikishe')}
          </h1>
          <p className="text-white/70 mt-3">
            {t('Register for events, camps, and small groups.', 'Jiandikishe kwa matukio, kambi, na vikundi vidogo.')}
          </p>
        </div>
      </section>

      <section className="py-14 px-4" aria-label="Registration form">
        <div className="max-w-xl mx-auto bg-white dark:bg-[#1A1535] rounded-2xl border border-slate-100 dark:border-slate-800 p-6 md:p-8">
          {/* Spam honeypot — hidden from humans */}
          <form onSubmit={handleSubmit} noValidate>
            <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {t('First Name', 'Jina la Kwanza')} *
                </label>
                <input
                  id="firstName" name="firstName" type="text" required
                  value={form.firstName} onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#0D0B1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {t('Last Name', 'Jina la Familia')} *
                </label>
                <input
                  id="lastName" name="lastName" type="text" required
                  value={form.lastName} onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#0D0B1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="phone" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">
                {t('Phone Number (WhatsApp preferred)', 'Nambari ya Simu (WhatsApp inapendekezwa)')} *
              </label>
              <input
                id="phone" name="phone" type="tel" required placeholder="+254 7XX XXX XXX"
                value={form.phone} onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#0D0B1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="ageGroup" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">
                {t('Age Group', 'Kikundi cha Umri')} *
              </label>
              <select
                id="ageGroup" name="ageGroup" required
                value={form.ageGroup} onChange={handleAgeGroup}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#0D0B1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
              >
                <option value="">{t('Select age group…', 'Chagua kikundi cha umri…')}</option>
                <option value="13-15">13–15</option>
                <option value="16-17">16–17</option>
                <option value="18-21">18–21</option>
                <option value="22-25">22–25</option>
              </select>
            </div>

            <div className="mt-4">
              <label htmlFor="event" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">
                {t('Event / Programme', 'Tukio / Programu')} *
              </label>
              <select
                id="event" name="event" required
                value={form.event} onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#0D0B1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
              >
                <option value="">{t('Select event…', 'Chagua tukio…')}</option>
                {UPCOMING_EVENTS.map(ev => (
                  <option key={ev.id} value={ev.title}>{ev.title} — {new Date(ev.date).toLocaleDateString('en-KE', { day: 'numeric', month: 'short' })}</option>
                ))}
                <option value="small-group">{t('Join a Small Group', 'Jiunge na Kikundi')}</option>
              </select>
            </div>

            {/* Guardian info — shown for minors */}
            {form.isMinor && (
              <div className="mt-6 p-4 bg-amber/10 dark:bg-amber/5 rounded-xl border border-amber/30">
                <p className="font-bold text-amber-800 dark:text-amber-400 text-sm mb-3">
                  {t('⚠️ Guardian Consent Required (Under 18)', '⚠️ Idhini ya Mlezi Inahitajika (Chini ya Miaka 18)')}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="guardianName" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">
                      {t('Parent/Guardian Name', 'Jina la Mzazi/Mlezi')} *
                    </label>
                    <input
                      id="guardianName" name="guardianName" type="text" required={form.isMinor}
                      value={form.guardianName} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0D0B1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="guardianPhone" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">
                      {t('Guardian Phone', 'Simu ya Mlezi')} *
                    </label>
                    <input
                      id="guardianPhone" name="guardianPhone" type="tel" required={form.isMinor}
                      value={form.guardianPhone} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0D0B1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="mt-4">
              <label htmlFor="allergies" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">
                {t('Allergies / Medical Notes (optional)', 'Mzio / Maelezo ya Kimatibabu (hiari)')}
              </label>
              <textarea
                id="allergies" name="allergies" rows={2}
                value={form.allergies} onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#0D0B1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none"
              />
            </div>

            {/* M-Pesa payment info for paid events */}
            <div className="mt-5 p-4 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20">
              <p className="font-bold text-primary text-sm mb-1">
                {t('💳 Payment (for paid events)', '💳 Malipo (kwa matukio ya kulipa)')}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t(
                  `M-Pesa Paybill: ${SITE.mpesaPaybill} · Account: ${SITE.mpesaAccount}. Send your M-Pesa confirmation number in the notes or on WhatsApp.`,
                  `M-Pesa Paybill: ${SITE.mpesaPaybill} · Akaunti: ${SITE.mpesaAccount}. Tuma nambari yako ya uthibitisho wa M-Pesa katika maelezo au kwenye WhatsApp.`
                )}
              </p>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="mt-6 w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-full text-lg transition-colors disabled:opacity-60"
            >
              {status === 'submitting'
                ? t('Registering…', 'Inasajili…')
                : t('Register Now ⚡', 'Jiandikishe Sasa ⚡')}
            </button>
            <p className="text-xs text-slate-400 text-center mt-3">
              {t(
                'Your data is kept private and used only to manage your registration. See our privacy policy.',
                'Data yako inabaki siri na inatumika tu kusimamia usajili wako. Angalia sera yetu ya faragha.'
              )}
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
