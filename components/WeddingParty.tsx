
import React from 'react';
import { WEDDING_PARTY } from '../constants';

const WeddingParty: React.FC = () => {
  const bridesmaids = WEDDING_PARTY.filter(m => m.role === 'Bridesmaid');
  const groomsmen = WEDDING_PARTY.filter(m => m.role === 'Groomsman');

  return (
    <section id="party" className="py-24 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-blue-700 mb-4">Wedding Party</h2>
          <p className="text-gray-500 italic">Meet the people by our side</p>
        </div>

        <div className="space-y-20">
          <div>
            <h3 className="text-2xl font-serif text-blue-700 mb-8 border-b border-blue-100 pb-2">Bridesmaids</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {bridesmaids.map((member) => (
                <div key={member.id} className="text-center group">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 relative shadow-md">
                    <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  </div>
                  <h4 className="text-xl font-serif text-gray-900">{member.name}</h4>
                  <p className="text-blue-700 text-xs font-bold uppercase tracking-widest mt-1 mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed px-4">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif text-blue-700 mb-8 border-b border-blue-100 pb-2">Groomsmen</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {groomsmen.map((member) => (
                <div key={member.id} className="text-center group">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 relative shadow-md">
                    <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  </div>
                  <h4 className="text-xl font-serif text-gray-900">{member.name}</h4>
                  <p className="text-blue-700 text-xs font-bold uppercase tracking-widest mt-1 mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed px-4">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingParty;
