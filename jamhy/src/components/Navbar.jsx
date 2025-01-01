import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projets', path: '/projets' },
    { 
      name: 'L\'entreprise', 
      path: '#',
      submenu: [
        { name: 'À propos', path: '/a-propos' },
        { name: 'Statistiques', path: '/statistiques' },
        { name: 'Témoignages', path: '/temoignages' },
        { name: 'FAQ', path: '/faq' },
      ]
    },
    { name: 'Actualités', path: '/actualites' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-[#063970] fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="font-heading text-2xl font-bold">
            <span className="text-sky-200">JAMHY</span>
            <span className="ml-2 text-yellow-300">SARL</span>
          </Link>

          {/* Navigation desktop */}
          <div className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setOpenSubmenu(item.name)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    <button className={`px-4 py-2 rounded-lg text-sky-200 hover:text-yellow-300 hover:bg-sky-900 transition-colors duration-300`}>
                      {item.name}
                      <svg className="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openSubmenu === item.name && (
                      <div className="absolute left-0 mt-1 w-48 rounded-lg bg-[#063970] shadow-xl py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className={`block px-4 py-2 text-sm ${
                              location.pathname === subItem.path 
                                ? 'text-yellow-300 bg-sky-900' 
                                : 'text-sky-200 hover:text-yellow-300 hover:bg-sky-900'
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                      location.pathname === item.path 
                        ? 'text-yellow-300 bg-sky-900' 
                        : 'text-sky-200 hover:text-yellow-300 hover:bg-sky-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Bouton menu mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-sky-200 hover:text-yellow-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                      className="w-full px-4 py-2 text-left text-sky-200 hover:text-yellow-300 hover:bg-sky-900 flex justify-between items-center"
                    >
                      {item.name}
                      <svg className={`w-4 h-4 transform transition-transform duration-200 ${openSubmenu === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openSubmenu === item.name && (
                      <div className="bg-sky-900 py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className={`block px-8 py-2 ${
                              location.pathname === subItem.path 
                                ? 'text-yellow-300' 
                                : 'text-sky-200 hover:text-yellow-300'
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`block px-4 py-2 ${
                      location.pathname === item.path 
                        ? 'text-yellow-300 bg-[#084b8f]' 
                        : 'text-sky-200 hover:text-yellow-300 hover:bg-[#084b8f]'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;