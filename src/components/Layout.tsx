import { Outlet, ScrollRestoration } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';
import WhatsApp from './WhatsApp';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7FF] dark:bg-[#0D0B1E] text-[#1A1033] dark:text-[#F1EDFF] transition-colors duration-200">
      <ScrollRestoration />
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsApp />
    </div>
  );
}
