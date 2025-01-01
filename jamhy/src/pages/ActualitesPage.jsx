import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ActualitesPage() {
  const [activeCategory, setActiveCategory] = useState('tous');

  const actualites = [
    {
      id: 1,
      titre: "Inauguration du nouveau siège social",
      categorie: "entreprise",
      date: "15 Mars 2024",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      resume: "JAMHY SARL inaugure son nouveau siège social, un bâtiment moderne et écologique au cœur de Kolwezi.",
      contenu: "Lorem ipsum dolor sit amet..."
    },
    {
      id: 2,
      titre: "Nouveau projet d'infrastructure majeur",
      categorie: "projets",
      date: "10 Mars 2024",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
      resume: "Démarrage d'un projet d'envergure pour la construction d'un pont innovant.",
      contenu: "Lorem ipsum dolor sit amet..."
    },
    {
      id: 3,
      titre: "Certification ISO 9001 renouvelée",
      categorie: "certifications",
      date: "1 Mars 2024",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      resume: "JAMHY SARL obtient le renouvellement de sa certification ISO 9001 pour la qualité de ses services.",
      contenu: "Lorem ipsum dolor sit amet..."
    }
  ];

  const categories = [
    { id: 'tous', label: 'Toutes les actualités' },
    { id: 'entreprise', label: 'Vie de l\'entreprise' },
    { id: 'projets', label: 'Nouveaux projets' },
    { id: 'certifications', label: 'Certifications' }
  ];

  const filteredActualites = activeCategory === 'tous' 
    ? actualites 
    : actualites.filter(actu => actu.categorie === activeCategory);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-heading font-bold text-[#063970] text-center mb-12">
          Actualités
        </h1>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#063970] text-yellow-300'
                  : 'bg-white text-gray-600 hover:bg-[#063970] hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grille d'actualités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActualites.map((actu) => (
            <motion.article
              key={actu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48">
                <img
                  src={actu.image}
                  alt={actu.titre}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-[#063970] text-yellow-300 px-3 py-1 rounded-full text-sm">
                  {actu.categorie}
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-sky-600 mb-2">{actu.date}</div>
                <h2 className="text-xl font-bold text-[#063970] mb-3">
                  {actu.titre}
                </h2>
                <p className="text-gray-600 mb-4">
                  {actu.resume}
                </p>
                <button className="text-[#063970] hover:text-sky-600 font-semibold transition-colors duration-300">
                  Lire la suite →
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Message si aucune actualité */}
        {filteredActualites.length === 0 && (
          <div className="text-center text-gray-600 mt-8">
            Aucune actualité dans cette catégorie pour le moment.
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center mt-12 gap-2">
          <button className="px-4 py-2 rounded-lg bg-[#063970] text-white hover:bg-sky-700 transition-colors duration-300">
            ← Précédent
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#063970] text-white hover:bg-sky-700 transition-colors duration-300">
            Suivant →
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActualitesPage; 