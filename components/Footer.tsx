
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-pink-50/20 border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif text-blue-700 mb-8 tracking-tighter">Blessyn <span className="italic font-normal">&</span> Tolu</h2>
        
        <div className="flex justify-center gap-6 mb-12">
          <span className="text-gray-400 font-bold tracking-widest text-xs uppercase">#TolusBlessyn26</span>
          <span className="text-gray-400 font-bold tracking-widest text-xs uppercase">#BeautifulInHisTime</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto mb-16">
          {['Home', 'Our Story', 'Details', 'Gallery', 'Wedding Party', 'RSVP', 'FAQ'].map((link) => (
             <a 
              key={link} 
              href={`#${link.toLowerCase().replace(' ', '')}`} 
              className="text-gray-500 text-sm hover:text-blue-700 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <p className="text-gray-400 text-xs italic">
          Designed with love for our family and friends.<br />
          See you on our big day!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
