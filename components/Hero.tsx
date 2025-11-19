import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
        <img 
          src="/12.jpeg" 
          alt="Luxury modern kitchen renovation in Indiana" 
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
          style={{ animationDuration: '25s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-10">
        <div className="inline-block mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <span className="bg-brand-gold/90 backdrop-blur-sm text-white px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-widest shadow-lg">
            Serving Mid-North Indiana Since 1977
          </span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-2xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Kitchens & Baths <br /> <span className="text-brand-gold italic drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] font-extrabold">Designed for Life.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up opacity-0 shadow-black/50 drop-shadow-md" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          Veteran-owned craftsmanship you can trust. We specialize in custom cabinetry, premium countertops, and walk-in showers that transform your house into a dream home.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <a 
            href="#portfolio" 
            className="bg-brand-gold text-white px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-brand-dark transition-all duration-300 min-w-[200px] shadow-lg"
          >
            View Our Work
          </a>
          <a 
            href="#contact" 
            className="bg-transparent text-white border border-white px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-slate-900 transition-all duration-300 min-w-[200px]"
          >
            Start Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;