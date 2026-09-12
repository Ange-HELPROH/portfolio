import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content (Text) */}
        <div className="flex-1 text-center lg:text-left z-10">
          <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase mb-3">
            Bonjour, je suis
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
            {portfolioData.hero.name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-6">
            <span className="text-blue-600 dark:text-blue-400">{portfolioData.hero.title}</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {portfolioData.hero.catchphrase}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold shadow-lg shadow-gray-900/20 dark:shadow-white/20 hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              Voir les Projets <ArrowRight size={20} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white dark:bg-[#161625] text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-800 rounded-full font-bold hover:border-blue-500 dark:hover:border-blue-500 transition-colors flex items-center justify-center gap-2"
            >
              Me Contacter <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Content (Image & Certs) */}
        <div className="flex-1 flex flex-col items-center lg:items-end z-10 w-full max-w-sm lg:max-w-none gap-6 mt-8 lg:mt-0">
          
          <div className="hidden md:block relative w-48 h-48 sm:w-56 sm:h-56 lg:w-[280px] lg:h-[280px] shrink-0">
            {/* Image container */}
            <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm">
              <img 
                src={`${import.meta.env.BASE_URL}assets/images/photo_profil_Ange_TEUFACK.png`}
                alt={`Photo de ${portfolioData.hero.name}`} 
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Ange+Teufack&background=0D0D1A&color=fff&size=512';
                }}
              />
            </div>
          </div>

          {/* Certifications Mises en Avant (Mini-Card) */}
          <div className="w-full max-w-[280px] sm:max-w-xs bg-white dark:bg-[#161625] p-4 sm:p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold tracking-wider text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full uppercase border border-gray-200 dark:border-gray-700">
                Certifications mises en avant
              </span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 font-medium">
              Deux validations visibles pour appuyer rapidement le positionnement IA et IoT.
            </p>
            
            <div className="space-y-3">
              {portfolioData.certifications.slice(0, 2).map(cert => (
                <a 
                  key={cert.id}
                  href="#certifications"
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-700 group"
                >
                  <img 
                    src={`${import.meta.env.BASE_URL}assets/images/certificates/${cert.image}`} 
                    alt={cert.title}
                    className="w-12 h-10 object-cover rounded-md shadow-sm border border-gray-200 dark:border-gray-700 group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white line-clamp-1">{cert.title}</h4>
                    <p className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">{cert.organization}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
