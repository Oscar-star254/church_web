import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';
type Lang = 'en' | 'sw';

interface AppContextValue {
  theme: Theme;
  toggleTheme: () => void;
  lang: Lang;
  toggleLang: () => void;
  t: (en: string, sw: string) => string;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('iy-theme');
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem('iy-lang');
    if (stored === 'en' || stored === 'sw') return stored;
    return 'en';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('iy-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('iy-lang', lang);
  }, [lang]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');
  const toggleLang = () => setLang(l => l === 'en' ? 'sw' : 'en');
  const t = (en: string, sw: string) => lang === 'sw' ? sw : en;

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, toggleLang, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be inside AppProvider');
  return ctx;
}
