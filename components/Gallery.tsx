
import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Engagement' | 'Traditional' | 'Casual'>('All');

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-blue-700 mb-6">Gallery</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Engagement', 'Traditional', 'Casual'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-blue-700 text-white shadow-md' : 'bg-white text-blue-700 hover:bg-blue-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
              <img 
                src={item.url} 
                alt={item.category} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-serif text-lg">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
