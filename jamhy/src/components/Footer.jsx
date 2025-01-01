import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#063970] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-heading text-2xl font-bold">
              <span className="text-sky-200">JAMHY</span>
              <span className="ml-2 text-yellow-300">SARL</span>
            </Link>
            <p className="mt-4 text-sky-100">
              Excellence en génie civil et construction depuis plus de 20 ans
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-sky-300">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-sky-100 hover:text-yellow-300 transition-colors">Services</Link></li>
              <li><Link to="/projets" className="text-sky-100 hover:text-yellow-300 transition-colors">Projets</Link></li>
              <li><Link to="/a-propos" className="text-sky-100 hover:text-yellow-300 transition-colors">À propos</Link></li>
              <li><Link to="/contact" className="text-sky-100 hover:text-yellow-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-sky-300">Contact</h3>
            <ul className="space-y-2 text-sky-100">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                3102, Avenue MINGA, Quartier GOLF, Kolwezi
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +243 814 001 374
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@jamhy-construction.fr
              </li>
            </ul>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="border-t border-sky-800 mt-12 pt-8 text-center text-sky-100">
          <p>&copy; {new Date().getFullYear()} JAMHY SARL. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 