import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-[#0D0D1A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Mon <span className="text-blue-500">Parcours</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-3 md:ml-6 space-y-12">
          {portfolioData.experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12">
              
              {/* Icône de la timeline */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full flex items-center justify-center border-4 border-gray-50 dark:border-[#0D0D1A] bg-blue-600 text-white">
                {exp.company === "HelprohTechDev" ? <Briefcase size={14} /> : <GraduationCap size={14} />}
              </div>

              {/* Contenu de la carte */}
              <div className="bg-white dark:bg-[#161625] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full border border-blue-100 dark:border-blue-800/30 whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
                
                <h4 className="text-md font-semibold text-gray-600 dark:text-gray-400 mb-4">
                  {exp.company}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md border border-gray-200 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
