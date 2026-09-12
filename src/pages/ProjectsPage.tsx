import { useState, useMemo, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('Tous');

  // Remonter en haut de la page au chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = useMemo(() => {
    const baseCategories = ['Tous', 'Web & IA', 'Data & Logiciel', 'Web & UI/UX', 'IoT & Électronique'];
    const dynamicCats = new Set(portfolioData.projects.map(p => p.category));
    const allCats = new Set([...baseCategories, ...Array.from(dynamicCats)]);
    return Array.from(allCats).filter(cat => 
      cat === 'Tous' || portfolioData.projects.some(p => p.category === cat)
    );
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Tous') return portfolioData.projects;
    return portfolioData.projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="py-20 md:py-32 bg-gray-50 dark:bg-[#090914] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 font-medium mb-12 transition-colors">
          <ArrowLeft size={20} />
          <span>Retour à l'accueil</span>
        </Link>

        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Tous mes <span className="text-blue-500">Projets</span>
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez l'intégralité de mes réalisations techniques en Data Science, IA et Développement Web.
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm' 
                  : 'bg-white dark:bg-[#161625] text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">Aucun projet trouvé dans cette catégorie.</p>
          </div>
        )}

      </div>
    </div>
  );
}
