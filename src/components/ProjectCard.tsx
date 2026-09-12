import { useState, useEffect, useRef } from 'react';
import type { Project } from '../data/portfolioData';
import { ExternalLink, ChevronLeft, ChevronRight, Image as ImageIcon, Globe, Database, Brain, Calendar, Cpu, GitPullRequest, Layout } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { 
  SiNextdotjs, SiSupabase, SiGooglegemini, SiReact, SiTypescript, 
  SiWordpress, SiHostinger, SiPhp, SiBootstrap, SiChartdotjs, 
  SiJavascript, SiXampp, SiGithub, SiPython 
} from 'react-icons/si';

interface ProjectCardProps {
  project: Project;
}

const TechIcon = ({ tech }: { tech: string }) => {
  const iconProps = { className: "w-3.5 h-3.5" };
  switch (tech.toLowerCase()) {
    case 'next.js': return <SiNextdotjs {...iconProps} />;
    case 'supabase': return <SiSupabase {...iconProps} />;
    case 'google gemini': return <SiGooglegemini {...iconProps} />;
    case 'react': return <SiReact {...iconProps} />;
    case 'typescript': return <SiTypescript {...iconProps} />;
    case 'wordpress': return <SiWordpress {...iconProps} />;
    case 'hostinger': return <SiHostinger {...iconProps} />;
    case 'php': return <SiPhp {...iconProps} />;
    case 'bootstrap': return <SiBootstrap {...iconProps} />;
    case 'chart.js': return <SiChartdotjs {...iconProps} />;
    case 'javascript': return <SiJavascript {...iconProps} />;
    case 'xampp': return <SiXampp {...iconProps} />;
    case 'github': return <SiGithub {...iconProps} />;
    case 'python': return <SiPython {...iconProps} />;
    case 'web app': return <Globe {...iconProps} />;
    case 'seo': return <Globe {...iconProps} />;
    case 'data': return <Database {...iconProps} />;
    case 'ia': return <Brain {...iconProps} />;
    case 'logique algorithmique': return <Brain {...iconProps} />;
    case 'calendly': return <Calendar {...iconProps} />;
    case 'iot': return <Cpu {...iconProps} />;
    case 'ltspice': return <Cpu {...iconProps} />;
    case 'cycle en v': return <GitPullRequest {...iconProps} />;
    case 'ux/ui': return <Layout {...iconProps} />;
    default: return null;
  }
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasImages = project.images && project.images.length > 0;
  
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const imagesCount = hasImages ? project.images.length : 1;

  const nextSlide = (manual = false) => {
    if (manual) handleManualInteraction('right');
    setCurrentSlide((prev) => (prev + 1) % imagesCount);
  };

  const prevSlide = (manual = false) => {
    if (manual) handleManualInteraction('left');
    setCurrentSlide((prev) => (prev - 1 + imagesCount) % imagesCount);
  };

  const handleManualInteraction = (dir: 'left' | 'right') => {
    setDirection(dir);
    if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    if (idleTimer.current) clearTimeout(idleTimer.current);
    
    // Pause auto-play for 10s after manual interaction
    idleTimer.current = setTimeout(() => {
      startAutoPlay();
    }, 10000);
  };

  const startAutoPlay = () => {
    if (imagesCount <= 1) return;
    if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    
    autoPlayTimer.current = setInterval(() => {
      if (direction === 'right') {
        setCurrentSlide((prev) => (prev + 1) % imagesCount);
      } else {
        setCurrentSlide((prev) => (prev - 1 + imagesCount) % imagesCount);
      }
    }, 3000);
  };

  useEffect(() => {
    if (!isHovered) {
      startAutoPlay();
    } else {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    }
    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [isHovered, direction, imagesCount]);


  return (
    <div className="bg-white dark:bg-[#161625] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group border border-gray-200 dark:border-gray-800">
      
      {/* Image Carousel Container */}
      <div 
        className="relative h-48 sm:h-56 overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {hasImages ? (
          <>
            <div 
              className="flex w-full h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {project.images.map((img, idx) => (
                <div key={idx} className="w-full h-full shrink-0">
                  <img 
                    src={`${import.meta.env.BASE_URL}assets/images/projects/${img.replace(/^\//, '')}`} 
                    alt={`Aperçu ${idx + 1} du projet ${project.title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            
            {/* Carousel Controls */}
            {imagesCount > 1 && (
              <>
                <button 
                  onClick={(e) => { e.preventDefault(); prevSlide(true); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                  aria-label="Image précédente"
                >
                  <ChevronLeft size={18} />
                </button>
                <button 
                  onClick={(e) => { e.preventDefault(); nextSlide(true); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                  aria-label="Image suivante"
                >
                  <ChevronRight size={18} />
                </button>
                
                {/* Dots indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {project.images.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`h-1.5 rounded-full transition-all ${
                        currentSlide === idx ? 'w-4 bg-blue-500' : 'w-1.5 bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-[#0D0D1A] flex flex-col items-center justify-center text-gray-400 dark:text-gray-600">
            <ImageIcon size={32} className="mb-2 opacity-50" />
            <span className="text-xs font-medium uppercase tracking-widest opacity-60">En cours de capture</span>
          </div>
        )}

        <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50 shadow-sm">
          {project.category}
        </div>
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
            <span className="font-bold text-gray-900 dark:text-gray-200 mb-1 block">Le problème :</span> 
            {project.problem}
          </div>
          <div>
            <span className="font-bold text-gray-900 dark:text-gray-200 mb-1 block">La solution :</span> 
            {project.solution}
          </div>
          <div className="bg-gray-50 dark:bg-[#0D0D1A] p-3 rounded-lg border border-gray-100 dark:border-gray-800 mt-2">
            <span className="font-bold text-gray-900 dark:text-gray-200 mb-1 block">Résultat :</span> 
            <span className="text-gray-700 dark:text-gray-300">{project.result}</span>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map(tech => (
            <span 
              key={tech} 
              className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md border border-gray-200 dark:border-gray-700 font-medium"
            >
              <TechIcon tech={tech} />
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
              className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-bold transition-colors shadow-sm bg-blue-600 hover:bg-blue-700 text-white"
            >
              <ExternalLink size={16} />
              <span>Voir le projet</span>
            </a>
          )}
          {!project.links.demo && !project.links.code && (
            <div className="w-full flex items-center justify-center py-2.5 px-4 bg-gray-50 dark:bg-gray-800/30 text-gray-400 dark:text-gray-500 rounded-lg text-sm font-medium border border-gray-100 dark:border-gray-800 cursor-not-allowed">
              <span>Action non disponible</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
