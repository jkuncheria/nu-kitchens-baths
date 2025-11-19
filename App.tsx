import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DesignChat from './components/DesignChat';

function App() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans text-slate-800">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <DesignChat />
    </div>
  );
}

export default App;