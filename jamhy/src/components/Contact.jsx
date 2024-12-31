import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Notre Adresse',
      info: '123 Avenue des Constructeurs, 75001 Paris'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Téléphone',
      info: '+33 1 23 45 67 89'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      info: 'contact@jamhy-construction.fr'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600">
            Discutons de votre projet et trouvons la meilleure solution ensemble
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-primary mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.info}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-heading font-bold text-gray-800 mb-6">
            Prêt à démarrer votre projet ?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Que vous ayez un projet précis en tête ou que vous cherchiez simplement des conseils, 
            notre équipe est là pour vous accompagner à chaque étape.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Demander un devis
            </Link>
            <a
              href="tel:+33123456789"
              className="inline-block bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Appelez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 