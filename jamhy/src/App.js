import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <p className="text-center">&copy; 2024 Votre Entreprise. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App; 