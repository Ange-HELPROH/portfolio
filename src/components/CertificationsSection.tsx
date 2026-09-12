import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Award } from 'lucide-react';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-gray-50 dark:bg-[#0D0D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Mes <span className="text-blue-500">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Formations certifiantes validant mon expertise technique en IA et IoT.
          </p>
        </div>

        {/* Liste des certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.certifications.map(cert => (
            <div key={cert.id} className="bg-white dark:bg-[#161625] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row group border border-gray-200 dark:border-gray-800">
              
              {/* Image Container */}
              <div className="w-full md:w-2/5 h-48 md:h-auto overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/images/certificates/${cert.image}`} 
                  alt={`Certificat ${cert.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/50 shadow-sm flex items-center gap-1 uppercase tracking-wide">
                  <Award size={12} /> Formation en ligne
                </div>
              </div>

              {/* Content */}
              <div className="p-6 w-full md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {cert.title}
                  </h3>
                  <div className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-4">
                    {cert.organization}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>
                
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg text-sm font-semibold transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Voir le certificat</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
