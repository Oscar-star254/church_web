import { useApp } from '../context/AppContext';
import { BLOG_POSTS, SITE } from '../data/content';

export default function Blog() {
  const { t, lang } = useApp();

  const share = (post: typeof BLOG_POSTS[0]) => {
    const text = `Check out this post from Ignite Youth: "${post.title}" — ${window.location.origin}/blog`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      <section className="bg-[#0D0B1E] py-16 px-4" aria-labelledby="blog-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary-light font-bold text-sm uppercase tracking-widest mb-3">{t('Community Voices', 'Sauti za Jamii')}</p>
          <h1 id="blog-heading" className="font-display font-black text-6xl md:text-8xl uppercase text-white leading-none">
            {t('Blog & News', 'Blogu & Habari')}
          </h1>
          <p className="text-white/60 mt-4">
            {t(
              'Stories, reflections, event recaps, and updates from Ignite Youth.',
              'Hadithi, tafakari, muhtasari wa matukio, na masasisho kutoka Ignite Youth.'
            )}
          </p>
        </div>
      </section>

      <section className="py-14 px-4" aria-labelledby="blog-posts-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="blog-posts-heading" className="sr-only">{t('Blog posts', 'Machapisho ya blogu')}</h2>
          {/* Featured post */}
          <article className="mb-10 bg-white dark:bg-[#1A1535] rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 hover:shadow-lg transition-shadow">
            <img
              src={BLOG_POSTS[0].image}
              alt={BLOG_POSTS[0].imageAlt}
              loading="eager"
              className="w-full h-64 md:h-full object-cover"
            />
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">{t('Featured', 'Iliyoangaziwa')}</span>
              <h3 className="font-display font-black text-3xl md:text-4xl uppercase text-slate-900 dark:text-white mt-2 leading-none">
                {lang === 'sw' ? BLOG_POSTS[0].titleSw : BLOG_POSTS[0].title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">{BLOG_POSTS[0].excerpt}</p>
              <p className="text-sm text-slate-400 mt-3">{BLOG_POSTS[0].author} · {BLOG_POSTS[0].readTime}</p>
              <div className="flex gap-3 mt-5">
                <button className="flex-1 bg-primary text-white font-bold py-2.5 rounded-full text-sm hover:bg-primary-dark transition-colors">
                  {t('Read More', 'Soma Zaidi')}
                </button>
                <button
                  onClick={() => share(BLOG_POSTS[0])}
                  aria-label="Share on WhatsApp"
                  className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </button>
              </div>
            </div>
          </article>

          {/* Other posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {BLOG_POSTS.slice(1).map(post => (
              <article key={post.id} className="bg-white dark:bg-[#1A1535] rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow group">
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
                  <div className="flex items-center justify-between mt-3">
                    <p className="text-xs text-slate-400">{post.author} · {post.readTime}</p>
                    <button
                      onClick={() => share(post)}
                      aria-label="Share on WhatsApp"
                      className="w-8 h-8 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors text-xs font-bold"
                    >
                      Share
                    </button>
                  </div>
                </div>
              </article>
            ))}

            {/* Submission CTA */}
            <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl border border-primary/20 p-6 flex flex-col justify-center items-center text-center gap-3">
              <span className="text-4xl">✍️</span>
              <h3 className="font-bold text-slate-900 dark:text-white">{t('Write for Ignite', 'Andika kwa Ignite')}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t(
                  'Have a story, reflection, or testimony to share? Submit a post for review.',
                  'Una hadithi, tafakari, au ushuhuda wa kushiriki? Tuma chapisho kwa ukaguzi.'
                )}
              </p>
              <a
                href={`mailto:${SITE.email}?subject=Blog Post Submission`}
                className="bg-primary text-white font-bold px-5 py-2 rounded-full text-sm hover:bg-primary-dark transition-colors"
              >
                {t('Submit a Post', 'Tuma Chapisho')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
