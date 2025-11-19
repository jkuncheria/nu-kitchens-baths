import React from 'react';
import { Service } from '../types';

const SERVICES_DATA: Service[] = [
  {
    title: 'Custom Cabinetry',
    description: 'High-quality cabinetry for kitchens, bathrooms, and living spaces. We offer bespoke solutions that maximize storage and define your home\'s aesthetic.',
    image: '/3.jpeg',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
  },
  {
    title: 'Countertops & Backsplashes',
    description: 'Premium granite, quartz, and marble surfaces paired with stunning tile backsplashes. The perfect finishing touch for any room in your home.',
    image: '/4.jpeg',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
  },
  {
    title: 'Walk-in Showers',
    description: 'Transform your bathroom with our beautiful walk-in showers. Accessible, spacious, and designed to create a spa-like retreat in your own home.',
    image: '/5.jpeg',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
  },
  {
    title: 'Commercial & Apartments',
    description: 'Specialized renovation services for commercial properties and apartment complexes. Durable, stylish solutions delivered on time and on budget.',
    image: '/6.jpeg',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-3">Our Expertise</h2>
          <h3 className="font-serif text-4xl md:text-5xl text-slate-900 font-medium">Premium Design Services</h3>
          <div className="w-20 h-1 bg-brand-gold mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES_DATA.map((service, idx) => (
            <div key={idx} className="group bg-white p-2 hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden mb-6">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-all z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="flex items-start gap-6 p-4">
                <div className="text-brand-gold shrink-0">
                   <div className="p-3 bg-slate-50 rounded-full group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                     {service.icon}
                   </div>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed font-light">{service.description}</p>
                  <div className="mt-4 overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">Learn More &rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;