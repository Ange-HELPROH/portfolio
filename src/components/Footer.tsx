import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#090914] border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {currentYear} {portfolioData.hero.name}. Tous droits réservés.
          </p>
        </div>
        
        <div className="flex items-center space-x-6">
          <a
            href={portfolioData.hero.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub size={24} />
          </a>
          <a
            href={portfolioData.hero.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
