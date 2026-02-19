
import React, { useState } from 'react';

const RSVP: React.FC = () => {
  const [step, setStep] = useState<'auth' | 'form' | 'success'>('auth');
  const [inviteCode, setInviteCode] = useState('');
  const [error, setError] = useState('');
  
  // RSVP Form State
  const [attending, setAttending] = useState<boolean | null>(null);
  const [guestCount, setGuestCount] = useState(1);
  const [events, setEvents] = useState({
    traditional: false,
    white: false,
    reception: false
  });

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock validation
    if (inviteCode.toUpperCase().startsWith('BLT-')) {
      setError('');
      setStep('form');
    } else {
      setError('Invalid invite code. Please check your invitation card.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <section id="rsvp" className="py-24 bg-blue-50/50">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-blue-100">
          <div className="bg-blue-700 py-10 px-6 text-center text-white">
            <h2 className="text-4xl font-serif mb-2">RSVP</h2>
            <p className="text-blue-200 uppercase tracking-widest text-xs font-bold">
              Please respond by March 30, 2026</p>
          </div>

          <div className="p-8 md:p-12">
            {step === 'auth' && (
              <form onSubmit={handleAuth} className="space-y-6">
                <p className="text-gray-600 text-center mb-8">
                  To ensure our celebration remains intimate and secure,
                   please enter your name.
                </p>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">FULL NAME</label>
                  <input 
                    type="text" 
                    value={inviteCode}
                    onChange={(e) => setInviteCode(e.target.value)}
                    placeholder="e.g. BLT-1045"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-200 outline-none transition-all uppercase tracking-widest text-center text-lg"
                    required
                  />
                  {error && <p className="text-blue-600 text-sm mt-2 text-center">{error}</p>}
                </div>
                <button type="submit" className="w-full py-4 bg-blue-700 text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg">
                  RSVP
                </button>
              </form>
            )}

            {step === 'form' && (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <p className="text-lg font-serif text-gray-900 text-center">Will you be joining us?</p>
                  <div className="flex gap-4">
                    <button 
                      type="button"
                      onClick={() => setAttending(true)}
                      className={`flex-1 py-4 rounded-xl font-bold transition-all border ${attending === true ? 'bg-blue-700 text-white border-blue-700 shadow-md' : 'bg-gray-50 text-gray-400 border-gray-100'}`}
                    >
                      JOYFULLY ATTEND
                    </button>
                    <button 
                      type="button"
                      onClick={() => setAttending(false)}
                      className={`flex-1 py-4 rounded-xl font-bold transition-all border ${attending === false ? 'bg-blue-700 text-white border-blue-700 shadow-md' : 'bg-gray-50 text-gray-400 border-gray-100'}`}
                    >
                      REGRETFULLY DECLINE
                    </button>
                  </div>
                </div>

                {attending && (
                  <>
                    <div className="space-y-4">
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Select Events</p>
                      <div className="space-y-3">
                        {[
                          { id: 'traditional', label: 'Traditional Wedding (April 10)' },
                          { id: 'white', label: 'White Wedding Ceremony (April 11)' },
                          { id: 'reception', label: 'Wedding Reception (April 11)' }
                        ].map((ev) => (
                          <label key={ev.id} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:border-blue-200 transition-colors">
                            <input 
                              type="checkbox" 
                              className="w-5 h-5 accent-blue-700" 
                              checked={(events as any)[ev.id]}
                              onChange={(e) => setEvents({...events, [ev.id]: e.target.checked})}
                            />
                            <span className="text-gray-700">{ev.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Number of Guests</p>
                      <div className="flex items-center justify-center gap-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <button 
                          type="button"
                          onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-700 shadow hover:bg-blue-50"
                        >-</button>
                        <span className="text-2xl font-serif text-blue-700 w-8 text-center">{guestCount}</span>
                        <button 
                          type="button"
                          onClick={() => setGuestCount(guestCount + 1)}
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-700 shadow hover:bg-blue-50"
                        >+</button>
                      </div>
                    </div>
                  </>
                )}

                <button 
                  type="submit" 
                  disabled={attending === null}
                  className="w-full py-4 bg-blue-700 text-white rounded-xl font-bold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
                >
                  SUBMIT RSVP
                </button>
              </form>
            )}

            {step === 'success' && (
              <div className="text-center py-10 space-y-6">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-3xl font-serif text-blue-700 italic">Thank You!</h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  "We are honored to celebrate this beautiful moment with you. Thank you for being part of our story."
                </p>
                <div className="pt-6">
                  <button onClick={() => setStep('auth')} className="text-blue-700 font-bold tracking-widest text-xs uppercase hover:underline">Edit RSVP</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
