import { useApp } from '../context/AppContext';
import { LEADERS, SITE } from '../data/content';

function PhotoSlot({ label, size = 'md' }: { label: string; size?: 'sm' | 'md' }) {
  const s = size === 'sm' ? 'w-24 h-24' : 'w-full aspect-[4/5]';
  return (
    <div className={`${s} bg-slate-200 dark:bg-slate-800 rounded-2xl flex flex-col items-center justify-center gap-2 text-slate-400 dark:text-slate-600`}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
      <span className="text-xs font-semibold text-center px-2">[PHOTO: {label}]</span>
    </div>
  );
}

export default function Leaders() {
  const { t } = useApp();

  return (
    <>
      <section className="bg-[#0D0B1E] py-16 px-4" aria-labelledby="leaders-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary-light font-bold text-sm uppercase tracking-widest mb-3">{t('The Team', 'Timu')}</p>
          <h1 id="leaders-heading" className="font-display font-black text-6xl md:text-8xl uppercase text-white leading-none">
            {t('Our Leaders', 'Viongozi Wetu')}
          </h1>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            {t(
              'Real people, real stories, real faith. Our leaders are not perfect — but they are committed to walking with you.',
              'Watu wa kweli, hadithi za kweli, imani ya kweli. Viongozi wetu si wakamilifu — lakini wamejitolea kukutembea nawe.'
            )}
          </p>
        </div>
      </section>

      <section className="py-16 px-4" aria-labelledby="leaders-grid-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="leaders-grid-heading" className="sr-only">{t('Leadership team members', 'Wanachama wa timu ya uongozi')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {LEADERS.map(leader => (
              <article key={leader.id} className="bg-white dark:bg-[#1A1535] rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-lg hover:shadow-primary/5 transition-shadow">
                <PhotoSlot label={`${leader.name} — ${leader.role}`} />
                <div className="p-5">
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white">{leader.name}</h3>
                  <p className="text-primary font-bold text-sm">{t(leader.role, leader.roleSw)}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 leading-relaxed">{leader.bio}</p>
                  <div className="mt-4 flex gap-2">
                    <a
                      href={`tel:${leader.phone}`}
                      className="flex-1 text-center border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary text-slate-600 dark:text-slate-300 font-bold px-3 py-2 rounded-full text-sm transition-colors"
                    >
                      📞 {t('Call', 'Piga Simu')}
                    </a>
                    <a
                      href={`https://wa.me/${leader.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Hello! I got your contact from the Ignite Youth website.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-[#25D366] text-white font-bold px-3 py-2 rounded-full text-sm"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Parents section */}
      <section className="py-12 px-4 bg-amber/10 dark:bg-amber/5" aria-labelledby="parents-contact-heading">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-6 items-start">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber flex items-center justify-center text-2xl">👪</div>
          <div>
            <h2 id="parents-contact-heading" className="font-display font-black text-3xl uppercase text-slate-900 dark:text-white">
              {t('For Parents', 'Kwa Wazazi')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              {t(
                `We take safeguarding seriously. All our leaders are vetted, trained, and committed to the wellbeing of every young person in our community. If you have a concern — about your child, another young person, or a leader — please contact Pastor David directly at ${SITE.phone} or ${SITE.email}. Your concern will be treated confidentially and seriously.`,
                `Tunachukulia ulinzi wa watoto kwa uzito. Viongozi wetu wote wamechunguzwa, wamefunzwa, na wamejitolea kwa ustawi wa kila kijana katika jumuiya yetu. Ukiwa na wasiwasi — kuhusu mtoto wako, kijana mwingine, au kiongozi — tafadhali wasiliana na Mchungaji David moja kwa moja kwa ${SITE.phone} au ${SITE.email}. Wasiwasi wako utashughulikiwa kwa siri na uzito.`
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
