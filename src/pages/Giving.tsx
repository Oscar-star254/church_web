import { useApp } from '../context/AppContext';
import { CAMPAIGNS, SITE } from '../data/content';

function ProgressBar({ goal, raised, currency }: { goal: number; raised: number; currency: string }) {
  const pct = Math.min(100, Math.round((raised / goal) * 100));
  return (
    <div>
      <div className="flex justify-between text-sm font-bold mb-1.5">
        <span className="text-slate-900 dark:text-white">{currency} {raised.toLocaleString()} {raised >= goal ? '🎉' : ''}</span>
        <span className="text-slate-400">{t('Goal', 'Lengo')}: {currency} {goal.toLocaleString()}</span>
      </div>
      <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ${raised >= goal ? 'bg-emerald' : 'bg-primary'}`}
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${pct}% funded`}
        />
      </div>
      <p className="text-xs text-slate-400 mt-1 text-right">{pct}% {raised >= goal ? t('funded! ✅', 'imefikiwa! ✅') : t('funded', 'imefundiwa')}</p>
    </div>
  );
}

// standalone t function for the ProgressBar (it's outside the component)
function t(en: string, _sw: string) { return en; }

export default function Giving() {
  const { t } = useApp();

  return (
    <>
      <section className="bg-[#0D0B1E] py-16 px-4" aria-labelledby="giving-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary-light font-bold text-sm uppercase tracking-widest mb-3">{t('Support the Ministry', 'Saidia Huduma')}</p>
          <h1 id="giving-heading" className="font-display font-black text-6xl md:text-8xl uppercase text-white leading-none">
            {t('Give', 'Sadaka')}
          </h1>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            {t(
              'Your generosity funds camps, outreach, equipment, and bursaries so every young person in Nakuru has access to community and the Gospel.',
              'Ukarimu wako unafadhili kambi, huduma, vifaa, na bursari ili kila kijana Nakuru awe na ufikiaji wa jamii na Injili.'
            )}
          </p>
        </div>
      </section>

      {/* Campaigns */}
      <section className="py-14 px-4" aria-labelledby="campaigns-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="campaigns-heading" className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white mb-8">
            {t('Active Campaigns', 'Kampeni Zinazoendelea')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAMPAIGNS.map(c => (
              <div key={c.id} className="bg-white dark:bg-[#1A1535] rounded-2xl border border-slate-100 dark:border-slate-800 p-5">
                <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">{c.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{c.description}</p>
                <ProgressBar goal={c.goal} raised={c.raised} currency={c.currency} />
                <p className="text-xs text-slate-400 mt-2">{t('Deadline:', 'Tarehe ya Mwisho:')} {new Date(c.deadline).toLocaleDateString('en-KE', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                <div className="mt-4 bg-primary/5 dark:bg-primary/10 rounded-xl p-3 text-sm">
                  <p className="font-bold text-primary text-xs uppercase tracking-widest mb-1">M-Pesa</p>
                  <p className="text-slate-700 dark:text-slate-300">
                    {t('Paybill:', 'Paybill:')} <strong>{SITE.mpesaPaybill}</strong> · {t('Account:', 'Akaunti:')} <strong>{c.mpesaRef}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment methods */}
      <section className="py-12 px-4 bg-white dark:bg-[#130F2A]" aria-labelledby="payment-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="payment-heading" className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white mb-8">
            {t('How to Give', 'Jinsi ya Kutoa')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: '📱',
                title: 'M-Pesa',
                steps: [
                  t(`Go to M-Pesa → Lipa na M-Pesa → Pay Bill`, 'Nenda M-Pesa → Lipa na M-Pesa → Pay Bill'),
                  t(`Business Number: ${SITE.mpesaPaybill}`, `Nambari ya Biashara: ${SITE.mpesaPaybill}`),
                  t(`Account: ${SITE.mpesaAccount} or campaign ref`, `Akaunti: ${SITE.mpesaAccount} au kumbukumbu ya kampeni`),
                  t('Enter amount and confirm with PIN', 'Ingiza kiasi na thibitisha na PIN'),
                ],
              },
              {
                icon: '🏦',
                title: t('Bank Transfer', 'Uhamisho wa Benki'),
                steps: [
                  `${SITE.bankName}`,
                  t(`Account Name: ${SITE.name}`, `Jina la Akaunti: ${SITE.name}`),
                  `${t('Account No.', 'Namba ya Akaunti')}: ${SITE.bankAccount}`,
                  `${t('Branch:', 'Tawi:')} ${SITE.bankBranch}`,
                ],
              },
              {
                icon: '💳',
                title: t('Card Payment', 'Malipo ya Kadi'),
                steps: [
                  t('[REPLACE] Connect a Stripe or Flutterwave payment gateway', '[BADILISHA] Unganisha lango la malipo la Stripe au Flutterwave'),
                  t('Card payments are not yet live — please use M-Pesa or bank transfer for now.', 'Malipo ya kadi bado hayajaanzishwa — tafadhali tumia M-Pesa au uhamisho wa benki kwa sasa.'),
                ],
              },
            ].map(method => (
              <div key={method.title} className="bg-[#F9F7FF] dark:bg-[#0D0B1E] rounded-2xl border border-slate-100 dark:border-slate-800 p-5">
                <div className="text-3xl mb-3">{method.icon}</div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">{method.title}</h3>
                <ol className="space-y-1.5">
                  {method.steps.map((step, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="font-bold text-primary flex-shrink-0">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General giving CTA */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white">
            {t('Questions About Giving?', 'Maswali Kuhusu Kutoa?')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 mb-6">
            {t(
              `Reach us at ${SITE.email} or on WhatsApp. We are always happy to help you give in the way that works best for you.`,
              `Wasiliana nasi kwa ${SITE.email} au kwenye WhatsApp. Daima tuko tayari kukusaidia kutoa kwa njia inayofanya kazi vizuri kwako.`
            )}
          </p>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hello, I have a question about giving to Ignite Youth.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white font-bold px-8 py-3 rounded-full inline-block"
          >
            {t('WhatsApp Us', 'Tutumie WhatsApp')}
          </a>
        </div>
      </section>
    </>
  );
}
