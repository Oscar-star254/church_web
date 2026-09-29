import { useApp } from '../context/AppContext';

const READING_PLANS = [
  { id: 1, title: '7-Day Identity Plan', desc: 'Daily scripture + reflection on who God says you are.', days: 7, downloadUrl: '#' },
  { id: 2, title: '21 Days of Prayer', desc: 'A structured prayer guide for building a consistent devotional life.', days: 21, downloadUrl: '#' },
  { id: 3, title: 'Relationships & Purity', desc: 'A 14-day plan navigating love, friendship, and integrity.', days: 14, downloadUrl: '#' },
  { id: 4, title: 'Exam Season Faith', desc: 'A 10-day plan to keep your eyes on God during exam pressure.', days: 10, downloadUrl: '#' },
];

const PLAYLISTS = [
  { id: 1, title: 'Ignite Worship Favourites', platform: 'Spotify', url: '#', description: 'Our worship team\'s go-to songs for devotions and praise.' },
  { id: 2, title: 'Youth Praise Anthems', platform: 'YouTube', url: '#', description: 'Energetic worship for your morning, commute, or group time.' },
  { id: 3, title: 'Quiet Time Music', platform: 'Spotify', url: '#', description: 'Soft worship instrumental for personal prayer time.' },
];

const BOOKS = [
  { title: 'The Purpose Driven Life', author: 'Rick Warren', why: 'Foundational reading on finding God\'s purpose for your life.' },
  { title: 'Wild at Heart / Captivating', author: 'John & Stasi Eldredge', why: 'Understanding masculine and feminine identity through a Biblical lens.' },
  { title: 'Redeeming Love', author: 'Francine Rivers', why: 'A powerful fictional portrayal of God\'s unconditional love.' },
  { title: 'Spiritual Disciplines for the Christian Life', author: 'Donald Whitney', why: 'Practical guide to building lasting habits of prayer, Bible reading, and fasting.' },
];

export default function Resources() {
  const { t } = useApp();

  return (
    <>
      <section className="bg-[#0D0B1E] py-16 px-4" aria-labelledby="resources-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary-light font-bold text-sm uppercase tracking-widest mb-3">{t('Grow Deeper', 'Kukua Zaidi')}</p>
          <h1 id="resources-heading" className="font-display font-black text-6xl md:text-8xl uppercase text-white leading-none">
            {t('Resources', 'Rasilimali')}
          </h1>
          <p className="text-white/60 mt-4">
            {t(
              'Reading plans, worship playlists, recommended books, and support contacts to help you grow.',
              'Mipango ya kusoma, orodha za wimbo wa ibada, vitabu vilivyopendekezwa, na mawasiliano ya msaada ili kukusaidia kukua.'
            )}
          </p>
        </div>
      </section>

      {/* Reading plans */}
      <section className="py-14 px-4" aria-labelledby="plans-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="plans-heading" className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white mb-8">
            📖 {t('Reading Plans', 'Mipango ya Kusoma')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {READING_PLANS.map(plan => (
              <div key={plan.id} className="bg-white dark:bg-[#1A1535] rounded-2xl border border-slate-100 dark:border-slate-800 p-5 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-display font-black text-lg mb-3">
                  {plan.days}d
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white">{plan.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 flex-1">{plan.desc}</p>
                <a href={plan.downloadUrl} className="mt-4 w-full text-center block bg-primary/10 hover:bg-primary hover:text-white text-primary font-bold py-2 rounded-full text-sm transition-colors">
                  {t('Download PDF', 'Pakua PDF')}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Playlists */}
      <section className="py-12 px-4 bg-white dark:bg-[#130F2A]" aria-labelledby="playlists-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="playlists-heading" className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white mb-8">
            🎵 {t('Worship Playlists', 'Orodha za Wimbo wa Ibada')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PLAYLISTS.map(pl => (
              <a
                key={pl.id}
                href={pl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F9F7FF] dark:bg-[#0D0B1E] rounded-2xl border border-slate-100 dark:border-slate-800 p-5 hover:border-primary hover:shadow-md transition-all group"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-xs mb-3 ${pl.platform === 'Spotify' ? 'bg-[#1DB954]' : 'bg-red-600'}`}>
                  {pl.platform === 'Spotify' ? '♫' : '▶'}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{pl.title}</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">{pl.platform}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{pl.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="py-12 px-4" aria-labelledby="books-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="books-heading" className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white mb-8">
            📚 {t('Recommended Books', 'Vitabu Vilivyopendekezwa')}
          </h2>
          <div className="space-y-4">
            {BOOKS.map((book, i) => (
              <div key={i} className="bg-white dark:bg-[#1A1535] rounded-2xl border border-slate-100 dark:border-slate-800 p-5 flex gap-4 items-start">
                <div className="w-12 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-display font-black text-xl flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{book.title}</h3>
                  <p className="text-primary text-sm font-semibold">{book.author}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{book.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counselling & Support */}
      <section className="py-12 px-4 bg-primary/5 dark:bg-primary/10" aria-labelledby="support-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="support-heading" className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white mb-6">
            💙 {t('Counselling & Support', 'Ushauri & Msaada')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            {t(
              'If you are struggling with mental health, relationships, trauma, or just need someone to talk to, our pastoral team offers confidential one-on-one support sessions.',
              'Ukipambana na afya ya akili, mahusiano, kiwewe, au unahitaji mtu wa kuzungumza naye, timu yetu ya uchungaji inatoa vikao vya siri vya msaada mmoja kwa mmoja.'
            )}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="mailto:david@gracecommunitynakuru.org" className="bg-white dark:bg-[#1A1535] rounded-2xl border border-slate-100 dark:border-slate-800 p-4 hover:border-primary transition-colors">
              <p className="font-bold text-slate-900 dark:text-white">{t('Pastoral Counselling', 'Ushauri wa Uchungaji')}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t('One-on-one sessions with Pastor David', 'Vikao vya mmoja kwa mmoja na Mchungaji David')}</p>
              <p className="text-primary text-sm font-bold mt-2">david@gracecommunitynakuru.org →</p>
            </a>
            <div className="bg-white dark:bg-[#1A1535] rounded-2xl border border-slate-100 dark:border-slate-800 p-4">
              <p className="font-bold text-slate-900 dark:text-white">{t('External Support', 'Msaada wa Nje')}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t('Kenya Mental Health Line:', 'Mstari wa Afya ya Akili Kenya:')}</p>
              <a href="tel:0800720710" className="text-primary text-sm font-bold mt-1 block">0800 720 710 (free) →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
