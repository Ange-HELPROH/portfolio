import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#0D0D1A] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 z-50 rounded shadow-lg font-bold">
        Aller au contenu principal
      </a>
      <Navbar />
      
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        <HeroSection />
        
        <AboutSection />
        
        <ExperienceSection />
        
        <SkillsSection />
        
        <CertificationsSection />
        
        <ProjectsSection />
        
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
