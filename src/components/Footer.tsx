import { Link } from 'react-router';
import { useApp } from '../context/AppContext';
import { SITE } from '../data/content';

export default function Footer() {
  const { t } = useApp();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0B1E] text-white mt-auto">
      {/* Top band */}
      <div className="bg-primary px-4 py-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-display font-black text-3xl md:text-4xl uppercase tracking-wide">
            {t('Ready to get involved?', 'Uko tayari kushiriki?')}
          </p>
          <p className="text-white/80 mt-1 mb-4">
            {t("Don't wait. Your seat is already reserved.", 'Usikawili. Kiti chako kinakungoja.')}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/events" className="bg-white text-primary font-bold px-6 py-2.5 rounded-full hover:bg-amber transition-colors">
              {t('See Events', 'Ona Matukio')}
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-bold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </span>
              <span className="font-display font-black text-lg">IGNITE YOUTH</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t(
                `Part of ${SITE.church}. ${SITE.location}.`,
                `Sehemu ya ${SITE.church}. ${SITE.location}.`
              )}
            </p>
            <div className="flex gap-3 mt-4">
              {[
                { href: `https://instagram.com/${SITE.instagram}`, label: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                { href: `https://tiktok.com/@${SITE.tiktok}`, label: 'TikTok', icon: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.87a8.2 8.2 0 004.79 1.53V7c-.01 0-1.83-.31-3.03-2.31' },
                { href: `https://youtube.com/${SITE.youtube}`, label: 'YouTube', icon: 'M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-display font-bold text-sm uppercase tracking-widest text-slate-400 mb-3">
              {t('Quick Links', 'Viungo')}
            </p>
            <ul className="space-y-2">
              {[
                { to: '/what-to-expect', label: t('First Visit', 'Ziara ya Kwanza') },
                { to: '/events', label: t('Events', 'Matukio') },
                { to: '/leaders', label: t('Our Leaders', 'Viongozi Wetu') },
                { to: '/small-groups', label: t('Small Groups', 'Vikundi') },
                { to: '/sermons', label: t('Sermons', 'Mahubiri') },
                { to: '/giving', label: t('Give', 'Sadaka') },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="font-display font-bold text-sm uppercase tracking-widest text-slate-400 mb-3">
              {t('Resources', 'Rasilimali')}
            </p>
            <ul className="space-y-2">
              {[
                { to: '/prayer', label: t('Prayer Wall', 'Ukuta wa Maombi') },
                { to: '/testimonies', label: t('Testimonies', 'Ushuhuda') },
                { to: '/blog', label: t('Blog', 'Blogu') },
                { to: '/gallery', label: t('Gallery', 'Picha') },
                { to: '/resources', label: t('Reading Plans', 'Mipango ya Kusoma') },
                { to: '/parents', label: t('Parents & Safety', 'Wazazi & Usalama') },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display font-bold text-sm uppercase tracking-widest text-slate-400 mb-3">
              {t('Contact', 'Mawasiliano')}
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>{SITE.address}</span>
              </li>
              <li>
                <a href={`tel:${SITE.phone}`} className="hover:text-white transition-colors flex gap-2 items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.81a16 16 0 006.29 6.29l1.17-1.17a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors flex gap-2 items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  {SITE.email}
                </a>
              </li>
              <li className="pt-1">
                <span className="block font-medium text-white text-xs uppercase tracking-widest mb-1">{t('Meeting', 'Mkutano')}</span>
                {SITE.meetingDay} · {SITE.meetingTime}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-2 justify-between text-xs text-slate-500">
          <p>© {year} {SITE.name}, {SITE.church}. {t('All rights reserved.', 'Haki zote zimehifadhiwa.')}</p>
          <div className="flex gap-4">
            <Link to="/parents" className="hover:text-white transition-colors">{t('Privacy Policy', 'Sera ya Faragha')}</Link>
            <Link to="/parents" className="hover:text-white transition-colors">{t('Safeguarding', 'Usalama')}</Link>
            <Link to="/contact" className="hover:text-white transition-colors">{t('Contact', 'Mawasiliano')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
