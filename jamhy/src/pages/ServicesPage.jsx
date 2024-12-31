import React from 'react';

function ServicesPage() {
  const services = [
    {
      title: 'Construction',
      description: 'Construction de bâtiments, logements sociaux et hôpitaux.',
      details: [
        'Bâtiments résidentiels et commerciaux',
        'Logements sociaux',
        'Infrastructures hospitalières',
        'Bâtiments industriels'
      ]
    },
    {
      title: 'Génie Civil et Grands Travaux',
      description: 'Réalisation d\'infrastructures et grands projets de construction.',
      details: [
        'Routes et ponts',
        'Ouvrages d\'art',
        'Terrassement',
        'Infrastructures urbaines'
      ]
    },
    {
      title: 'Location et Vente d\'Engins',
      description: 'Service complet de location et vente d\'équipements de construction.',
      details: [
        'Engins de chantier',
        'Équipements de construction',
        'Matériel de transport',
        'Maintenance et service après-vente'
      ]
    },
    {
      title: 'Approvisionnement',
      description: 'Fourniture de matériaux de construction et carburants.',
      details: [
        'Agrégats de construction',
        'Matériaux de construction',
        'Carburants',
        'Lubrifiants'
      ]
    },
    {
      title: 'Énergie Renouvelable',
      description: 'Solutions d\'énergie propre et durable.',
      details: [
        'Installations solaires',
        'Solutions énergétiques durables',
        'Équipements écologiques',
        'Conseil en efficacité énergétique'
      ]
    },
    {
      title: 'Accommodation',
      description: 'Services d\'hébergement et solutions résidentielles.',
      details: [
        'Gestion immobilière',
        'Services d\'hébergement',
        'Maintenance des locaux',
        'Solutions résidentielles'
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-16">
          Nos Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg 
                      className="w-5 h-5 text-primary mr-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-8">
            Besoin d'informations supplémentaires sur nos services ?
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage; 