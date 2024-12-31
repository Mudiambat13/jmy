import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default Home; 