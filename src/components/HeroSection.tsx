import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-3xl -z-10 animate-blob"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content (Text) */}
        <div className="flex-1 text-center lg:text-left z-10">
          <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase mb-3">
            Bonjour, je suis
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
            {portfolioData.hero.name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">{portfolioData.hero.title}</span>
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
        <div className="flex-1 flex flex-col items-center lg:items-end z-10 w-full max-w-md lg:max-w-none gap-8">
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
            {/* Glowing borders/decorations */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-[2rem] lg:rounded-[3rem] rotate-6 opacity-50 dark:opacity-70 blur-lg animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-[2rem] lg:rounded-[3rem] -rotate-3 transition-transform hover:rotate-0 duration-500"></div>
            
            {/* Image container */}
            <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-[2rem] lg:rounded-[3rem] overflow-hidden">
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
          <div className="w-full max-w-sm bg-white dark:bg-[#161625] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold tracking-wider text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-full uppercase">
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
