import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Info */}
          <div>
            <h2 className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-4">Get In Touch</h2>
            <h3 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">Let's Build Something Beautiful</h3>
            <p className="text-gray-400 mb-10 text-lg font-light">
              Ready to upgrade your home or commercial property? Contact Nu Kitchens today to speak with a design expert.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="bg-white/5 p-4 rounded-full text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Service Area</h4>
                  <p className="text-gray-400 font-light">Serving Mid-North Indiana</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 group">
                <div className="bg-white/5 p-4 rounded-full text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Phone</h4>
                  <p className="text-gray-400 font-light">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="bg-white/5 p-4 rounded-full text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Email</h4>
                  <p className="text-gray-400 font-light">info@nu-kitchens.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 shadow-2xl">
            <form className="space-y-8">
              <h4 className="font-serif text-2xl text-slate-900 mb-6">Request a Consultation</h4>
              <div className="grid grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-focus-within:text-brand-gold transition-colors">First Name</label>
                  <input type="text" className="w-full border-b border-slate-300 py-2 text-slate-900 focus:border-brand-gold focus:outline-none transition-colors bg-transparent" />
                </div>
                <div className="group">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-focus-within:text-brand-gold transition-colors">Last Name</label>
                  <input type="text" className="w-full border-b border-slate-300 py-2 text-slate-900 focus:border-brand-gold focus:outline-none transition-colors bg-transparent" />
                </div>
              </div>
              <div className="group">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-focus-within:text-brand-gold transition-colors">Email</label>
                <input type="email" className="w-full border-b border-slate-300 py-2 text-slate-900 focus:border-brand-gold focus:outline-none transition-colors bg-transparent" />
              </div>
              <div className="group">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-focus-within:text-brand-gold transition-colors">Project Details</label>
                <textarea rows={3} className="w-full border-b border-slate-300 py-2 text-slate-900 focus:border-brand-gold focus:outline-none transition-colors resize-none bg-transparent"></textarea>
              </div>
              <button className="w-full bg-brand-dark text-white font-bold uppercase tracking-[0.2em] py-5 hover:bg-brand-gold transition-colors duration-300">
                Send Request
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;