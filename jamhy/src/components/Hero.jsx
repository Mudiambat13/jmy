import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative h-hero">
      {/* Arrière-plan avec overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg" // Assurez-vous d'avoir une image de construction moderne
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-50"></div>
      </div>

      {/* Contenu */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Construisons ensemble votre avenir
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Excellence en génie civil et construction depuis plus de 20 ans
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-block bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Demander un devis
            </Link>
            <Link
              to="/projets"
              className="inline-block bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Nos réalisations
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}

export default Hero; 