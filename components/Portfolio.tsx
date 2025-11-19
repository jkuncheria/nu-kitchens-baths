import React from 'react';

const PROJECTS = [
  { id: 1, title: 'Modern Farmhouse', type: 'Kitchen', img: '/1.jpeg' },
  { id: 2, title: 'Urban Loft', type: 'Full Remodel', img: '/2.jpeg' },
  { id: 3, title: 'Coastal Retreat', type: 'Bathroom', img: '/3.jpeg' },
  { id: 4, title: 'Minimalist Noir', type: 'Kitchen', img: '/4.jpeg' },
  { id: 5, title: 'Classic White', type: 'Kitchen', img: '/5.jpeg' },
  { id: 6, title: 'Master Suite', type: 'Bathroom', img: '/6.jpeg' },
  { id: 7, title: 'Luxury Kitchen', type: 'Kitchen', img: '/9.jpeg' },
  { id: 8, title: 'Spa Bathroom', type: 'Bathroom', img: '/10.jpeg' },
  { id: 9, title: 'Contemporary Design', type: 'Kitchen', img: '/11.jpeg' },
  { id: 10, title: 'Elegant Retreat', type: 'Bathroom', img: '/12.jpeg' },
  { id: 11, title: 'Custom Renovation', type: 'Full Remodel', img: '/13.jpeg' },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-3">Our Work</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-slate-900 font-medium">Curated Spaces</h3>
          </div>
          <a href="#contact" className="hidden md:block text-slate-900 border-b border-slate-900 pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors uppercase text-sm font-bold tracking-widest">
            View All Projects
          </a>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="break-inside-avoid group relative overflow-hidden mb-8">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">{project.type}</p>
                  <h4 className="text-white font-serif text-2xl">{project.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <a href="#contact" className="text-slate-900 border-b border-slate-900 pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors uppercase text-sm font-bold tracking-widest">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;