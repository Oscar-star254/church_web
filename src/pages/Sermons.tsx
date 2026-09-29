import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SERMONS, DEVOTIONAL_TOPICS } from '../data/content';

export default function Sermons() {
  const { t, lang } = useApp();
  const [topic, setTopic] = useState('All');
  const [search, setSearch] = useState('');
  const [dailyVerse] = useState({
    ref: 'Jeremiah 29:11',
    text: '"For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future."',
    textSw: '"Kwa maana najua mawazo ninayowafikiria, asema BWANA, mawazo ya amani wala si ya mabaya, kuwapa ninyi mwisho na tumaini."',
  });

  const filtered = SERMONS.filter(s => {
    const matchTopic = topic === 'All' || s.topic === topic;
    const matchSearch = search.trim() === '' || (s.title + s.speaker + s.topic).toLowerCase().includes(search.toLowerCase());
    return matchTopic && matchSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D0B1E] py-16 px-4" aria-labelledby="sermons-heading">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary-light font-bold text-sm uppercase tracking-widest mb-3">{t('Grow in Faith', 'Kukua katika Imani')}</p>
          <h1 id="sermons-heading" className="font-display font-black text-6xl md:text-7xl uppercase text-white leading-none">
            {t('Sermons &', 'Mahubiri &')}
            <br />
            <span className="text-accent">{t('Devotionals', 'Maombi ya Kila Siku')}</span>
          </h1>
        </div>
      </section>

      {/* Daily Verse Widget */}
      <section className="bg-primary/10 dark:bg-primary/5 py-8 px-4 border-b border-primary/20" aria-labelledby="verse-heading">
        <div className="max-w-3xl mx-auto flex gap-4 items-start">
          <span className="text-3xl flex-shrink-0">✨</span>
          <div>
            <p className="font-display font-bold text-xs uppercase tracking-widest text-primary mb-1">
              {t('Daily Verse', 'Aya ya Leo')}
            </p>
            <blockquote className="font-bold text-slate-900 dark:text-white text-lg leading-snug" id="verse-heading">
              {lang === 'sw' ? dailyVerse.textSw : dailyVerse.text}
            </blockquote>
            <cite className="text-primary font-bold text-sm mt-1 block not-italic">{dailyVerse.ref}</cite>
          </div>
        </div>
      </section>

      <section className="py-12 px-4" aria-labelledby="sermons-list-heading">
        <div className="max-w-6xl mx-auto">
          {/* Search + topic filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <input
              type="search"
              placeholder={t('Search sermons…', 'Tafuta mahubiri…')}
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1A1535] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition"
            />
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {DEVOTIONAL_TOPICS.map(tp => (
              <button
                key={tp}
                onClick={() => setTopic(tp)}
                className={`px-4 py-1.5 rounded-full text-sm font-bold border transition-colors ${
                  topic === tp
                    ? 'bg-primary text-white border-primary'
                    : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary'
                }`}
              >
                {tp}
              </button>
            ))}
          </div>

          <h2 id="sermons-list-heading" className="sr-only">{t('Sermon library', 'Maktaba ya Mahubiri')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map(sermon => (
              <article key={sermon.id} className="bg-white dark:bg-[#1A1535] rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-lg hover:shadow-primary/5 transition-shadow">
                <div className="relative">
                  <img
                    src={sermon.image}
                    alt={sermon.imageAlt}
                    loading="lazy"
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {sermon.duration}
                  </span>
                  {/* Play button overlay */}
                  <a
                    href={`https://youtube.com/watch?v=${sermon.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch ${sermon.title} on YouTube`}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity"
                  >
                    <span className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#6D28D9" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    </span>
                  </a>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{lang === 'sw' ? sermon.topicSw : sermon.topic}</span>
                    <span className="text-xs text-slate-400">{new Date(sermon.date).toLocaleDateString('en-KE', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white leading-snug">
                    {lang === 'sw' ? sermon.titleSw : sermon.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">by {sermon.speaker}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {lang === 'sw' ? '' : sermon.description}
                  </p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    <a
                      href={`https://youtube.com/watch?v=${sermon.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary/10 hover:bg-primary hover:text-white text-primary font-bold px-4 py-2 rounded-full text-sm transition-colors"
                    >
                      ▶ {t('Watch', 'Tazama')}
                    </a>
                    <a
                      href={sermon.audioUrl}
                      className="flex items-center gap-2 border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary text-slate-600 dark:text-slate-300 font-bold px-4 py-2 rounded-full text-sm transition-colors"
                    >
                      🎵 {t('Audio', 'Sauti')}
                    </a>
                    <a
                      href={sermon.notesUrl}
                      className="flex items-center gap-2 border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary text-slate-600 dark:text-slate-300 font-bold px-4 py-2 rounded-full text-sm transition-colors"
                    >
                      📄 {t('Notes', 'Maelezo')}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-slate-400 py-12">
              {t('No sermons found.', 'Hakuna mahubiri yaliyopatikana.')}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
