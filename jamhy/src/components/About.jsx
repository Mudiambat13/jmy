import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  const stats = [
    {
      number: '2023',
      label: 'Année de création',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: '50+',
      label: 'Employés qualifiés',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      number: '7+',
      label: 'Domaines d\'expertise',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  const specializations = [
    'Construction des bâtiments et logements sociaux',
    'Génie civil et grands travaux',
    'Location et vente des engins',
    'Approvisionnement en agrégats et matériaux de construction',
    'Approvisionnement en carburants et lubrifiants',
    'Energie renouvelable',
    'Accommodation'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              À Propos de JAMHY Sarl
            </h2>
            <p className="text-gray-600 mb-6">
              JAMHY Sarl est une entreprise aux capitaux congolais créée en 2023 dont le siège est
              à Kolwezi dans la province du Lualaba.
            </p>
            <p className="text-gray-600 mb-8">
              Par des solutions innovantes, elle offre une diversité d'activités qui
              concilient modernité, épanouissement et énergie propre.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Nos Spécialisations :</h3>
              <ul className="space-y-2">
                {specializations.map((spec, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact :</h3>
              <p className="text-gray-600">
                3102, Avenue MINGA, Quartier GOLF<br />
                Kolwezi, LUALABA<br />
                République Démocratique du Congo<br />
                Tél: +243 814 001 374
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-block bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Contactez-nous
            </Link>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 