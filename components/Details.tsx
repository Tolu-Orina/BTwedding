
import React, { useState } from 'react';

const Details: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section id="details" className="py-24 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-blue-700 mb-4">The Celebration</h2>
          <p className="text-gray-500 uppercase tracking-widest text-sm">Two Days of Love & Tradition</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Traditional Wedding */}
          <div className="bg-pink-50/50 rounded-[2.5rem] p-10 border border-pink-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="text-blue-700 font-bold tracking-widest text-xs uppercase bg-blue-100 px-3 py-1 rounded-full">Day One</span>
                <h3 className="text-3xl font-serif text-gray-900 mt-4">Traditional Wedding</h3>
              </div>
              <div className="text-right">
                <p className="text-blue-700 font-serif text-2xl">April 10</p>
                <p className="text-gray-400 text-sm">Friday, 2026</p>
              </div>
            </div>
            
            <div className="space-y-6 text-gray-700">
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-blue-700 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div>
                  <p className="font-semibold text-gray-900">12:00 PM</p>
                  <p className="text-sm">Traditional Engagement Ceremony</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-blue-700 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div className="space-y-1">
                  <p className="font-semibold text-gray-900">Bride’s Father’s Compound</p>
                  <p className="text-sm leading-relaxed">
                    12 Rabiu Saka Crescent<br />
                    Off Ojuemerum Road, Egirin<br />
                    Odogunyan, Ikorodu, Lagos
                  </p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setShowModal(true)}
              className="mt-10 w-full py-4 hover:bg-pink-50 border border-pink-200 rounded-xl hover:text-blue-700 font-medium bg-blue-700 text-white transition-all"
            >
              GET DIRECTIONS
            </button>
          </div>

          {/* White Wedding */}
          <div className="bg-pink-50/50 rounded-[2.5rem] p-10 border border-pink-100 transition-all hover:shadow-xl hover:-translate-y-1">
             <div className="flex justify-between items-start mb-8">
              <div>
                <span className="text-blue-700 font-bold tracking-widest text-xs uppercase bg-blue-100 px-3 py-1 rounded-full">Day Two</span>
                <h3 className="text-3xl font-serif text-gray-900 mt-4">White Wedding</h3>
              </div>
              <div className="text-right">
                <p className="text-blue-700 font-serif text-2xl">April 11</p>
                <p className="text-gray-400 text-sm">Saturday, 2026</p>
              </div>
            </div>

            <div className="space-y-8 text-gray-700">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-blue-700 font-bold">Solemnization</p>
                  <p className="text-lg font-serif">10:30 AM</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-blue-700 font-bold">Reception</p>
                  <p className="text-lg font-serif">1:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-blue-700 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div className="space-y-1">
                  <p className="font-semibold text-gray-900">Peakstone Event Centre</p>
                  <p className="text-sm leading-relaxed">
                    Haruna Bus Stop<br />
                    Ikorodu, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/search/?api=1&query=Peakstone+Event+Centre+Haruna+Bus+Stop+Ikorodu+Lagos+Nigeria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-10 w-full py-4 bg-blue-700 text-white rounded-xl font-medium hover:bg-blue-600 transition-all shadow-lg inline-block text-center"
            >
              VIEW ON MAP
            </a>
          </div>
        </div>
      </div>

      {/* Directions Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-2xl font-serif text-blue-700 mb-4">Directions to Traditional Wedding</h3>
            <div className="space-y-4 text-gray-700">
              <p className="font-semibold">Bride's Father's Compound</p>
              <p>12 Rabiu Saka Crescent, Off Ojuemerum Road, Egirin, Odogunyan, Ikorodu, Lagos</p>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold text-blue-700 mb-2">Getting There:</p>
                <div className="space-y-2">
                  <p>From Ikorodu garage, take a tricycle/ bus or drive down to Odogunyan Last bus stop, From the bus stop, take a bike to Egirin and drive into the street besides Baale’s office. If you are driving, get a bike from the bustop to ride in front of you for directions.</p>
                  </div>
              </div>
              
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <p className="font-semibold text-yellow-700 mb-2">Landmarks:</p>
                <div className="text-sm space-y-1">
                  <p>• Monday Block, Close to Ojuemerum Road</p>
                  <p>• Near Egirin Community</p>
                  <p>• Look for the blue gate with wedding decorations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Details;
