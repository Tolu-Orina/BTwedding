import React, { useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const Story = lazy(() => import('./components/Story'));
const Details = lazy(() => import('./components/Details'));
const Gallery = lazy(() => import('./components/Gallery'));
const RSVP = lazy(() => import('./components/RSVP'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll handling for hash links
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen selection:bg-rose-100 selection:text-rose-900">
      <Navbar />
      
      <main>
        <Hero />
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
