
import React from 'react';

const Story: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-pink-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-blue-700 mb-4">Our Journey</h2>
          <div className="w-24 h-px bg-blue-200 mx-auto"></div>
        </div>

        <div className="space-y-24">
          {/* Blessyn's Perspective */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h3 className="text-3xl font-serif text-blue-700 italic">How I Met Tolu — Blessyn's Perspective</h3>
              <p className="text-gray-700 leading-relaxed first-letter:text-4xl first-letter:font-serif first-letter:text-blue-700 first-letter:mr-3 first-letter:float-left">
                It wasn't something I planned. Life has a funny way of bringing the most beautiful things into your life when you least expect them. Meeting Tolu felt like finding a piece of a puzzle I didn't even know was missing... 
              </p>
              <p className="text-gray-700 leading-relaxed">
                His kindness, his intellect, and the way he looks at the world with such curiosity—it was infectious. From our first conversation, I knew this was more than just a fleeting moment. It was the beginning of my favorite chapter.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white relative">
                {/* Visual match for Image 1 (Selfie) */}
                <img src="/bride.jpeg" alt="Blessyn" className="w-full h-full object-cover" />
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-blue-700 text-xs tracking-widest font-bold">THE BRIDE</div>
              </div>
            </div>
          </div>

          {/* Tolu's Perspective */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white relative">
              {/* Visual match for Image 14 (Smiling together / Groom look) */}
              <img src="/groom.jpeg" alt="Tolu" className="w-full h-full object-cover" />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-blue-700 text-xs tracking-widest font-bold">THE GROOM</div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-serif text-blue-700 italic">How I Met Blessyn — Tolu's Perspective</h3>
              <p className="text-gray-700 leading-relaxed first-letter:text-4xl first-letter:font-serif first-letter:text-blue-700 first-letter:mr-3 first-letter:float-left">
                As someone who works with algorithms and patterns, I've always looked for logic in everything. But meeting Blessyn defied all my data. She was the beautiful anomaly that changed my entire outlook on life...
              </p>
              <p className="text-gray-700 leading-relaxed">
                Her passion as a Product Manager is only matched by her warmth as a human being. She brings a balance to my life that is nothing short of divine. I realized very early on that doing life with her was the only way I wanted to do it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
