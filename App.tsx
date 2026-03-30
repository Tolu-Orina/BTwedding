import React, { useEffect, Suspense, lazy, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const Story = lazy(() => import('./components/Story'));
const Details = lazy(() => import('./components/Details'));
const Gallery = lazy(() => import('./components/Gallery'));
const RSVP = lazy(() => import('./components/RSVP'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));
const AdminRSVP = lazy(() => import('./components/AdminRSVP'));

const App: React.FC = () => {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  useEffect(() => {
    if (hash === '#admin') return;
    const h = window.location.hash;
    if (h && h !== '#') {
      const element = document.querySelector(h);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  if (hash === '#admin') {
    return (
      <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading…</div>}>
        <AdminRSVP />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen selection:bg-rose-100 selection:text-rose-900">
      <Navbar />

      <Hero />

      <main>
        <Suspense fallback={<div className="min-h-[200px]" aria-busy="true" />}>
          <Story />
          <Details />
          <Gallery />
          <RSVP />
          <FAQ />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Background decoration elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-40 overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[40%] aspect-square bg-pink-50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] aspect-square bg-pink-50 rounded-full blur-[150px]"></div>
      </div>
    </div>
  );
};

export default App;
