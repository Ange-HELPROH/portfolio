import { Target, Lightbulb, Rocket, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function AboutPage() {
  // S'assurer qu'on remonte en haut de la page au chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 md:py-32 bg-white dark:bg-[#090914] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 font-medium mb-12 transition-colors">
          <ArrowLeft size={20} />
          <span>Retour à l'accueil</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          À <span className="text-blue-500">Propos</span> de moi
        </h1>
        <div className="w-20 h-1 bg-blue-600 mb-12 rounded-full"></div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
          <p className="text-xl font-medium leading-relaxed mb-8">
            Je suis étudiant à l'ÉSTIAM en Bac+3 (filière Data et App Design), à la recherche d'une alternance (4 jours entreprise / 1 jour école) pour la rentrée 2026. Passionné par la Data Science, l'Intelligence Artificielle et le Développement Web, je m'efforce de concevoir des solutions complètes, de la modélisation des données jusqu'à l'expérience utilisateur finale.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Mon Approche</h2>
          <p className="leading-relaxed mb-6">
            Mon parcours a été forgé par des projets ambitieux, tels que <strong>HELPROH</strong> et <strong>AIProh</strong>, où j'ai appris que la technique n'est qu'un moyen au service d'un besoin. J'adopte une approche résolument orientée produit : avant de coder, je cherche à comprendre le problème métier, pour ensuite structurer la donnée de manière pérenne et développer une application robuste et évolutive.
          </p>

          <p className="leading-relaxed mb-12">
            La polyvalence est ma force. Capable de m'adapter rapidement à de nouveaux langages et technologies, je suis aussi à l'aise pour concevoir l'architecture backend d'un projet, mettre en place une API intelligente intégrant de l'IA, que pour designer une interface moderne et réactive.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-8">Ce qui me motive</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
            <div className="p-6 bg-gray-50 dark:bg-[#161625] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 dark:text-blue-500 mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Problem Solver</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                J'aime décortiquer les défis techniques pour concevoir des architectures solides et évolutives, en ne laissant rien au hasard.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 dark:bg-[#161625] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 dark:text-blue-500 mb-4">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Toujours à l'affût des dernières avancées en IA pour les intégrer au cœur d'applications web modernes et créer de la valeur.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 dark:bg-[#161625] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 dark:text-blue-500 mb-4">
                <Rocket size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Dynamisme</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Je m'adapte rapidement à de nouvelles stacks et j'ai la capacité de gérer des projets complexes de bout en bout avec autonomie.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
