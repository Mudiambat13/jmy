import React from 'react';

function AboutPage() {
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
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-12">
          À Propos de JAMHY Sarl
        </h1>

        {/* Section Présentation */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6">
            Notre Histoire
          </h2>
          <p className="text-gray-600 mb-6">
            JAMHY Sarl est une entreprise aux capitaux congolais créée en 2023 dont le siège est
            à Kolwezi dans la province du Lualaba.
          </p>
          <p className="text-gray-600 mb-6">
            Par des solutions innovantes, elle offre une diversité d'activités qui
            concilient modernité, épanouissement et énergie propre.
          </p>
        </div>

        {/* Section Spécialisations */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6">
            Nos Domaines d'Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specializations.map((spec, index) => (
              <div key={index} className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">{spec}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Informations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Coordonnées */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">
              Nos Coordonnées
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Adresse</h3>
                  <p className="text-gray-600">
                    3102, Avenue MINGA<br />
                    Quartier GOLF<br />
                    Kolwezi, LUALABA<br />
                    République Démocratique du Congo
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Téléphone</h3>
                  <p className="text-gray-600">+243 814 001 374</p>
                </div>
              </div>
            </div>
          </div>

          {/* Informations Entreprise */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">
              Informations Entreprise
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Secteur d'activité</h3>
                <p className="text-gray-600">Travaux de construction spécialisés</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Taille de l'entreprise</h3>
                <p className="text-gray-600">11-50 employés</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Année de création</h3>
                <p className="text-gray-600">2023</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Type d'entreprise</h3>
                <p className="text-gray-600">Société à responsabilité limitée (SARL)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage; 