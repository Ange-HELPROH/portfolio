import type { Project } from '../data/portfolioData';
import { ExternalLink, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Déterminer l'image à afficher (fallback si tableau vide)
  let imgUrl = '';
  if (project.images && project.images.length > 0) {
    imgUrl = `${import.meta.env.BASE_URL}assets/images/projects/${project.images[0].replace(/^\//, '')}`;
  } else {
    // Fallback propre (image générée par UI Avatars)
    imgUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(project.title)}&background=161625&color=fff&size=512&font-size=0.33`;
  }

  // Est-ce que c'est le projet star (LeMindsetDuTao) ?
  const isStarProject = project.title === "LeMindsetDuTao.com";

  return (
    <div className={`bg-white dark:bg-[#161625] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group ${
      isStarProject 
        ? 'border-2 border-purple-500 shadow-purple-500/20' 
        : 'border border-gray-200 dark:border-gray-800'
    }`}>
      
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img 
          src={imgUrl} 
          alt={`Aperçu du projet ${project.title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50 shadow-sm">
          {project.category}
        </div>
        {isStarProject && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1">
            ⭐ Projet Phare
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <span className={`text-xs px-2 py-1 rounded-md border font-medium ${
            project.links.status === 'Site publié' 
              ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800/50'
              : project.links.status === 'En déploiement'
              ? 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800/50'
              : 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700'
          }`}>
            {project.links.status}
          </span>
        </div>
        
        <div className="mb-5 space-y-3 text-sm text-gray-600 dark:text-gray-400 flex-grow">
          <div>
            <span className="font-bold dark:text-gray-300 block mb-1">🎯 Le problème :</span> 
            {project.problem}
          </div>
          <div>
            <span className="font-bold dark:text-gray-300 block mb-1">💡 La solution :</span> 
            {project.solution}
          </div>
          <div className="bg-gray-50 dark:bg-[#0D0D1A] p-3 rounded-lg border border-gray-100 dark:border-gray-800 mt-2">
            <span className="font-bold text-blue-700 dark:text-blue-400 block mb-1">📊 Résultat :</span> 
            <span className="text-gray-700 dark:text-gray-300">{project.result}</span>
          </div>
          <div className="italic text-gray-500 dark:text-gray-500 pt-1 border-t border-gray-100 dark:border-gray-800 mt-3">
            <span className="font-semibold not-italic text-purple-600 dark:text-purple-400">Ce que ça prouve : </span>
            {project.proof}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map(tech => (
            <span 
              key={tech} 
              className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md border border-gray-200 dark:border-gray-700 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {project.links.code && (
            <a 
              href={project.links.code} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              <FaGithub size={16} />
              <span>Code Source</span>
            </a>
          )}
          {project.links.demo && (
            <a 
              href={project.links.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-bold transition-colors shadow-lg ${
                isStarProject 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-purple-500/20'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20'
              }`}
            >
              <ExternalLink size={16} />
              <span>Voir le projet</span>
            </a>
          )}
          {!project.links.demo && !project.links.code && (
            <div className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-100 dark:bg-gray-800/50 text-gray-500 dark:text-gray-500 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-800 cursor-not-allowed">
              <Code2 size={16} />
              <span>{project.links.status}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
