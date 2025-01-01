import React, { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: "Quels types de projets de construction réalisez-vous ?",
      answer: "Nous réalisons une large gamme de projets incluant la construction résidentielle, commerciale, industrielle et les travaux publics. Notre expertise s'étend des petits projets de rénovation aux grands chantiers d'infrastructure."
    },
    {
      question: "Quelle est la durée moyenne d'un projet de construction ?",
      answer: "La durée varie selon la complexité et l'envergure du projet. Un projet résidentiel peut prendre 6 à 12 mois, tandis qu'un projet commercial peut s'étendre sur 12 à 24 mois. Nous fournissons toujours un calendrier détaillé au début du projet."
    },
    {
      question: "Comment garantissez-vous la qualité de vos constructions ?",
      answer: "Nous suivons un processus rigoureux de contrôle qualité à chaque étape du projet. Notre équipe utilise les meilleures pratiques de l'industrie et nous travaillons avec des matériaux certifiés. De plus, nous effectuons des inspections régulières pendant et après la construction."
    },
    {
      question: "Proposez-vous des solutions écologiques ?",
      answer: "Oui, nous sommes engagés dans la construction durable. Nous proposons des solutions d'énergie renouvelable, des matériaux écologiques et des méthodes de construction respectueuses de l'environnement."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#063970] text-center mb-12">
          Questions Fréquentes
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 rounded-lg transition-all duration-300 ${
                openIndex === index ? 'shadow-lg' : ''
              }`}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-[#063970]">{faq.question}</span>
                <span className={`text-yellow-300 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-600 border-t animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ; 