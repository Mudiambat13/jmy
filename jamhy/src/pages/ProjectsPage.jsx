import React, { useState } from 'react';

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('tous');

  const projects = [
    {
      id: 1,
      title: 'Centre Commercial Modern Plaza',
      category: 'commercial',
      description: 'Construction d\'un centre commercial de 50,000m² incluant parking souterrain',
      image: '/images/projects/shopping.png',
      year: '2023',
      client: 'Modern Plaza SA'
    },
    {
      id: 2,
      title: 'Pont de la Rivière',
      category: 'infrastructure',
      description: 'Construction d\'un pont à haubans de 500m de longueur',
      image: '/images/projects/pont.jpg',
      year: '2022',
      client: 'Département des Travaux Publics'
    },
    {
      id: 3,
      title: 'Usine Eco-Tech',
      category: 'industriel',
      description: 'Construction d\'une usine écologique de 15,000m²',
      image: '/images/projects/solaire.webp',
      year: '2023',
      client: 'Eco-Tech Industries'
    },
    {
      id: 4,
      title: 'Résidence Les Jardins',
      category: 'residentiel',
      description: 'Complexe résidentiel de 200 appartements avec espaces verts',
      image: '/images/projects/residence.jpg',
      year: '2022',
      client: 'Groupe Immobilier Royal'
    }
  ];

  const filters = [
    { id: 'tous', label: 'Tous les projets' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'industriel', label: 'Industriel' },
    { id: 'residentiel', label: 'Résidentiel' }
  ];

  const filteredProjects = activeFilter === 'tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-heading font-bold text-[#063970] text-center mb-8">
          Nos Projets Réalisés
        </h1>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeFilter === filter.id
                  ? 'bg-[#063970] text-yellow-300'
                  : 'bg-white text-gray-600 hover:bg-sky-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-[#063970] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-sky-600">Client: {project.client}</span>
                  <span className="text-yellow-600">Année: {project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-600 mt-8">
            Aucun projet ne correspond à ce filtre.
          </p>
        )}
      </div>
    </div>
  );
}

export default ProjectsPage; 