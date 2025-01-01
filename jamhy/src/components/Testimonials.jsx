import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Testimonials() {
  const testimonials = [
    {
      name: "Jean Dupont",
      company: "Entreprise de Construction XYZ",
      text: "JAMHY SARL a dépassé toutes nos attentes. Leur professionnalisme et leur expertise technique sont remarquables.",
      image: "/images/testimonials/client1.jpg"
    },
    {
      name: "Marie Laurent",
      company: "Immobilier Développement",
      text: "Une équipe exceptionnelle qui a su mener notre projet avec précision et dans les délais impartis.",
      image: "/images/testimonials/client2.jpg"
    },
    {
      name: "Pierre Martin",
      company: "Groupe Industriel ABC",
      text: "Leur approche innovante et leur engagement envers la qualité font de JAMHY SARL un partenaire de confiance.",
      image: "/images/testimonials/client3.jpg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 mt-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#063970] text-center mb-16">
          Ce que nos clients disent
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-[#063970] rounded-full flex items-center justify-center overflow-hidden">
                    {testimonial.image ? (
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl text-yellow-300">"</span>
                    )}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-[#063970] mb-1">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">{testimonial.text}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation points */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-[#063970] scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials; 