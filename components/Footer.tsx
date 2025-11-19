import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Get in Touch Section */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-brand-gold">Get in touch!</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Looking for something special? Have a question? Let us know, and we'll get back to you soon.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Houzz</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Facebook</a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-4">Nu Kitchens</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-gold mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="leading-relaxed">
                  7356 US Highway 52 S,<br />
                  Lafayette, Indiana 47905,<br />
                  United States
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:7655232103" className="hover:text-white transition-colors">(765) 523-2103</a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-4">Hours</h4>
            <div className="space-y-3 text-gray-400">
              <div>
                <p className="text-white font-semibold mb-1">Open today</p>
                <p>08:00 am – 05:00 pm</p>
              </div>
              <p className="text-sm text-gray-500 italic mt-4">
                It is best to call and schedule an appointment for your best experience.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Nu Kitchens & Baths. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;