import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SITE } from '../data/content';

const SECTIONS = [
  {
    icon: '🛡️',
    title: 'Child Safety Policy',
    titleSw: 'Sera ya Usalama wa Watoto',
    content: [
      'All leaders working with minors undergo a thorough vetting process including reference checks and a mandatory safeguarding training.',
      'We operate a two-adults rule: no leader is ever alone with a minor at any point.',
      'Leaders are required to maintain professional boundaries at all times. No personal social media contact with minors.',
      'All safeguarding concerns are reported to our Safeguarding Lead (Pastor David Mwangi) and, where required, to the relevant authorities.',
    ],
    contentSw: [
      'Viongozi wote wanaofanya kazi na watoto wadogo hupitia mchakato wa kina wa ukaguzi ikiwemo ukaguzi wa marejeo na mafunzo ya lazima ya ulinzi.',
      'Tunafuata kanuni ya watu wazima wawili: hakuna kiongozi anayekuwa peke yake na mtoto mdogo wakati wowote.',
      'Viongozi wanahitajika kudumisha mipaka ya kitaaluma wakati wote. Hakuna mawasiliano ya kibinafsi ya mitandao ya kijamii na watoto wadogo.',
      'Wasiwasi wote wa ulinzi huripotiwa kwa Mkurugenzi wetu wa Ulinzi (Mchungaji David Mwangi) na, pale inapohitajika, kwa mamlaka husika.',
    ],
  },
  {
    icon: '📋',
    title: 'Leader Vetting & Training',
    titleSw: 'Ukaguzi na Mafunzo ya Viongozi',
    content: [
      'Every leader completes a formal application, interview, and two-month probationary period before working with youth independently.',
      'Mandatory safeguarding training is refreshed annually.',
      'Leaders sign a Code of Conduct that outlines expected behaviour, communication standards, and reporting obligations.',
    ],
    contentSw: [
      'Kila kiongozi hukamilisha ombi rasmi, mahojiano, na kipindi cha miezi miwili cha majaribio kabla ya kufanya kazi na vijana kwa kujitegemea.',
      'Mafunzo ya lazima ya ulinzi yanafanywa upya kila mwaka.',
      'Viongozi husaini Kanuni ya Maadili inayoainisha tabia inayotarajiwa, viwango vya mawasiliano, na wajibu wa kuripoti.',
    ],
  },
  {
    icon: '📱',
    title: 'Communication Policy',
    titleSw: 'Sera ya Mawasiliano',
    content: [
      'Leaders communicate with young people via official group chats only (WhatsApp groups with multiple leaders present).',
      'Personal one-on-one messaging between leaders and minors is not permitted.',
      'Parents and guardians are added to relevant communication groups and are kept informed of all activities.',
    ],
    contentSw: [
      'Viongozi wanawasiliana na vijana kupitia vikundi vya mazungumzo rasmi tu (vikundi vya WhatsApp na viongozi wengi wakiwepo).',
      'Ujumbe wa kibinafsi wa mtu mmoja kwa mmoja kati ya viongozi na watoto wadogo hairuhusiwi.',
      'Wazazi na walezi wanaongezwa kwenye vikundi husika vya mawasiliano na wanafahamishwa kuhusu shughuli zote.',
    ],
  },
  {
    icon: '🚌',
    title: 'Transport & Camp Policy',
    titleSw: 'Sera ya Usafiri na Kambi',
    content: [
      'All transport for youth activities is arranged through vetted drivers and official vehicles.',
      'Parents/guardians must sign a consent form before their child participates in off-site activities or camps.',
      'A first-aider is always present at camps and retreats.',
      'Medical information is collected for all participants and carried by a leader throughout the event.',
    ],
    contentSw: [
      'Usafiri wote wa shughuli za vijana hupangwa kupitia madereva waliokaguliwa na magari rasmi.',
      'Wazazi/walezi lazima wasaini fomu ya idhini kabla ya mtoto wao kushiriki katika shughuli za nje ya eneo au kambi.',
      'Msaidizi wa kwanza daima yupo katika kambi na kurasa za mapumziko.',
      'Taarifa za kimatibabu zinakusanywa kwa washiriki wote na kubebwa na kiongozi wakati wote wa tukio.',
    ],
  },
  {
    icon: '📸',
    title: 'Photo & Media Consent',
    titleSw: 'Idhini ya Picha na Vyombo vya Habari',
    content: [
      'We NEVER publish photos of minors without explicit written consent from a parent or guardian.',
      'Full names, ages, or locations of minors are NEVER shown alongside their photos.',
      'A photo consent form must be completed at registration for any young person under 18.',
      'You may withdraw consent at any time by contacting us in writing.',
    ],
    contentSw: [
      'KAMWE hatucharisha picha za watoto wadogo bila idhini ya maandishi ya wazi kutoka kwa mzazi au mlezi.',
      'Majina kamili, umri, au maeneo ya watoto wadogo KAMWE hayaonyeshwi pamoja na picha zao.',
      'Fomu ya idhini ya picha lazima ikamilishwe wakati wa usajili kwa kijana yeyote chini ya miaka 18.',
      'Unaweza kuondoa idhini wakati wowote kwa kuwasiliana nasi kwa maandishi.',
    ],
  },
];

export default function Parents() {
  const { t } = useApp();
  const [open, setOpen] = useState<number | null>(0);
  const [reportForm, setReportForm] = useState({ concern: '', name: '', contact: '' });
  const [reportStatus, setReportStatus] = useState<'idle' | 'submitting' | 'done'>('idle');

  const handleReport = (e: React.FormEvent) => {
    e.preventDefault();
    setReportStatus('submitting');
    // [BACKEND] Send confidential concern to safeguarding lead
    setTimeout(() => setReportStatus('done'), 1500);
  };

  return (
    <>
      <section className="bg-[#0D0B1E] py-16 px-4" aria-labelledby="parents-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary-light font-bold text-sm uppercase tracking-widest mb-3">👪 {t('For Parents & Guardians', 'Kwa Wazazi & Walezi')}</p>
          <h1 id="parents-heading" className="font-display font-black text-5xl md:text-7xl uppercase text-white leading-none">
            {t('Safety &', 'Usalama &')}
            <br />
            <span className="text-accent">{t('Safeguarding', 'Ulinzi')}</span>
          </h1>
          <p className="text-white/60 mt-4">
            {t(
              'Your child\'s safety is our highest priority. Here is everything you need to know about how we protect young people in our community.',
              'Usalama wa mtoto wako ni kipaumbele chetu cha juu zaidi. Hapa kuna kila kitu unachohitaji kujua kuhusu jinsi tunavyolinda vijana katika jamii yetu.'
            )}
          </p>
        </div>
      </section>

      {/* Policies accordion */}
      <section className="py-14 px-4" aria-labelledby="policies-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="policies-heading" className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white mb-8">
            {t('Our Policies', 'Sera Zetu')}
          </h2>
          <div className="space-y-3">
            {SECTIONS.map((s, i) => (
              <div key={i} className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-2xl">{s.icon}</span>
                    {t(s.title, s.titleSw)}
                  </span>
                  <svg
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    className={`flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                {open === i && (
                  <ul className="px-5 pb-5 space-y-2">
                    {(t('', '') === '' ? s.content : s.contentSw).map((point, j) => (
                      <li key={j} className="flex gap-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        <span className="text-primary mt-1 flex-shrink-0">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency contact */}
      <section className="py-8 px-4 bg-amber/10 dark:bg-amber/5" aria-labelledby="emergency-heading">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 items-start">
          <span className="text-4xl flex-shrink-0">🚨</span>
          <div>
            <h2 id="emergency-heading" className="font-display font-black text-3xl uppercase text-slate-900 dark:text-white">
              {t('Emergency Contact', 'Mawasiliano ya Dharura')}
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mt-1">
              {t('For urgent safety concerns during an event or camp:', 'Kwa wasiwasi wa haraka wa usalama wakati wa tukio au kambi:')}
            </p>
            <a href={`tel:${SITE.phone}`} className="font-display font-black text-3xl text-primary hover:underline mt-2 block">
              {SITE.phone}
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {t(`Pastor David Mwangi — Youth Pastor, ${SITE.church}`, `Mchungaji David Mwangi — Mchungaji wa Vijana, ${SITE.church}`)}
            </p>
          </div>
        </div>
      </section>

      {/* Report a concern */}
      <section className="py-14 px-4" aria-labelledby="report-heading">
        <div className="max-w-xl mx-auto">
          <h2 id="report-heading" className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white mb-2">
            {t('Report a Concern', 'Ripoti Wasiwasi')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            {t(
              'All reports are treated with strict confidentiality. If you have a concern about a young person or a leader, please tell us.',
              'Ripoti zote zinashughulikiwa kwa usiri mkali. Ukiwa na wasiwasi kuhusu kijana au kiongozi, tafadhali tuambie.'
            )}
          </p>
          {reportStatus === 'done' ? (
            <div className="text-center py-10">
              <p className="text-5xl mb-4">🙏</p>
              <h3 className="font-bold text-2xl text-slate-900 dark:text-white">
                {t('Thank you for reaching out.', 'Asante kwa kuwasiliana.')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                {t('Your concern has been received and will be followed up confidentially within 24 hours.', 'Wasiwasi wako umepokelewa na utafuatiliwa kwa siri ndani ya masaa 24.')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleReport} noValidate className="space-y-4">
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />
              <div>
                <label htmlFor="concern" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {t('Your Concern *', 'Wasiwasi Wako *')}
                </label>
                <textarea
                  id="concern" required rows={5} value={reportForm.concern}
                  onChange={e => setReportForm(f => ({ ...f, concern: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#1A1535] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none resize-none transition"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="rName" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {t('Your Name (optional)', 'Jina Lako (hiari)')}
                  </label>
                  <input id="rName" type="text" value={reportForm.name} onChange={e => setReportForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#1A1535] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition" />
                </div>
                <div>
                  <label htmlFor="rContact" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {t('Contact (optional)', 'Mawasiliano (hiari)')}
                  </label>
                  <input id="rContact" type="text" value={reportForm.contact} onChange={e => setReportForm(f => ({ ...f, contact: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#F9F7FF] dark:bg-[#1A1535] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition" />
                </div>
              </div>
              <button type="submit" disabled={reportStatus === 'submitting'}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-full text-lg transition-colors disabled:opacity-60">
                {reportStatus === 'submitting' ? t('Submitting…', 'Inawasilisha…') : t('Submit Report (Confidential)', 'Wasilisha Ripoti (Siri)')}
              </button>
            </form>
          )}

          {/* Download consent form */}
          <div className="mt-8 p-4 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20">
            <p className="font-bold text-primary mb-1">{t('📄 Consent Form', '📄 Fomu ya Idhini')}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
              {t('Download and complete the photo/media consent form before your child participates in off-site activities.', 'Pakua na kukamilisha fomu ya idhini ya picha/vyombo vya habari kabla ya mtoto wako kushiriki katika shughuli za nje ya eneo.')}
            </p>
            {/* [REPLACE] with actual consent form PDF link */}
            <a href="#" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-5 py-2 rounded-full text-sm hover:bg-primary-dark transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              {t('Download Consent Form (PDF)', 'Pakua Fomu ya Idhini (PDF)')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
