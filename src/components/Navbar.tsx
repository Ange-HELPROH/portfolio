import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navLinks = [
    { name: 'À propos', href: '/#about' },
    { name: 'Parcours', href: '/#experience' },
    { name: 'Compétences', href: '/#skills' },
    { name: 'Certifications', href: '/#certifications' },
    { name: 'Projets', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-[#0D0D1A]/70 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center shrink-0">
              {/* Photo de profil pour Mobile (<768px) */}
              <img 
                src={`${import.meta.env.BASE_URL}assets/images/photo_profil_Ange_TEUFACK.png`}
                alt="Profil"
                className="w-11 h-11 rounded-full object-cover object-top border border-gray-200 dark:border-gray-700 md:hidden shadow-sm"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Ange+Teufack&background=0D0D1A&color=fff&size=512';
                }}
              />
              {/* Texte "Ange." pour Desktop (>=768px) */}
              <span className="text-xl font-bold text-gray-900 dark:text-white hidden md:block">
                {portfolioData.hero.name.split(' ')[0]}<span className="text-blue-500">.</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors shrink-0"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <a
                href={`${import.meta.env.BASE_URL}assets/cv/CV%20-%20Alternance%20Data%20Science%20et%20IA%202026%20-%20Ange%20Teufack.pdf`}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shrink-0"
              >
                <Download size={18} />
                <span>CV</span>
              </a>
            </div>
          </div>
          
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-400 shrink-0"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white shrink-0"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0D0D1A] border-b border-gray-200 dark:border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.href} 
                onClick={() => setIsOpen(false)} 
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`${import.meta.env.BASE_URL}assets/cv/CV%20-%20Alternance%20Data%20Science%20et%20IA%202026%20-%20Ange%20Teufack.pdf`}
              className="mt-4 flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
            >
              <Download size={18} />
              <span>Télécharger CV</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
