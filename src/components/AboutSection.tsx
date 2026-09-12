import { portfolioData } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#090914]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Texte de présentation */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
              À <span className="text-blue-500">Propos</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-8 rounded-full"></div>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>{portfolioData.about.description}</p>
            </div>
          </div>

          {/* Points clés */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-[#161625] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Problem Solver</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                J'aime décortiquer les défis techniques pour concevoir des architectures solides et évolutives.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 dark:bg-[#161625] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Toujours à l'affût des dernières avancées en IA pour les intégrer au cœur d'applications web modernes.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 dark:bg-[#161625] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow sm:col-span-2">
              <div className="flex items-center gap-4">
                <div className="text-3xl">🚀</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Dynamisme</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Capable de m'adapter rapidement à de nouvelles stacks et de gérer des projets de A à Z.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
