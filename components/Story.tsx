import React from 'react';

const textStyles = 'text-gray-700/95 leading-[1.85] text-base md:text-lg tracking-tight';
const paragraphStyles = `${textStyles} mb-5`;
const dropCapStyles = 'first-letter:text-4xl first-letter:md:text-5xl first-letter:font-serif first-letter:text-blue-600 first-letter:mr-2 first-letter:mt-1 first-letter:float-left first-letter:leading-none';
const quoteStyles = 'border-l-4 border-blue-300/60 pl-6 py-2 my-4 italic text-blue-800/90 bg-blue-50/50 rounded-r-lg';

const Story: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-pink-50/80">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-blue-700 mb-4 tracking-tight">Our Journey</h2>
          <div className="w-24 h-px bg-blue-200 mx-auto"></div>
        </div>

        <div className="space-y-28">
          {/* Blessyn's Perspective — Mobile: stacked, Desktop: image floats right, text wraps */}
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-serif text-blue-700 italic mb-8">How I Met Tolu — Blessyn</h3>
            {/* Mobile: full-width image above text. Desktop: float right, larger images, rounded shape for text wrap */}
            <div className="md:float-right w-full md:w-[min(45%,380px)] lg:w-[min(42%,420px)] md:ml-6 lg:ml-8 md:mb-6 shrink-0 rounded-2xl overflow-hidden md:[shape-outside:inset(0_0_0_0_round_1rem)] md:[shape-margin:1.25rem]">
              <div className="aspect-[4/5] max-h-[380px] sm:max-h-[420px] md:max-h-none rounded-2xl overflow-hidden shadow-xl border-4 border-white/90 relative">
                <img src="/bride.jpeg" alt="Blessyn" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-blue-700 text-xs tracking-widest font-bold shadow-sm">THE BRIDE</div>
              </div>
            </div>
            <div className="space-y-4 font-[350]">
              <p className={`${paragraphStyles} ${dropCapStyles}`}>Tolu and I met in 2023. We got onboarded the same day to work at the same company and while I took note of his name, I didn&apos;t get to work with him until later that year — around October or so.</p>
              <p className={paragraphStyles}>I&apos;m a Product Manager and he&apos;s a Lead Engineer. Because we worked remotely, we barely knew what each other looked like until that project where we had to stay on a call together to draft out a requirements document. It was a long call, but I noticed he was very easy to talk to. He knew how to carry a conversation and seemed very fascinated by me.</p>
              <p className={paragraphStyles}>We would have several more calls like that, with him intentionally seeking me out. Then I started noticing a pattern — he would stall conversations just to keep me a little longer on the call.</p>
              <p className={paragraphStyles}>At first, I didn&apos;t mind. But then I started looking forward to hearing from him too… so I ran.</p>
              <p className={paragraphStyles}>I wasn&apos;t in the right headspace. I had just moved back to Lagos a month or so before and I definitely didn&apos;t want an office romance. So I gave him enough space that he got the memo and let me be.</p>
              <p className={`${paragraphStyles} font-medium text-blue-800/90`}>Fast forward to 2024.</p>
              <p className={paragraphStyles}>We were on another project together and this time the client demanded we create a WhatsApp group, so I did. This time, I didn&apos;t interact with him personally and mostly worked with the other engineers on the team. I had almost even forgotten we once had a connection, so I didn&apos;t mind. I did notice though that he&apos;s especially smart, he&apos;s one of those people that is brilliant in a way that isn&apos;t cocky but you just know this person knows his onions.</p>
              <p className={`${paragraphStyles} font-medium text-blue-800/90`}>Fast forward again to January 2025.</p>
              <p className={paragraphStyles}>I needed a document from him and tried reaching him on Slack, but I wasn&apos;t getting a response. It was quite urgent, so I remembered the WhatsApp group. I went to fish out his number and called him. He responded, gave me what I needed, and we moved on.</p>
              <p className={paragraphStyles}>Two weeks later, I needed another document and he was unresponsive on Slack again. So I went to look for his number on WhatsApp — and this time, I decided to save it.</p>
              <p className={paragraphStyles}>Apparently, he had always saved mine.</p>
              <p className={paragraphStyles}>Because suddenly, he started viewing my WhatsApp status updates and liking everything I posted 😂</p>
              <p className={paragraphStyles}>On February 22nd, I posted a video of myself and he sent a message saying, &quot;You are entering my eyes.&quot;</p>
              <p className={paragraphStyles}>I jokingly told him to close his eyes.</p>
              <p className={paragraphStyles}>And that&apos;s where the banter started — followed by a confession of how he has always had the biggest crush on me.</p>
              <p className={`${paragraphStyles} text-blue-700/90`}>(We been knew! 😏)</p>
              <p className={paragraphStyles}>The conversation, as always, flowed easily from there.</p>
              <p className={paragraphStyles}>At the time, we were both stuck in &quot;talking stage&quot; entanglements that weren&apos;t moving forward. I didn&apos;t know how to entertain multiple people at once, so I told Tolu honestly that I was talking to someone and wanted to see where that would go first. He was also in a similar situation, but he still called every week or every other day just to check on me.</p>
              <p className={paragraphStyles}>By the end of March, we both knew the talking stages were moot. We gave up pretending like we didn&apos;t want each other.</p>
              <blockquote className={quoteStyles}>Tolu was very clear from the start. He said,<br />&quot;Blessyn, if you agree to a relationship with me, you are agreeing to marry me because I&apos;m very sure I&apos;m going to marry you.&quot;</blockquote>
              <p className={paragraphStyles}>That scared me a bit. But the intentionality of this man gave me wings. I&apos;m glad I gave us a chance and I&apos;m grateful to experience this kind of love. Tolu is an amazing human being. I&apos;m in awe of how good a person he is and I&apos;m blessed to call him mine forever.</p>
              <p className={paragraphStyles}>It&apos;s been the most amazing journey — many highs, a few lows — but still holding on to a love that never fails.</p>
              <p className={`${paragraphStyles} font-medium text-blue-800/90 italic`}>I said yes to the man of my dreams, and I can&apos;t wait to officially start forever with him.</p>
            </div>
            <div className="clear-both" />
          </div>

          {/* Tolu's Perspective — Mobile: stacked, Desktop: image floats left, text wraps */}
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-serif text-blue-700 italic mb-8">How I Met Blessyn — Tolu</h3>
            {/* Mobile: full-width image above text. Desktop: float left, larger images, rounded shape for text wrap */}
            <div className="md:float-left w-full md:w-[min(45%,380px)] lg:w-[min(42%,420px)] md:mr-6 lg:mr-8 md:mb-6 shrink-0 rounded-2xl overflow-hidden md:[shape-outside:inset(0_0_0_0_round_1rem)] md:[shape-margin:1.25rem]">
              <div className="aspect-[4/5] max-h-[380px] sm:max-h-[420px] md:max-h-none rounded-2xl overflow-hidden shadow-xl border-4 border-white/90 relative">
                <img src="/groom.jpeg" alt="Tolu" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-blue-700 text-xs tracking-widest font-bold shadow-sm">THE GROOM</div>
              </div>
            </div>
            <div className="space-y-4 font-[350]">
              <p className={`${paragraphStyles} ${dropCapStyles}`}>It was love at first sound for me.</p>
              <p className={paragraphStyles}>Blessyn has a unique voice that makes you just want to listen, and I loved listening to her talk. So when I finally got the opportunity to be alone with her on a call, I made her talk. And the more she talked, the more fascinated I became.</p>
              <p className={paragraphStyles}>She was unique — her thought processes, her experiences. She knew how to tell a story about everything, and it was always fascinating to listen to.</p>
              <p className={paragraphStyles}>I&apos;ve always been open with my emotions, so I guess I made it too obvious that I really liked her.</p>
              <p className={paragraphStyles}>It didn&apos;t last long though, because we stopped talking for a while. But we worked in the same place, and Blessyn was quite popular, so she was hard to forget.</p>
              <p className={paragraphStyles}>The few times we worked together, I noticed her doggedness and I loved her work ethic. She had a healthy balance of being strict and serious about work, but also very playful in a way that made everyone relaxed. Stand-ups were always filled with a balance of &quot;get it done,&quot; jibes, and banter.</p>
              <p className={paragraphStyles}>I was pleasantly surprised when she reached out to me in 2025. Speaking to her again opened up those feelings I thought were gone. And once more, I found myself intentionally reaching out.</p>
              <p className={paragraphStyles}>Getting to know her on a more personal level was much, much better than the first time. It was like being on a treasure hunt and finding treasure at every point.</p>
              <p className={`${paragraphStyles} font-medium text-blue-800/90`}>I knew I was right all along.</p>
              <p className={`${paragraphStyles} font-medium text-blue-800/90`}>Blessyn is my dream woman.</p>
              <p className={paragraphStyles}>She has a mindset different from most. She is truly brilliant, and the thought of her filled my heart with so much peace.</p>
              <p className={paragraphStyles}>She would often tell me she needed to go pray most evenings, and that piqued my interest. Soon, I discovered a woman so invested in her walk with God, passionate about everything she does. Her heart and disposition towards people stood out to me the most.</p>
              <p className={paragraphStyles}>I had decided long before I asked her officially that she was mine to keep.</p>
              <p className={`${paragraphStyles} font-medium text-blue-800/90 italic`}>And I&apos;m grateful to God for making everything beautiful in His time.</p>
            </div>
            <div className="clear-both" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
