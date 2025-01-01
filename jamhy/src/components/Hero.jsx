import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative h-screen pt-20">
      {/* Arrière-plan avec overlay */}
      <div className="absolute inset-0 mt-20">
        <img
          src="/images/hero.jpg"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#063970]/80 to-[#063970]/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Contenu */}
      <div className="relative h-full container mx-auto px-4 flex items-center pt-16">
        <div className="max-w-2xl animate-fade-in space-y-8">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">
            Construisons ensemble votre avenir
          </h1>
          <p className="text-xl md:text-2xl text-sky-200">
            Excellence en génie civil et construction depuis plus de 20 ans
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/contact"
              className="inline-block bg-[#063970] hover:bg-sky-900 text-yellow-300 font-bold py-4 px-8 rounded-lg transition-colors duration-300"
            >
              Demander un devis
            </Link>
            <Link
              to="/projets"
              className="inline-block bg-white hover:bg-gray-100 text-[#063970] font-bold py-4 px-8 rounded-lg transition-colors duration-300"
            >
              Nos réalisations
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-yellow-300"
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