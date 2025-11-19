import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-gray-200' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="group">
          <div className={`font-serif text-2xl font-bold tracking-tighter transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
            NU <span className="text-brand-gold group-hover:text-white transition-colors duration-300">KITCHENS</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-xs uppercase tracking-[0.2em] font-medium hover:text-brand-gold transition-colors ${
                isScrolled ? 'text-slate-800' : 'text-white/90'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-brand-gold text-white px-6 py-2.5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-brand-gold transition-all duration-300"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled || isMobileMenuOpen ? 'bg-slate-900' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled || isMobileMenuOpen ? 'bg-slate-900' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 transition-all ${isScrolled || isMobileMenuOpen ? 'bg-slate-900' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 py-6 px-6 flex flex-col space-y-6 animate-fade-in-down">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-800 text-xl font-serif font-medium border-b border-gray-50 pb-2 hover:text-brand-gold"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-brand-gold text-white text-center py-4 uppercase font-bold tracking-widest">
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;