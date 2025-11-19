import React, { useEffect } from 'react';

const Reviews: React.FC = () => {
  useEffect(() => {
    // Load Elfsight platform script
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Quotes */}
      {/* <div className="absolute top-10 left-10 text-9xl font-serif text-brand-gray text-opacity-50 pointer-events-none opacity-20">"</div> */}
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-3">Client Stories</h2>
        <h3 className="font-serif text-4xl text-slate-900 mb-12">What Homeowners Say</h3>
        
        {/* Elfsight Google Reviews | Nu Kitchens */}
        <div className="elfsight-app-7f52c497-00e1-4844-94b8-2011563c6f1b" data-elfsight-app-lazy></div>

        {/* Commented out testimonial code */}
        {/* <div className="bg-brand-gray p-10 md:p-16 rounded-sm relative">
          <div className="flex justify-center mb-6">
             {[1,2,3,4,5].map(i => (
               <svg key={i} className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
             ))}
          </div>
          <blockquote className="font-serif text-xl md:text-2xl text-slate-800 italic leading-relaxed mb-8">
            "Nu Kitchens completely transformed our outdated 90s kitchen into a modern masterpiece. The design team listened to every detail, and the AI consultant gave us great initial ideas for the color palette. The craftsmanship is simply world-class."
          </blockquote>
          <div className="font-sans">
            <div className="font-bold text-slate-900 uppercase tracking-widest text-sm">Sarah & Michael Jenkins</div>
            <div className="text-slate-500 text-xs mt-1">Westport, CT</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Reviews;