import { Link } from 'react-router';
import { useApp } from '../context/AppContext';
import Countdown from '../components/Countdown';
import { SITE, NEXT_EVENT, UPCOMING_EVENTS, TESTIMONIES, BLOG_POSTS } from '../data/content';

function PhotoSlot({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`bg-slate-200 dark:bg-slate-800 rounded-2xl flex flex-col items-center justify-center gap-2 text-slate-400 dark:text-slate-600 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <span className="text-xs font-semibold text-center px-2">[PHOTO: {label}]</span>
    </div>
  );
}

const EVENT_TYPE_COLORS: Record<string, string> = {
  weekly: 'bg-primary/10 text-primary',
  camp: 'bg-amber/20 text-amber-700 dark:text-amber-400',
  outreach: 'bg-emerald/10 text-emerald',
  social: 'bg-sky/10 text-sky',
  worship: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  training: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
};

export default function Home() {
  const { t, lang } = useApp();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-[#0D0B1E]" aria-labelledby="hero-heading">
        {/* Decorative geometry */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="geo-circle w-[500px] h-[500px] bg-primary/20 -top-40 -right-32 blur-3xl"/>
          <div className="geo-circle w-[300px] h-[300px] bg-accent/15 bottom-20 -left-20 blur-2xl"/>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"/>
          {/* Grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-accent/20 text-accent font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              ⚡ {SITE.church} · {SITE.location}
            </span>
            <h1 id="hero-heading" className="font-display font-black text-white text-6xl sm:text-7xl md:text-8xl lg:text-[96px] leading-[0.9] uppercase tracking-tight">
              {lang === 'sw' ? SITE.taglineSwahili.split('.')[0] + '.' : SITE.tagline.split('.')[0] + '.'}
              <br />
              <span className="text-accent">
                {lang === 'sw' ? SITE.taglineSwahili.split('.')[1]?.trim() : SITE.tagline.split('.')[1]?.trim()}.
              </span>
            </h1>
            <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              {t(SITE.shortWelcome, SITE.shortWelcomeSwahili)}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link
                to="/events"
                className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl shadow-primary/40"
              >
                ⚡ {t('Join Us', 'Jiunge Nasi')}
              </Link>
              <Link
                to="/what-to-expect"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-lg border border-white/20 transition-all"
              >
                {t('Plan Your First Visit', 'Panga Ziara Yako')}
              </Link>
            </div>
            {/* Quick stats */}
            <div className="mt-10 flex gap-8 justify-center lg:justify-start">
              {[
                { value: '300+', label: t('Young People', 'Vijana') },
                { value: '7', label: t('Small Groups', 'Vikundi') },
                { value: '10+', label: t('Yrs Ministry', 'Miaka ya Huduma') },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <p className="font-display font-black text-3xl text-white">{s.value}</p>
                  <p className="text-white/50 text-xs font-semibold mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image slot */}
          <div className="flex-shrink-0 w-full max-w-sm lg:max-w-none lg:w-[380px]">
            <PhotoSlot label="Youth Group — Main Photo (e.g. Friday service)" className="h-[420px] border-2 border-white/10" />
            <p className="text-white/30 text-xs text-center mt-2">
              {t('Obtain photo consent before uploading images of minors.', 'Pata idhini ya picha kabla ya kupakia picha za watoto wachanga.')}
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </div>
      </section>

      {/* ── COUNTDOWN BANNER ─────────────────────────────────────── */}
      <Countdown
        targetDate={NEXT_EVENT.nextDate}
        eventTitle={NEXT_EVENT.title}
        eventTitleSw={NEXT_EVENT.titleSw}
        lang={lang}
      />

      {/* ── QUICK INFO ───────────────────────────────────────────── */}
      <section className="py-10 px-4 bg-white dark:bg-[#130F2A]" aria-labelledby="info-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="info-heading" className="sr-only">{t('Meeting Information', 'Taarifa za Mkutano')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                ),
                label: t('When', 'Lini'),
                value: SITE.meetingDay,
                sub: SITE.meetingTime,
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                ),
                label: t('Where', 'Wapi'),
                value: SITE.church,
                sub: (
                  <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">
                    {t('View on map →', 'Angalia ramani →')}
                  </a>
                ),
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                ),
                label: t('Who', 'Nani'),
                value: t('Ages 13–25', 'Umri 13–25'),
                sub: t('Everyone welcome!', 'Kila mtu karibu!'),
              },
            ].map(item => (
              <div key={item.label} className="flex gap-4 items-start bg-[#F9F7FF] dark:bg-[#0D0B1E] rounded-2xl p-4 border border-slate-100 dark:border-slate-800">
                <span className="text-primary flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <p className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">{item.label}</p>
                  <p className="font-bold text-base text-slate-900 dark:text-white mt-0.5">{item.value}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ───────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-4" aria-labelledby="events-heading">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-primary font-bold text-sm uppercase tracking-widest">{t('What\'s On', 'Kinachoendelea')}</p>
              <h2 id="events-heading" className="font-display font-black text-4xl md:text-5xl uppercase text-slate-900 dark:text-white">
                {t('Upcoming Events', 'Matukio Yanayokuja')}
              </h2>
            </div>
            <Link to="/events" className="text-primary font-bold text-sm flex items-center gap-1 flex-shrink-0 hover:underline">
              {t('All Events →', 'Matukio Yote →')}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {UPCOMING_EVENTS.slice(0, 3).map(ev => (
              <article key={ev.id} className="bg-white dark:bg-[#1A1535] rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-lg hover:shadow-primary/5 transition-shadow group">
                <div className="relative">
                  <img
                    src={ev.image}
                    alt={ev.imageAlt}
                    loading="lazy"
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full ${EVENT_TYPE_COLORS[ev.type] ?? 'bg-slate-100'}`}>
                    {ev.typeLabel}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight">
                    {lang === 'sw' ? ev.titleSw : ev.title}
                  </h3>
                  <div className="mt-2 space-y-1 text-sm text-slate-500 dark:text-slate-400">
                    <p className="flex gap-1.5 items-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      {new Date(ev.date).toLocaleDateString('en-KE', { weekday: 'short', day: 'numeric', month: 'short' })} · {ev.time}
                    </p>
                    <p className="flex gap-1.5 items-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {ev.location}
                    </p>
                    <p className="font-semibold text-primary">{ev.cost}</p>
                  </div>
                  <Link
                    to={`/events?id=${ev.id}`}
                    className="mt-4 w-full text-center block bg-primary/10 hover:bg-primary hover:text-white text-primary font-bold px-4 py-2 rounded-full text-sm transition-colors"
                  >
                    {t('Learn More & RSVP', 'Jifunze Zaidi & Jiandikishe')}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANNOUNCEMENT ─────────────────────────────────────────── */}
      <section className="py-8 px-4 bg-amber/10 dark:bg-amber/5" aria-label="Latest Announcement">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-4 items-start">
          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-amber flex items-center justify-center text-white font-black text-xl">📢</span>
          <div>
            <p className="font-display font-bold uppercase tracking-widest text-xs text-amber-700 dark:text-amber-400">
              {t('Latest Announcement', 'Tangazo la Hivi Karibuni')}
            </p>
            <p className="font-bold text-slate-900 dark:text-white text-lg mt-0.5">
              {t('Youth Camp 2025 registrations are OPEN!', 'Usajili wa Kambi ya Vijana 2025 umefunguliwa!')}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              {t(
                'Spots fill fast — secure yours now. Bursaries available for those who need financial support. No young person should miss out.',
                'Nafasi zinaisha haraka — hifadhi yako sasa. Bursari zinapatikana kwa wanaohitaji msaada wa kifedha. Hakuna kijana anayepaswa kukosa.'
              )}
            </p>
            <Link to="/rsvp" className="mt-2 inline-flex text-primary font-bold text-sm hover:underline">
              {t('Register now →', 'Jiandikishe sasa →')}
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED TESTIMONY ───────────────────────────────────── */}
      <section className="py-16 md:py-20 px-4 bg-primary" aria-labelledby="testimony-heading">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/60 font-bold text-sm uppercase tracking-widest mb-4">{t('Stories of Change', 'Hadithi za Mabadiliko')}</p>
          <svg width="40" height="30" viewBox="0 0 40 30" fill="white" className="mx-auto mb-6 opacity-30" aria-hidden="true">
            <path d="M0 30V18C0 8.4 4.8 2.4 14.4 0L16.8 3.6C12 5.2 9.2 8.4 8.4 13.2H16.8V30H0zm22.8 0V18C22.8 8.4 27.6 2.4 37.2 0L39.6 3.6C34.8 5.2 32 8.4 31.2 13.2H39.6V30H22.8z"/>
          </svg>
          <blockquote>
            <p className="text-white font-display font-black text-3xl md:text-5xl uppercase leading-tight" id="testimony-heading">
              "{TESTIMONIES[0].shortQuote}"
            </p>
            <footer className="mt-6 text-white/70 font-bold">
              — {TESTIMONIES[0].name}, {t('Age', 'Umri')} {TESTIMONIES[0].ageGroup}
              <span className="ml-2 bg-white/20 text-xs px-2 py-0.5 rounded-full">{TESTIMONIES[0].topic}</span>
            </footer>
          </blockquote>
          <Link to="/testimonies" className="mt-8 inline-flex bg-white text-primary font-bold px-6 py-3 rounded-full hover:bg-amber transition-colors">
            {t('Read More Stories →', 'Soma Hadithi Zaidi →')}
          </Link>
        </div>
      </section>

      {/* ── LATEST FROM BLOG ─────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-4" aria-labelledby="blog-heading">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-primary font-bold text-sm uppercase tracking-widest">{t('From the Community', 'Kutoka kwa Jamii')}</p>
              <h2 id="blog-heading" className="font-display font-black text-4xl md:text-5xl uppercase text-slate-900 dark:text-white">
                {t('Latest Posts', 'Machapisho ya Hivi Karibuni')}
              </h2>
            </div>
            <Link to="/blog" className="text-primary font-bold text-sm flex items-center gap-1 flex-shrink-0 hover:underline">
              {t('All Posts →', 'Machapisho Yote →')}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {BLOG_POSTS.map(post => (
              <article key={post.id} className="bg-white dark:bg-[#1A1535] rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 group hover:shadow-lg transition-shadow">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  loading="lazy"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">{lang === 'sw' ? post.categorySw : post.category}</span>
                  <h3 className="font-bold text-slate-900 dark:text-white mt-1 leading-snug">{lang === 'sw' ? post.titleSw : post.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 line-clamp-2">{post.excerpt}</p>
                  <p className="text-xs text-slate-400 mt-2">{post.author} · {post.readTime}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL FEED PLACEHOLDER ──────────────────────────────── */}
      <section className="py-12 px-4 bg-white dark:bg-[#130F2A]" aria-labelledby="social-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-primary font-bold text-sm uppercase tracking-widest">{t('Follow Along', 'Tufuatilie')}</p>
            <h2 id="social-heading" className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white">
              {t('Stay Connected', 'Baki Umeunganishwa')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { platform: 'Instagram', handle: `@${SITE.instagram}`, color: 'from-pink-500 to-orange-400', href: `https://instagram.com/${SITE.instagram}` },
              { platform: 'TikTok', handle: `@${SITE.tiktok}`, color: 'from-slate-900 to-slate-700', href: `https://tiktok.com/@${SITE.tiktok}` },
              { platform: 'YouTube', handle: SITE.youtube, color: 'from-red-600 to-red-500', href: `https://youtube.com/${SITE.youtube}` },
            ].map(s => (
              <a
                key={s.platform}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-br ${s.color} rounded-2xl p-6 text-white flex flex-col items-center gap-3 hover:scale-105 transition-transform`}
              >
                <p className="font-display font-black text-2xl uppercase">{s.platform}</p>
                <p className="text-white/80 text-sm font-semibold">{s.handle}</p>
                <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full">
                  {t('Follow & Subscribe', 'Fuata & Jiandikishe')}
                </span>
              </a>
            ))}
          </div>
          {/* [REPLACE] Embed actual Instagram/TikTok feed widget here */}
          <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-8 text-center text-slate-400">
            <p className="font-bold mb-1">{t('[EMBED: Instagram feed widget]', '[WEKA: Kidijitali cha Instagram]')}</p>
            <p className="text-sm">{t('Replace this block with an EmbedSocial, Elfsight, or Curator.io widget.', 'Badilisha kisanduku hiki na kidijitali cha EmbedSocial, Elfsight, au Curator.io.')}</p>
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-4" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="cta-heading" className="font-display font-black text-5xl md:text-7xl uppercase text-slate-900 dark:text-white leading-none">
            {t('Your story', 'Hadithi yako')}
            <br/>
            <span className="text-primary">{t('starts Friday.', 'inaanza Ijumaa.')}</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto">
            {t(
              'No dress code. No Bible knowledge required. Just come as you are — we have been waiting for you.',
              'Hakuna mavazi maalum. Hakuna maarifa ya Biblia yanayohitajika. Kuja jinsi ulivyo — tumekusubiri.'
            )}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/what-to-expect"
              className="bg-primary hover:bg-primary-dark text-white font-bold px-10 py-4 rounded-full text-lg shadow-xl shadow-primary/30 transition-all hover:scale-105"
            >
              {t('Plan Your Visit', 'Panga Ziara Yako')}
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-bold px-10 py-4 rounded-full text-lg transition-all hover:scale-105"
            >
              {t('Ask Us Anything', 'Tuulize Chochote')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
