import { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('Tous');
  const [showAll, setShowAll] = useState<boolean>(false);

  // Extraire les catégories uniques incluant la nouvelle "IoT & Électronique" s'il y a des projets
  const categories = useMemo(() => {
    // S'assurer que les catégories principales sont présentes dans l'ordre voulu
    const baseCategories = ['Tous', 'Web & IA', 'Data & Logiciel', 'Web & UI/UX', 'IoT & Électronique'];
    const dynamicCats = new Set(portfolioData.projects.map(p => p.category));
    
    // Fusionner en gardant l'ordre de base, puis en ajoutant les éventuelles autres
    const allCats = new Set([...baseCategories, ...Array.from(dynamicCats)]);
    return Array.from(allCats).filter(cat => 
      cat === 'Tous' || portfolioData.projects.some(p => p.category === cat)
    );
  }, []);

  // Filtrer les projets
  const filteredProjects = useMemo(() => {
    let result = portfolioData.projects;

    // Filtre par catégorie
    if (activeCategory !== 'Tous') {
      result = result.filter(p => p.category === activeCategory);
    } 
    // Si on est sur "Tous" et qu'on ne montre pas tout, on limite aux featured
    else if (!showAll) {
      result = result.filter(p => p.featured).slice(0, 4);
    }

    return result;
  }, [activeCategory, showAll]);

  // Déterminer si on doit afficher le bouton "Voir plus"
  const shouldShowMoreButton = activeCategory === 'Tous' && !showAll && portfolioData.projects.length > 4;

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-[#0D0D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Mes <span className="text-blue-500">Projets</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations techniques en Data Science, IA et Développement Web.
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                // Si l'utilisateur clique sur une catégorie spécifique, on s'assure qu'il voit tout
                if (category !== 'Tous') setShowAll(true);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20' 
                  : 'bg-white dark:bg-[#161625] text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">Aucun projet trouvé dans cette catégorie.</p>
          </div>
        )}

        {/* Bouton Voir plus */}
        {shouldShowMoreButton && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-white dark:bg-[#161625] text-blue-600 dark:text-blue-400 border-2 border-blue-100 dark:border-blue-900/50 rounded-full font-bold hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all shadow-sm"
            >
              Voir plus de projets
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
