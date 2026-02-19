
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Details from './components/Details';
import Gallery from './components/Gallery';
// import WeddingParty from './components/WeddingParty';
import RSVP from './components/RSVP';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

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
        <Story />
        <Details />
        <Gallery />
        {/* <WeddingParty /> */}
        <RSVP />
        <FAQ />
      </main>

      <Footer />

      {/* Background decoration elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-40 overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[40%] aspect-square bg-rose-50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] aspect-square bg-rose-50 rounded-full blur-[150px]"></div>
      </div>
    </div>
  );
};

export default App;
