import { useState } from 'react';
import { Link } from 'react-router';
import { useApp } from '../context/AppContext';
import { SITE } from '../data/content';

const FAQS = [
  {
    q: 'Will I feel awkward coming alone?',
    qSw: 'Je, nitahisi aibu nikija peke yangu?',
    a: 'Honestly, almost everyone feels a little nervous the first time. But our welcome team will greet you the moment you walk in, introduce you to someone your age, and make sure you are not standing alone. Most people tell us they felt at home within 15 minutes.',
    aSw: 'Kwa kweli, karibu kila mtu anahisi wasiwasi kidogo mara ya kwanza. Lakini timu yetu ya ukarimu itakukaribisha mara utakapoingia, itakuanzishia mtu wa umri wako, na itahakikisha hukimya peke yako. Watu wengi wanatuambia walijisikia nyumbani ndani ya dakika 15.',
  },
  {
    q: 'Do I need to know the Bible?',
    qSw: 'Je, ninahitaji kujua Biblia?',
    a: 'Not at all. We start from where you are. Whether you have never opened a Bible or you have read it cover to cover — there is space for you here. We make the Bible accessible, not intimidating.',
    aSw: 'Hata kidogo. Tunaanza pale ulipo. Iwe hujawahi kufungua Biblia au umesoma kutoka mwanzo hadi mwisho — kuna nafasi yako hapa. Tunafanya Biblia iwe rahisi kufikia, si ya kutisha.',
  },
  {
    q: 'Can I bring a friend?',
    qSw: 'Je, ninaweza kuleta rafiki?',
    a: 'Yes, please! Bringing a friend is one of the best things you can do. It makes it easier for both of you, and honestly, inviting someone is one of the most loving things a person can do.',
    aSw: 'Ndio, tafadhali! Kuleta rafiki ni moja ya mambo bora unayoweza kufanya. Inakuwa rahisi zaidi kwa ninyi wote wawili, na kwa kweli, kumwalika mtu ni moja ya mambo ya upendo zaidi unayoweza kufanya.',
  },
  {
    q: 'What do I wear?',
    qSw: 'Ninavaa nini?',
    a: 'Come as you are — jeans, school uniform, whatever you have on. We are not a fashion show. The only thing we ask is that your outfit is decent and respectful, but that is it.',
    aSw: 'Kuja jinsi ulivyo — suruali ya jini, sare ya shule, chochote ulichonacho. Hatufanyi maonyesho ya mitindo. Tunachoomba peke yake ni kwamba mavazi yako yawe ya heshima, hiyo tu.',
  },
  {
    q: 'How long is the service?',
    qSw: 'Ibada inachukua muda gani?',
    a: 'Our Friday service runs for about 2.5 hours — typically from 5:00 PM to 7:30 PM. There is worship, a message, and time to connect afterward. You can leave at any point and nobody will judge you.',
    aSw: 'Ibada yetu ya Ijumaa huchukua karibu masaa 2.5 — kawaida kuanzia 5:00 PM hadi 7:30 PM. Kuna ibada, ujumbe, na muda wa kuungana baadaye. Unaweza kuondoka wakati wowote na hakuna atakayekuhukumu.',
  },
  {
    q: 'I am not a Christian. Can I still come?',
    qSw: 'Mimi si Mkristo. Je, bado ninaweza kuja?',
    a: 'Absolutely. You are welcome here no matter where you are in your spiritual journey — whether you believe, are exploring, or are just curious. We will not pressure you to do anything. Come and see.',
    aSw: 'Kabisa. Unakaribishwa hapa popote ulipo katika safari yako ya kiroho — iwe unaamini, unachunguza, au una udadisi tu. Hatutakulazimisha kufanya chochote. Kuja uone.',
  },
];

const STEPS = [
  {
    step: '01',
    title: 'Arrive & Be Greeted',
    titleSw: 'Fika na Ukaribushwe',
    desc: 'Come to Grace Community Church by 4:50 PM. Our welcome team will be at the entrance. They will greet you warmly, give you a program, and help you get oriented.',
    descSw: 'Kuja Grace Community Church kabla ya 4:50 PM. Timu yetu ya ukarimu itakuwepo mlangoni. Watakukaribisha kwa upendo, kukupa programu, na kukusaidia kujua mahali.',
  },
  {
    step: '02',
    title: 'Worship Together',
    titleSw: 'Abudu Pamoja',
    desc: 'We open with 30–40 minutes of live worship led by our youth band. Lyrics are on the screen. Sing, stand, close your eyes — however you feel comfortable.',
    descSw: 'Tunaanza na dakika 30–40 za ibada ya moja kwa moja ikiongozwa na bendi yetu ya vijana. Maneno yako kwenye skrini. Imba, simama, funga macho — jinsi unavyohisi vizuri.',
  },
  {
    step: '03',
    title: 'Hear the Message',
    titleSw: 'Sikia Ujumbe',
    desc: 'One of our leaders delivers a relevant, Bible-based message for 30–40 minutes. No jargon, no guilt-trips — just real talk about real life.',
    descSw: 'Mmoja wa viongozi wetu anatolea ujumbe unaohusiana, unaotegemea Biblia kwa dakika 30–40. Hakuna lugha ngumu, hakuna aibu — mazungumzo ya kweli kuhusu maisha halisi.',
  },
  {
    step: '04',
    title: 'Connect & Have Snacks',
    titleSw: 'Ungana na Kula Vitafunio',
    desc: 'After the service, we have 20–30 minutes of snacks and hanging out. This is where friendships form. Our leaders are always available to pray with you or just talk.',
    descSw: 'Baada ya ibada, tuna dakika 20–30 za vitafunio na mazungumzo. Hapa ndipo urafiki unaundwa. Viongozi wetu daima wako tayari kukuombea au kuzungumza nawe tu.',
  },
];

export default function WhatToExpect() {
  const { t } = useApp();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 px-4" aria-labelledby="fte-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/60 font-bold text-sm uppercase tracking-widest mb-3">{t('First Time?', 'Mara ya Kwanza?')}</p>
          <h1 id="fte-heading" className="font-display font-black text-5xl md:text-7xl uppercase text-white leading-none">
            {t('What to Expect', 'Matarajio')}
          </h1>
          <p className="text-white/80 mt-4 text-lg max-w-xl mx-auto">
            {t(
              'We know walking into a new space can feel scary. Here is exactly what happens when you show up at Ignite Youth.',
              'Tunajua kuingia mahali mpya kunaweza kuonekana kuogofya. Hapa ni hasa kinachotokea unapofika Ignite Youth.'
            )}
          </p>
        </div>
      </section>

      {/* Step-by-step */}
      <section className="py-16 px-4" aria-labelledby="steps-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="steps-heading" className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white mb-10">
            {t('Step by Step', 'Hatua kwa Hatua')}
          </h2>
          <div className="space-y-6">
            {STEPS.map(s => (
              <div key={s.step} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <span className="font-display font-black text-white text-xl">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white">{t(s.title, s.titleSw)}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{t(s.desc, s.descSw)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="py-12 px-4 bg-white dark:bg-[#130F2A]" aria-labelledby="facts-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="facts-heading" className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white mb-8">
            {t('Quick Facts', 'Ukweli wa Haraka')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '👕', title: t('Dress Code', 'Mavazi'), value: t('Come as you are', 'Kuja jinsi ulivyo') },
              { icon: '⏱', title: t('Duration', 'Muda'), value: t('~2.5 hours', '~Masaa 2.5') },
              { icon: '🎂', title: t('Age Range', 'Umri'), value: t('13–25 years', 'Miaka 13–25') },
              { icon: '💰', title: t('Entry Cost', 'Ada ya Kuingia'), value: t('Free!', 'Bure!') },
            ].map(f => (
              <div key={f.title} className="bg-[#F9F7FF] dark:bg-[#0D0B1E] rounded-2xl p-4 text-center border border-slate-100 dark:border-slate-800">
                <div className="text-4xl mb-2">{f.icon}</div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{f.title}</p>
                <p className="font-bold text-slate-900 dark:text-white mt-1">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome video placeholder */}
      <section className="py-12 px-4" aria-labelledby="video-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="video-heading" className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white mb-6 text-center">
            {t('See for Yourself', 'Jionee Mwenyewe')}
          </h2>
          {/* [REPLACE] with an actual YouTube embed */}
          <div className="bg-slate-200 dark:bg-slate-800 rounded-2xl aspect-video flex flex-col items-center justify-center gap-3 text-slate-400">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
            <p className="font-bold text-center">{t('[REPLACE: Embed YouTube welcome video here]', '[BADILISHA: Weka video ya YouTube ya karibu hapa]')}</p>
            <p className="text-sm text-center px-4">{t('Record a 2–3 min tour of your space and a personal welcome from your pastor.', 'Rekodi ziara ya dakika 2–3 ya nafasi yako na ujumbe wa kibinafsi wa mchungaji wako.')}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-white dark:bg-[#130F2A]" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white mb-8">
            {t('FAQ', 'Maswali Yanayoulizwa Mara Kwa Mara')}
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span>{t(faq.q, faq.qSw)}</span>
                  <svg
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    className={`flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}
                    aria-hidden="true"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t(faq.a, faq.aSw)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center" aria-labelledby="fte-cta-heading">
        <h2 id="fte-cta-heading" className="font-display font-black text-5xl uppercase text-slate-900 dark:text-white">
          {t('See you Friday!', 'Tuonane Ijumaa!')}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-3 mb-6">{SITE.meetingDay} · {SITE.meetingTime} · {SITE.address}</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/events" className="bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary-dark transition-colors">
            {t('View Events', 'Ona Matukio')}
          </Link>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white font-bold px-8 py-3 rounded-full"
          >
            {t('WhatsApp Us', 'Tutumie WhatsApp')}
          </a>
        </div>
      </section>
    </>
  );
}
