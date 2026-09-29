import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { GALLERY_ALBUMS } from '../data/content';

export default function Gallery() {
  const { t } = useApp();
  const [selectedAlbum, setSelectedAlbum] = useState<typeof GALLERY_ALBUMS[0] | null>(null);
  const [lightboxPhoto, setLightboxPhoto] = useState<{ url: string; alt: string } | null>(null);

  return (
    <>
      <section className="bg-[#0D0B1E] py-16 px-4" aria-labelledby="gallery-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h1 id="gallery-heading" className="font-display font-black text-6xl md:text-8xl uppercase text-white leading-none">
            {t('Gallery', 'Picha & Video')}
          </h1>
          <p className="text-white/60 mt-4">
            {t(
              'Moments from our services, camps, and outreach. All photos published with consent.',
              'Nyakati kutoka ibada zetu, kambi, na huduma. Picha zote zimechapishwa kwa idhini.'
            )}
          </p>
          <p className="text-amber text-sm font-bold mt-2">
            {t(
              '⚠️ Minors: Full names, ages, and locations are never shown alongside photos.',
              '⚠️ Watoto wadogo: Majina kamili, umri, na maeneo hayaonyeshwi pamoja na picha.'
            )}
          </p>
        </div>
      </section>

      <section className="py-14 px-4" aria-labelledby="albums-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="albums-heading" className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white mb-8">
            {selectedAlbum ? (
              <button onClick={() => setSelectedAlbum(null)} className="flex items-center gap-2 hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                {selectedAlbum.title}
              </button>
            ) : t('Photo Albums', 'Albamu za Picha')}
          </h2>

          {!selectedAlbum ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {GALLERY_ALBUMS.map(album => (
                <button
                  key={album.id}
                  onClick={() => setSelectedAlbum(album)}
                  className="group text-left bg-white dark:bg-[#1A1535] rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-lg hover:shadow-primary/5 transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={album.coverImage}
                      alt={album.coverAlt}
                      loading="lazy"
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="font-display font-black text-xl uppercase">{album.title}</p>
                      <p className="text-white/70 text-sm">{album.count} {t('photos', 'picha')} · {album.date}</p>
                    </div>
                  </div>
                </button>
              ))}

              {/* YouTube videos placeholder */}
              <div className="bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-200 dark:border-red-800 p-6 flex flex-col gap-3 items-center text-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#DC2626" aria-hidden="true"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
                <p className="font-bold text-slate-900 dark:text-white">{t('Videos on YouTube', 'Video kwenye YouTube')}</p>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 font-bold text-sm hover:underline">
                  {t('Visit our Channel →', 'Tembelea Chaneli Yetu →')}
                </a>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {selectedAlbum.photos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxPhoto(photo)}
                  className="group overflow-hidden rounded-xl aspect-square"
                >
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20"
            onClick={() => setLightboxPhoto(null)}
            aria-label="Close lightbox"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <img
            src={lightboxPhoto.url}
            alt={lightboxPhoto.alt}
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
            onClick={e => e.stopPropagation()}
          />
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">{lightboxPhoto.alt}</p>
        </div>
      )}
    </>
  );
}
