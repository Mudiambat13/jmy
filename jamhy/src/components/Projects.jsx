import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const featuredProjects = [
    {
      id: 1,
      title: 'Centre Commercial Modern Plaza',
      category: 'Commercial',
      image: '/images/projects/shopping.png',
      description: 'Construction d\'un centre commercial de 50,000m² incluant parking souterrain'
    },
    {
      id: 2,
      title: 'Pont de la Rivière',
      category: 'Infrastructure',
      image: '/images/projects/pont.jpg',
      description: 'Construction d\'un pont à haubans de 500m de longueur'
    },
    {
      id: 3,
      title: 'Usine Eco-Tech',
      category: 'Industriel',
      image: '/images/projects/solaire.webp',
      description: 'Construction d\'une usine écologique de 15,000m²'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Nos Projets Phares
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez quelques-unes de nos réalisations les plus remarquables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-75 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-lg">
                    Voir les détails
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projets"
            className="inline-block bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Voir tous nos projets
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects; 