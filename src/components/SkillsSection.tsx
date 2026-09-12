import { portfolioData } from '../data/portfolioData';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#090914]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Mes <span className="text-blue-500">Compétences</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Un aperçu de mon stack technique, structuré par domaine d'expertise.
          </p>
        </div>

        {/* Grille des compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.skills.map((categoryObj) => (
            <div 
              key={categoryObj.category} 
              className="bg-gray-50 dark:bg-[#161625] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-800 pb-4">
                {categoryObj.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {categoryObj.items.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 transition-transform hover:-translate-y-1"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
