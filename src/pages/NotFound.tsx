import { Link } from 'react-router';
import { useApp } from '../context/AppContext';

export default function NotFound() {
  const { t } = useApp();
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center" aria-labelledby="notfound-heading">
      <p className="font-display font-black text-[120px] md:text-[180px] leading-none text-slate-100 dark:text-slate-800 select-none" aria-hidden="true">404</p>
      <div className="-mt-8">
        <h1 id="notfound-heading" className="font-display font-black text-4xl uppercase text-slate-900 dark:text-white">
          {t("This page doesn't exist yet.", 'Ukurasa huu bado haupo.')}
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">
          {t("Maybe it's still being built — like all of us. Let's get you back on track.", "Labda bado inajengwa — kama sisi sote. Turudi kwenye njia sahihi.")}
        </p>
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          <Link to="/" className="bg-primary text-white font-bold px-6 py-3 rounded-full hover:bg-primary-dark transition-colors">
            ⚡ {t('Go Home', 'Rudi Nyumbani')}
          </Link>
          <Link to="/contact" className="border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-colors">
            {t('Contact Us', 'Wasiliana Nasi')}
          </Link>
        </div>
      </div>
    </section>
  );
}
