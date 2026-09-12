import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsSection() {
  // Filtrer uniquement les projets phares (featured)
  const featuredProjects = useMemo(() => {
    return portfolioData.projects.filter(p => p.featured).slice(0, 4);
  }, []);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-[#0D0D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Mes <span className="text-blue-500">Projets</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations techniques en Data Science, IA et Développement Web.
          </p>
        </div>

        {/* Grille */}
        {featuredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">Aucun projet phare disponible.</p>
          </div>
        )}

        {/* Bouton Voir plus */}
        <div className="mt-16 text-center">
          <Link
            to="/projets"
            className="inline-block px-8 py-3 bg-white dark:bg-[#161625] text-blue-600 dark:text-blue-400 border-2 border-blue-100 dark:border-blue-900/50 rounded-full font-bold hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all shadow-sm"
          >
            Voir tous les projets
          </Link>
        </div>

      </div>
    </section>
  );
}
