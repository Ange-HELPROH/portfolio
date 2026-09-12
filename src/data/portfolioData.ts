export type SkillLevel = 'Avancé' | 'Pratique' | 'Notions';

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  date: string;
  description: string;
  tags: string[];
}

export interface Education {
  id: number;
  school: string;
  degree: string;
  date: string;
  status: string;
}

export interface ProjectLinks {
  demo?: string;
  code?: string;
  status: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  featured: boolean;
  problem: string;
  solution: string;
  technologies: string[];
  images: string[];
  links: ProjectLinks;
  result: string;
  proof: string;
}

export interface Certification {
  id: number;
  title: string;
  organization: string;
  description: string;
  image: string;
  link: string;
}

export const portfolioData = {
  hero: {
    name: "Ange TEUFACK",
    title: "Étudiant Data Science, IA & Développement Web",
    catchphrase: "Je conçois des applications intelligentes de la base de données jusqu'à l'interface utilisateur. Problem solver avant tout, je transforme les besoins complexes en solutions concrètes.",
    location: "Herblay 95220, Val-d'Oise",
    availability: "Disponible pour une alternance (4 jours entreprise / 1 jour école) - Sept. 2026",
    languages: "Français (Langue maternelle), Anglais (Intermédiaire, B2), Italien (Notions, A2)",
    github: "https://github.com/Ange-HELPROH",
    linkedin: "https://www.linkedin.com/in/ange-teufack/",
  },
  about: {
    description: "Étudiant à l'ÉSTIAM en Bac+3, filière DAD (Data et App Design), Parcours 6, je me spécialise à l'intersection de la Data, de l'Intelligence Artificielle et de l'ingénierie logicielle. À travers la création de mon projet personnel HELPROH et la gestion de projets techniques complexes en équipe, je développe une approche orientée produit : comprendre le problème métier, structurer la donnée, et livrer un code propre et maintenable."
  },
  educations: [
    {
      id: 1,
      school: "ÉSTIAM",
      degree: "Bac+3, DAD (Data et App Design), Parcours 6",
      date: "2026 - en cours...",
      status: "Actuel"
    },
    {
      id: 2,
      school: "ECAM-EPMI",
      degree: "Cycle préparatoire (2 ans)",
      date: "Octobre 2024 à juin 2026",
      status: "Validé"
    }
  ] as Education[],
  experiences: [
    {
      id: 1,
      role: "Obtention du Baccalauréat",
      company: "Lycée [À compléter]",
      date: "[À compléter]",
      description: "Obtention du baccalauréat.",
      tags: ["Baccalauréat"]
    },
    {
      id: 2,
      role: "Cycle préparatoire intégré",
      company: "ECAM-EPMI",
      date: "octobre 2024 - juin 2026",
      description: "Cycle préparatoire à l'école d'ingénieurs ECAM-EPMI. En parallèle de ce cursus scientifique généraliste, j'ai commencé à développer mon activité de contenu HelprohTechDev (création de ressources pédagogiques en Data, IA et IoT) et assuré des cours de soutien (tutorat académique en mathématiques, physique et informatique).",
      tags: ["Mathématiques", "Physique", "Tutorat", "Création de contenu"]
    },
    {
      id: 3,
      role: "Chef de Projet Technique",
      company: "EcoVolt Engineering (ECAM-EPMI)",
      date: "Année scolaire 2025-2026",
      description: "Projet d'ingénierie mené en équipe de 5 étudiants. En tant que chef de projet, j'ai coordonné l'équipe, animé les réunions et structuré le planning (cycle en V, diagramme de Gantt). Le projet couvrait des domaines variés : électronique (architecture AC/DC, simulations LTspice, conception PCB), mécanique (modélisation 3D), économie (coûts/délais) et environnement (analyse du cycle de vie, impact carbone).",
      tags: ["Leadership", "Gestion de Projet", "Électronique", "Cycle en V"]
    },
    {
      id: 4,
      role: "Bac+3 DAD (Data et App Design)",
      company: "ÉSTIAM",
      date: "2026 - en cours...",
      description: "Transition vers l'ÉSTIAM (Parcours 6) pour me spécialiser dans mes domaines de prédilection : la Data Science, l'Intelligence Artificielle et le Développement Web. L'objectif de ce cursus est de concevoir des architectures de données pérennes et de développer des applications intelligentes capables d'intégrer des modèles d'IA générative.",
      tags: ["Data Science", "Intelligence Artificielle", "Développement Web"]
    }
  ] as Experience[],
  skills: [
    {
      category: "Data & IA",
      items: [
        { name: "Python (Pandas, NumPy)", level: "Avancé" },
        { name: "LLM & RAG", level: "Pratique" },
        { name: "ChatGPT API / AI Studio", level: "Pratique" }
      ]
    },
    {
      category: "Web & Logiciel",
      items: [
        { name: "HTML/CSS & Tailwind", level: "Avancé" },
        { name: "JavaScript / TypeScript", level: "Pratique" },
        { name: "React", level: "Pratique" },
        { name: "PHP / WordPress", level: "Notions" }
      ]
    },
    {
      category: "IoT & Outils",
      items: [
        { name: "Git / GitHub", level: "Avancé" },
        { name: "Arduino / ESP32", level: "Pratique" },
        { name: "LTspice / Proteus", level: "Pratique" },
        { name: "Fusion 360 / KiCad", level: "Pratique" }
      ]
    }
  ] as SkillCategory[],
  projects: [
    {
      id: 1,
      title: "AIProh",
      category: "Web & IA",
      featured: true,
      problem: "Les passionnés de tech manquent d'un espace centralisé pour apprendre, comprendre et pratiquer avec l'aide de l'IA.",
      solution: "Application de chat IA générative construite pour aider les passionnés de tech à apprendre et progresser.",
      technologies: ["Next.js", "Supabase", "Google Gemini", "React", "TypeScript"],
      images: [],
      links: {
        demo: "https://aiproh.vercel.app",
        status: "En déploiement"
      },
      result: "Produit en développement actif, architecture posée (chat, persistance en cours).",
      proof: "Capacité à concevoir un produit IA de A à Z, architecture technique, gestion produit."
    },
    {
      id: 2,
      title: "HELPROH",
      category: "Web & IA",
      featured: true,
      problem: "Les étudiants et passionnés tech manquent d'un espace structuré pour apprendre progressivement (formations, définitions, parcours).",
      solution: "Plateforme web d'apprentissage tech centralisant formations, définitions et parcours pédagogiques.",
      technologies: ["Web app", "Data", "IA"],
      images: [],
      links: {
        demo: "https://helproh.vercel.app",
        status: "En déploiement"
      },
      result: "Plateforme interactive en cours de développement.",
      proof: "Vision produit long terme, capacité à porter un écosystème numérique personnel."
    },
    {
      id: 3,
      title: "LeMindsetDuTao.com",
      category: "Web & UI/UX",
      featured: true,
      problem: "Carlos Dias, coach en développement personnel, hypnothérapie et médecine chinoise (plus de 20 ans d'expérience), avait besoin d'une présence professionnelle en ligne complète.",
      solution: "Conception et développement complet du site vitrine : intégration Calendly pour la prise de rendez-vous, pages de vente pour formations en ligne, section témoignages clients, ebook en vente directe, design adapté à l'univers du client.",
      technologies: ["WordPress", "Hostinger", "UX/UI", "SEO", "Calendly"],
      images: [],
      links: {
        demo: "https://www.lemindsetdutao.com/",
        status: "Site publié"
      },
      result: "Projet freelance livré et actuellement en ligne.",
      proof: "Capacité à comprendre un besoin client réel, structurer une offre et livrer une solution web professionnelle complète en autonomie."
    },
    {
      id: 4,
      title: "FinTrack",
      category: "Data & Logiciel",
      featured: true,
      problem: "Le suivi des revenus, dépenses et indicateurs financiers devient vite difficile sans interface centralisée et lisible.",
      solution: "Application web développée en équipe de 5 étudiants (contributeurs : Ayoub, Maroua et 1 autre) permettant le suivi des revenus/dépenses, visualisation via graphiques dynamiques, export de rapports en PDF.",
      technologies: ["PHP", "Bootstrap", "Chart.js", "JavaScript", "XAMPP"],
      images: ["fintrack.png"],
      links: {
        status: "Code privé, Démo non publique"
      },
      result: "Prototype fonctionnel de gestion financière personnelle avec visualisation des données.",
      proof: "Capacité à construire une application web utile, structurée, orientée données."
    },
    {
      id: 5,
      title: "EcoVolt Engineering",
      category: "IoT & Électronique",
      featured: false,
      problem: "Conception d'un chargeur AC/DC optimisé en équipe.",
      solution: "Coordination d'une équipe de 5 étudiants pour la conception d'un chargeur AC/DC. Gestion du cycle en V, suivi Gantt, modélisation 3D des composants et analyse du cycle de vie.",
      technologies: ["IoT", "LTspice", "Cycle en V"],
      images: ["ecovolt-engineering.png"],
      links: {
        status: "Projet Académique"
      },
      result: "Modélisation et planification complètes du projet d'ingénierie.",
      proof: "Capacité à gérer un projet IoT/électronique de bout en bout avec méthodologie."
    },
    {
      id: 6,
      title: "Etudencia",
      category: "Web & UI/UX",
      featured: false,
      problem: "Les étudiants étrangers souhaitant faire leurs études en France font face à des démarches administratives et académiques complexes.",
      solution: "Plateforme de conseil et d'orientation développée par mes soins, centralisant l'accompagnement Campus France (dossier, choix des universités, préparation aux entretiens), le soutien académique, et des ressources en ligne (guides, FAQ, centre d'aide).",
      technologies: ["TypeScript", "Web app", "UI/UX", "GitHub"],
      images: ["etudencia.png"],
      links: {
        demo: "https://www.etudencia.com/",
        status: "Site publié"
      },
      result: "Site web déployé et fonctionnel.",
      proof: "Capacité à créer une plateforme web utile, orientée utilisateur et contenu, pour un vrai besoin métier."
    },
    {
      id: 7,
      title: "Jeu Devinette Python",
      category: "Data & Logiciel",
      featured: false,
      problem: "Besoin d'un projet interactif pour maîtriser les bases de la logique algorithmique en Python.",
      solution: "Développement d'un jeu de devinette interactif en ligne de commande, avec gestion des erreurs, niveaux de difficulté et suivi des scores.",
      technologies: ["Python", "Logique Algorithmique"],
      images: [],
      links: {
        status: "Code privé"
      },
      result: "Jeu fonctionnel écrit en Python pur.",
      proof: "Maîtrise des fondamentaux de programmation et de la logique conditionnelle."
    }
  ] as Project[],
  certifications: [
    {
      id: 1,
      title: "Découvrir l'IA générative",
      organization: "LinkedIn Learning",
      description: "Fondamentaux de l'intelligence artificielle générative, concepts clés, modèles de langage et applications éthiques.",
      image: "cert-ia-generative.png",
      link: "#"
    },
    {
      id: 2,
      title: "Les fondements de l'IoT",
      organization: "LinkedIn Learning",
      description: "Architecture, capteurs, connectivité et sécurité des systèmes de l'Internet des Objets (IoT).",
      image: "cert-iot.png",
      link: "#"
    }
  ] as Certification[]
};
