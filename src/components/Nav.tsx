import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { useApp } from '../context/AppContext';
import { SITE, NAV_LINKS } from '../data/content';

export default function Nav() {
  const { theme, toggleTheme, lang, toggleLang, t } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0D0B1E]/95 backdrop-blur border-b border-slate-100 dark:border-slate-800 transition-colors">
      <nav className="max-w-7xl mx-auto px-4 flex items-center h-16 gap-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0 mr-4" onClick={() => setMenuOpen(false)}>
          <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </span>
          <span className="font-display font-black text-lg text-foreground dark:text-white leading-none hidden sm:block">
            IGNITE<br />
            <span className="text-primary text-xs font-bold tracking-widest">YOUTH</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-0 flex-1 overflow-x-auto">
          {NAV_LINKS.slice(0, 7).map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link px-3 py-1 text-sm font-semibold whitespace-nowrap transition-colors ${
                isActive(link.path)
                  ? 'text-primary active'
                  : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light'
              }`}
            >
              {t(link.label, link.labelSw)}
            </Link>
          ))}
          <div className="relative group ml-1">
            <button className="px-3 py-1 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light transition-colors flex items-center gap-1">
              {t('More', 'Zaidi')}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div className="absolute top-full left-0 mt-1 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-xl shadow-lg py-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {NAV_LINKS.slice(7).map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  {t(link.label, link.labelSw)}
                </Link>
              ))}
              {[
                { path: '/gallery', label: 'Gallery', labelSw: 'Picha' },
                { path: '/testimonies', label: 'Testimonies', labelSw: 'Ushuhuda' },
                { path: '/prayer', label: 'Prayer Requests', labelSw: 'Maombi' },
                { path: '/volunteer', label: 'Volunteer', labelSw: 'Jitolea' },
                { path: '/resources', label: 'Resources', labelSw: 'Rasilimali' },
                { path: '/parents', label: 'Parents & Safety', labelSw: 'Wazazi & Usalama' },
                { path: '/members', label: 'Member Area', labelSw: 'Eneo la Wanachama' },
              ].map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  {t(link.label, link.labelSw)}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          {/* Lang toggle */}
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="text-xs font-bold px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {lang === 'en' ? 'SW' : 'EN'}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
          >
            {theme === 'light' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            )}
          </button>

          {/* Join Us CTA */}
          <Link
            to="/events"
            className="hidden sm:flex items-center gap-1 bg-primary hover:bg-primary-dark text-white font-bold px-4 py-2 rounded-full text-sm transition-colors shadow-sm shadow-primary/30"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            {t('Join Us', 'Jiunge')}
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0D0B1E] border-t border-slate-100 dark:border-slate-800 pb-4 max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 grid grid-cols-2 gap-1">
            {[
              ...NAV_LINKS,
              { path: '/gallery', label: 'Gallery', labelSw: 'Picha' },
              { path: '/testimonies', label: 'Testimonies', labelSw: 'Ushuhuda' },
              { path: '/prayer', label: 'Prayer Requests', labelSw: 'Maombi' },
              { path: '/volunteer', label: 'Volunteer', labelSw: 'Jitolea' },
              { path: '/resources', label: 'Resources', labelSw: 'Rasilimali' },
              { path: '/parents', label: 'Parents & Safety', labelSw: 'Wazazi & Usalama' },
              { path: '/members', label: 'Member Area', labelSw: 'Wanachama' },
            ].map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {t(link.label, link.labelSw)}
              </Link>
            ))}
          </div>
          <div className="px-4 pt-3 flex gap-2">
            <Link
              to="/events"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center bg-primary text-white font-bold py-3 rounded-full text-sm transition-colors"
            >
              ⚡ {t('Join Us', 'Jiunge Nasi')}
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-[#25D366] text-white font-bold py-3 rounded-full text-sm"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
