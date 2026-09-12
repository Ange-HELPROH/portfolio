
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#090914]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Texte de présentation court */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
            À <span className="text-blue-500">Propos</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8 rounded-full mx-auto"></div>
          
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
            <p>
              Je suis étudiant à l'ÉSTIAM en Data, IA et Développement Web. Mon approche se résume simplement : comprendre le besoin métier, concevoir une architecture solide, et livrer un produit performant et moderne.
            </p>
          </div>

          <Link 
            to="/a-propos" 
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-[#161625] dark:hover:bg-gray-800 text-gray-900 dark:text-white rounded-full font-bold transition-all shadow-sm border border-gray-200 dark:border-gray-800"
          >
            En savoir plus <ArrowRight size={18} />
          </Link>
          
        </div>
      </div>
    </section>
  );
}
