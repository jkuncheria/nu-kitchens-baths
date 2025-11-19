import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gray-50 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-50 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative group">
            {/* Image styling */}
            <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700"></div>
                <img 
                    src="/2.jpeg" 
                    alt="Master craftsman working on cabinetry" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-gold z-0 rounded-sm"></div>
            
            {/* Badge */}
            <div className="absolute -top-8 -left-8 bg-brand-gold text-white p-6 rounded-sm shadow-lg z-20 hidden md:block">
                <div className="text-center">
                    <span className="block text-3xl font-serif font-bold">45+</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold">Years of Service</span>
                </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-brand-gold"></div>
                <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em]">About Nu Kitchens</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-8 leading-tight">
              Veteran-Owned Kitchen & Bath Experts
            </h2>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
                <p>
                  At <span className="font-semibold text-brand-dark">Nu Kitchens</span>, we've been serving the mid-north Indiana region since 1977. As a veteran-owned and operated business, we specialize in providing high-quality cabinets, countertops, and backsplashes for any room in your home, apartment, or commercial property.
                </p>
                <p>
                  We also offer beautiful walk-in showers. Our experienced team is dedicated to helping you create the perfect kitchen or bathroom to suit your style and needs.
                </p>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-6">
                 <div className="flex items-center gap-3">
                    <div className="bg-slate-100 p-3 rounded-full text-brand-gold">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wider text-slate-800">Veteran Owned</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="bg-slate-100 p-3 rounded-full text-brand-gold">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wider text-slate-800">Commercial & Residential</span>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;