import React from 'react';

const STEPS = [
  { num: '01', title: 'Consultation', text: 'We meet to discuss your vision, budget, and timeline. Our design experts help visualize possibilities instantly.' },
  { num: '02', title: 'Design', text: 'Our team creates detailed 3D renderings and material boards for your approval.' },
  { num: '03', title: 'Build', text: 'Expert craftsmen bring the design to life with minimal disruption to your daily routine.' },
  { num: '04', title: 'Reveal', text: 'We walk through the finished space to ensure every detail meets our high standards.' },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-3">How It Works</h2>
            <h3 className="font-serif text-4xl md:text-5xl mb-6">A Seamless Journey from Dream to Reality</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Renovating shouldn't be stressful. We've refined our process over 40 years to ensure transparency, efficiency, and exceptional results.
            </p>
            <div className="grid grid-cols-1 gap-8">
              {STEPS.map((step) => (
                <div key={step.num} className="flex gap-6 border-t border-slate-800 pt-8">
                  <span className="text-brand-gold font-serif text-3xl font-bold">{step.num}</span>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[600px] hidden md:block">
            <div className="absolute top-0 right-0 w-4/5 h-4/5 overflow-hidden">
               <img src="/11.jpeg" alt="Designer working on plans" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 border-8 border-slate-900 overflow-hidden z-10 shadow-2xl">
               <img src="/12.jpeg" alt="Construction tools detail" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;