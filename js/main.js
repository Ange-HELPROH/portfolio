/* ==========================================================================
   FICHIER JAVASCRIPT PRINCIPAL - PORTFOLIO ANGE TEUFACK
   Cette version centralise le menu mobile, le thème clair/sombre,
   la langue FR/EN, les animations et le formulaire statique.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    /* ----------------------------------------------------------------------
       1. CONFIGURATION GLOBALE
       On centralise ici les clés localStorage et les valeurs par défaut
       pour garder une logique de préférences simple et maintenable.
       ---------------------------------------------------------------------- */
    const STORAGE_KEYS = {
        theme: 'portfolio-theme',
        language: 'portfolio-language'
    };

    const DEFAULT_THEME = 'light';
    const DEFAULT_LANGUAGE = 'fr';

    /* ----------------------------------------------------------------------
       2. CATALOGUE DE TRADUCTIONS
       L'objet contient les textes visibles principaux du portfolio
       et sert aussi pour certains attributs ARIA et métadonnées.
       ---------------------------------------------------------------------- */
    const translations = {
        fr: {
            meta: {
                title: "Ange Teufack | Portfolio étudiant ingénieur Data, IA, IoT & Web",
                description: "Portfolio d'Ange Teufack, étudiant ingénieur à l'ECAM-EPMI, orienté Data, IA, IoT et développement web. Découvrez ses projets, compétences, expériences et contact."
            },
            header: {
                linktreeAria: "Linktree d'Ange Teufack",
                linkedinAria: "Profil LinkedIn d'Ange Teufack",
                githubAria: "Profil GitHub d'Ange Teufack",
                languageButtonAria: "Passer le site en anglais",
                themeLightAria: "Activer le thème clair",
                themeDarkAria: "Activer le thème sombre"
            },
            menu: {
                open: "Ouvrir le menu de navigation",
                close: "Fermer le menu de navigation"
            },
            nav: {
                about: "À propos",
                projects: "Projets",
                skills: "Compétences",
                experiences: "Expériences",
                certifications: "Certifications",
                contact: "Contact"
            },
            hero: {
                firstName: "Ange",
                lastName: "TEUFACK",
                eyebrow: "Recherche d’alternance",
                profileKicker: "Profil",
                certificationsKicker: "Certifications mises en avant",
                certificationsText: "Deux validations visibles pour appuyer rapidement le positionnement IA et IoT.",
                title: "\u00c9tudiant Ing\u00e9nieur Data Science & IA",
                subtitle: "Data Science \u00b7 IA g\u00e9n\u00e9rative \u00b7 IoT \u00b7 Automatisation",
                description: "Je con\u00e7ois des solutions concr\u00e8tes en Data, IA et IoT : dashboards, automatisations, assistants IA et syst\u00e8mes connect\u00e9s.",
                badgesAria: "Objectif d'alternance et informations cl\u00e9s",
                badgeGoal: "Recherche d\u2019alternance",
                badgeRhythm: "1 semaine \u00e9cole / 3 semaines entreprise",
                badgeDate: "Septembre 2026",
                badgeLanguages: "FR \u00b7 EN \u00b7 IT",
                badgeLocation: "Herblay 95220 \u00b7 Val-d\u2019Oise \u00b7 \u00cele-de-France",
                opportunity: "Disponible pour une alternance à partir de septembre 2026, avec un rythme école / entreprise adaptable selon le calendrier.",
                ctaProjects: "Voir mes projets",
                ctaCv: "Télécharger mon CV"
            },
            about: {
                title: "À propos de moi",
                paragraph1: "Étudiant ingénieur à l’ECAM-EPMI, je me spécialise en Data Science, Intelligence Artificielle et IoT. Je conçois des projets concrets mêlant analyse de données, automatisation, applications web et systèmes connectés.",
                paragraph2: "Je recherche une alternance dès septembre 2026 pour contribuer à des projets utiles en Data, IA ou IoT, avec un rythme souhaité d’1 semaine école / 3 semaines entreprise.",
                paragraph3: "Basé à Herblay (95220), dans le Val-d’Oise, je reste mobile en Île-de-France.",
                proofsAria: "Repères clés du profil",
                proof1Title: "Étudiant ingénieur ECAM-EPMI",
                proof1Subtitle: "Parcours Data Science, IA & IoT",
                proof2Title: "Recherche d’alternance – Sept. 2026",
                proof2Subtitle: "Rythme souhaité : 1 semaine école / 3 semaines entreprise",
                proof3Title: "Herblay 95220 · Val-d’Oise",
                proof3Subtitle: "Mobilité Île-de-France"
            },
            stats: {
                githubRepos: "Repos GitHub",
                githubReposHint: "Projets techniques publiés",
                languages: "Langues",
                languagesHint: "Courant · Professionnel · Notions",
                availability: "Alternance",
                availabilityHint: "Disponibilité confirmée",
                projects: "Projets",
                projectsHint: "Réalisés en équipe et en solo"
            },
            skills: {
                title: "Mes Compétences",
                intro: "Je privilégie les outils qui transforment un besoin réel en solution concrète : application, automatisation, analyse de données et système connecté.",
                categories: {
                    dataAi: "Data & IA",
                    webSoftware: "Web & Logiciel",
                    iotConnected: "IoT & Systèmes connectés",
                    toolsEnvironments: "Outils & Environnements"
                },
                tags: {
                    pandasNumpy: "Pandas/NumPy",
                    chatgptApi: "ChatGPT API",
                    aiAutomation: "Automatisation IA",
                    googleAiStudio: "Google AI Studio"
                }
            },
            projects: {
                title: "Mes Projets",
                intro: "Une sélection de projets concrets en Data, IA, IoT et développement web, présentés sous forme de mini études de cas.",
                hiddenTemporary: "Projet masqué temporairement.",
                labels: {
                    githubCode: "Code GitHub",
                    website: "Voir le site",
                    demoPreparing: "Démo non publique",
                    privateCode: "Code privé",
                    caseStudy: "Étude de cas",
                    prevImage: "Image précédente",
                    nextImage: "Image suivante"
                },
                fintrack: {
                    title: "FinTrack — Plateforme de gestion financière personnelle",
                    badge: "Prototype sécurisé",
                    carouselAria: "Galerie du projet FinTrack",
                    problem: "<strong>Problème :</strong> Le suivi des revenus, dépenses et indicateurs financiers devient vite difficile sans interface centralisée et lisible.",
                    solution: "<strong>Solution :</strong> Application web permettant de centraliser les revenus, dépenses et visualisations via un tableau de bord moderne.",
                    technologies: "<strong>Technologies :</strong> PHP · Bootstrap · Chart.js · JavaScript · XAMPP",
                    result: "<strong>Résultat :</strong> Prototype fonctionnel de gestion financière personnelle avec visualisation des données et organisation des modules.",
                    proof: "<strong>Ce que ce projet prouve :</strong> Capacité à construire une application web utile, structurée, orientée données et expérience utilisateur."
                },
                lemindset: {
                    title: "LeMindsetDuTao.com — Site vitrine coaching & bien-être",
                    badge: "Site publié",
                    carouselAria: "Galerie du projet LeMindsetDuTao.com",
                    fallbackAria: "Aperçu visuel du projet LeMindsetDuTao.com",
                    fallbackLabel: "LeMindsetDuTao.com",
                    problem: "<strong>Problème :</strong> Un coach avait besoin d’une présence professionnelle en ligne pour présenter ses services, formations, consultations et contenus.",
                    solution: "<strong>Solution :</strong> Création d’un site vitrine structuré avec pages de vente, prise de rendez-vous, contenus, ebook, témoignages et optimisation SEO.",
                    technologies: "<strong>Technologies :</strong> WordPress · Hostinger · UX/UI · SEO · Calendly",
                    result: "<strong>Résultat :</strong> Site professionnel publié permettant de présenter clairement l’offre, de renforcer la crédibilité et de faciliter la prise de contact.",
                    proof: "<strong>Ce que ce projet prouve :</strong> Capacité à comprendre un besoin client réel, structurer une offre et livrer une solution web professionnelle."
                },
                ecovolt: {
                    title: "EcoVolt Engineering — Chargeur AC/DC 230V→5V/1A",
                    badge: "Projet académique",
                    carouselAria: "Galerie du projet EcoVolt Engineering",
                    problem: "<strong>Problème :</strong> Concevoir une alimentation conforme à un cahier des charges technique avec contraintes de sécurité, coût, planification et impact environnemental.",
                    solution: "<strong>Solution :</strong> Pilotage d’un projet d’équipe intégrant cycle en V, Gantt, simulations LTspice, modélisation 3D, choix techniques et analyse ACV.",
                    technologies: "<strong>Technologies :</strong> LTspice · Proteus · Tinkercad · Fusion · Cycle en V · Gantt",
                    result: "<strong>Résultat :</strong> Projet académique structuré, réalisé en équipe de 5, avec livrables techniques et organisation de projet.",
                    proof: "<strong>Ce que ce projet prouve :</strong> Leadership, gestion de projet technique, compréhension des systèmes électroniques et capacité à coordonner une équipe."
                },
                etudencia: {
                    title: "Etudencia — Plateforme de ressources étudiantes",
                    badge: "Site publié",
                    carouselAria: "Galerie du projet Etudencia",
                    problem: "<strong>Problème :</strong> Les étudiants ont besoin d’un espace clair pour retrouver des guides, conseils et ressources utiles.",
                    solution: "<strong>Solution :</strong> Conception d’une plateforme web orientée contenu, orientation et accompagnement étudiant.",
                    technologies: "<strong>Technologies :</strong> TypeScript · Web app · UI/UX · GitHub",
                    result: "<strong>Résultat :</strong> Site publié et accessible en ligne, pensé pour aider les étudiants à mieux s’orienter et trouver des ressources.",
                    proof: "<strong>Ce que ce projet prouve :</strong> Capacité à créer une plateforme web utile, orientée utilisateur et contenu."
                },
                etdia: {
                    title: "EtdIA — Chatbot d’assistance étudiante",
                    badge: "Prototype IA",
                    carouselAria: "Galerie du projet EtdIA",
                    fallbackAria: "Aperçu visuel du projet EtdIA",
                    fallbackLabel: "EtdIA",
                    problem: "<strong>Problème :</strong> Les étudiants perdent du temps à chercher des informations simples dans plusieurs supports.",
                    solution: "<strong>Solution :</strong> Prototype de chatbot web permettant de centraliser l’assistance, les questions fréquentes et l’orientation utilisateur.",
                    technologies: "<strong>Technologies :</strong> HTML · CSS · JavaScript · Chatbase · LLM",
                    result: "<strong>Résultat :</strong> Prototype IA permettant d’explorer l’intégration d’un assistant conversationnel dans un contexte étudiant.",
                    proof: "<strong>Ce que ce projet prouve :</strong> Compréhension des usages IA, intégration web et logique d’assistance utilisateur."
                },
                guessingGame: {
                    title: "Jeu Devinette Python — Logique algorithmique",
                    badge: "Python",
                    carouselAria: "Galerie du projet Jeu Devinette Python",
                    fallbackAria: "Aperçu visuel du projet Jeu Devinette Python",
                    fallbackLabel: "Jeu Devinette Python",
                    problem: "<strong>Problème :</strong> Apprendre et pratiquer les bases de la logique algorithmique avec un projet simple et concret.",
                    solution: "<strong>Solution :</strong> Création d’un mini-jeu en Python basé sur les conditions, boucles, entrées utilisateur et logique de comparaison.",
                    technologies: "<strong>Technologies :</strong> Python · Programmation orientée objet · Terminal",
                    result: "<strong>Résultat :</strong> Projet simple mais utile pour consolider les bases Python et la structuration du code.",
                    proof: "<strong>Ce que ce projet prouve :</strong> Bases solides en algorithmique, raisonnement logique et apprentissage progressif de Python."
                }
            },
            experiences: {
                title: "Mes Expériences",
                labels: {
                    teaching: "Transmission",
                    visibility: "Veille & contenu",
                    project: "Projet technique"
                },
                teaching: {
                    title: "Étudiant enseignant — Numéro 1 Scolarité",
                    description: "Accompagnement d’élèves en mathématiques, physique, chimie, français et informatique. Adaptation des explications au niveau de chaque élève, avec une approche claire, structurée et pédagogique.",
                    proofs: {
                        pedagogy: "Pédagogie",
                        organization: "Organisation",
                        transmission: "Transmission"
                    }
                },
                ecovolt: {
                    title: "Chef de projet — EcoVolt Engineering",
                    description: "Coordination d’une équipe de 5 étudiants sur un projet de chargeur AC/DC 230V→5V/1A. Suivi du cahier des charges, cycle en V, Gantt, simulations et livrables techniques.",
                    proofs: {
                        team: "Équipe de 5",
                        vcycle: "Cycle en V",
                        ltspice: "LTspice"
                    }
                },
                contentCreator: {
                    title: "Créateur de contenu Tech — LinkedIn",
                    description: "Publication de contenus pédagogiques sur la Data, l’IA, l’IoT et la carrière tech. Cette activité montre ma capacité à vulgariser, structurer des idées et maintenir une veille active.",
                    stats: {
                        writing: "Rédaction",
                        popularization: "Vulgarisation",
                        monitoringValue: "Veille",
                        monitoring: "tech"
                    }
                }
            },
            certifications: {
                title: "Certifications",
                labels: {
                    onlineLearning: "Formation en ligne",
                    viewCertificate: "Voir le certificat"
                },
                generativeAi: {
                    name: "Découvrir l’IA générative",
                    issuer: "LinkedIn Learning",
                    description: "Formation suivie pour structurer les bases de l’IA générative, comprendre ses usages et mieux l’intégrer dans des projets concrets."
                },
                iot: {
                    name: "Les fondements de l’IoT",
                    issuer: "LinkedIn Learning",
                    description: "Formation suivie pour renforcer la compréhension de l’architecture des objets connectés, de la transmission des données et des usages IoT."
                }
            },
            events: {
                title: "Mes Événements",
                tekkit: {
                    title: "Génération IA & Tech 2026 — Tekkit",
                    location: "<i class=\"fas fa-map-marker-alt\"></i> Station F, Paris",
                    date: "<i class=\"far fa-calendar-alt\"></i> Avril 2026",
                    description: "Conférence IA et Tech. Rencontres avec BNP Paribas, Bpifrance, SNCF Connect & Tech, CNP Assurances."
                }
            },
            contact: {
                title: "Me contacter",
                subtitle: "Échangeons sur une alternance, un projet ou une collaboration.",
                text: "Vous pouvez me contacter par e-mail, LinkedIn, GitHub ou via le formulaire ci-dessous. Je suis disponible pour une alternance en Data, IA, IoT ou développement logiciel à partir de septembre 2026.",
                cvButton: "Télécharger mon CV PDF",
                labels: {
                    email: "E-mail",
                    linkedin: "LinkedIn",
                    github: "GitHub",
                    linktree: "Linktree"
                }
            },
            form: {
                intro: "Le formulaire ouvre votre messagerie avec un message prérempli. Sans backend, c'est l'option la plus réaliste pour un portfolio statique.",
                nameLabel: "Nom complet",
                namePlaceholder: "Votre nom et prénom",
                nameHelp: "Champ requis. Indiquez votre nom complet.",
                emailLabel: "Adresse e-mail",
                emailPlaceholder: "votre@email.com",
                emailHelp: "Champ requis. Utilisez une adresse e-mail valide.",
                messageLabel: "Message",
                messagePlaceholder: "Décrivez brièvement votre besoin, votre projet ou votre opportunité...",
                messageHelp: "Champ requis. Décrivez brièvement votre besoin ou votre projet.",
                statusIdle: "",
                submit: "Envoyer le message",
                statusError: "Le formulaire contient des champs incomplets ou invalides. Vérifiez le nom, l’e-mail et le message.",
                statusSuccess: "La messagerie est ouverte avec le message prérempli.",
                mailSubjectPrefix: "Contact portfolio",
                mailGreeting: "Bonjour Ange,",
                mailIntro: "Je vous contacte depuis votre portfolio.",
                mailBodyName: "Nom",
                mailBodyEmail: "E-mail",
                mailBodyMessage: "Message",
                mailClosing: "Cordialement"
            },
            fallbacks: {
                profile: "Photo de profil indisponible",
                projectVisual: "Visuel indisponible",
                eventVisual: "Visuel indisponible",
                certificateVisual: "Visuel indisponible"
            },
            alts: {
                profile: "Portrait professionnel d'Ange Teufack",
                certGenerativeAi: "Certificat LinkedIn Learning Découvrir l’IA générative",
                certIot: "Certificat LinkedIn Learning Les fondements de l’IoT",
                fintrack01: "Tableau de bord du projet FinTrack",
                fintrack02: "Écran d'accueil du projet FinTrack",
                fintrack03: "Vue du dépôt du projet FinTrack",
                lemindset01: "Page d'accueil du site LeMindsetDuTao.com",
                lemindset02: "Section services du site LeMindsetDuTao.com",
                lemindset03: "Intégration de prise de rendez-vous sur LeMindsetDuTao.com",
                ecovolt01: "Simulation LTspice du projet EcoVolt Engineering",
                ecovolt02: "Planning Gantt du projet EcoVolt Engineering",
                ecovolt03: "Modélisation 3D du projet EcoVolt Engineering",
                etudencia01: "Page d'accueil du projet Etudencia",
                etudencia02: "Page interne du projet Etudencia",
                etudencia03: "Vue du dépôt du projet Etudencia",
                etdia01: "Interface chatbot du projet EtdIA",
                etdia02: "Interface web du projet EtdIA",
                etdia03: "Code source du projet EtdIA",
                guessingGame01: "Exécution terminal du Jeu Devinette Python",
                guessingGame02: "Code source du Jeu Devinette Python"
            },
            footer: {
                copyright: "Conçu et développé par Ange Teufack © 2026",
                tech: "Fait avec HTML · CSS · JS · GitHub Pages"
            }
        },
        en: {
            meta: {
                title: "Ange Teufack | Engineering Student Portfolio in Data, AI, IoT & Web",
                description: "Portfolio of Ange Teufack, engineering student at ECAM-EPMI focused on Data, AI, IoT and web development. Explore projects, skills, experience and contact details."
            },
            header: {
                linktreeAria: "Ange Teufack's Linktree",
                linkedinAria: "Ange Teufack's LinkedIn profile",
                githubAria: "Ange Teufack's GitHub profile",
                languageButtonAria: "Switch the website to French",
                themeLightAria: "Switch to light theme",
                themeDarkAria: "Switch to dark theme"
            },
            menu: {
                open: "Open the navigation menu",
                close: "Close the navigation menu"
            },
            nav: {
                about: "About",
                projects: "Projects",
                skills: "Skills",
                experiences: "Experience",
                certifications: "Certificates",
                contact: "Get in touch"
            },
            hero: {
                firstName: "Ange",
                lastName: "TEUFACK",
                eyebrow: "Looking for a work-study program",
                profileKicker: "Profile",
                certificationsKicker: "Featured certifications",
                certificationsText: "Two visible credentials to support the AI and IoT positioning right away.",
                title: "Engineering Student in Data Science & AI",
                subtitle: "Data Science \u00b7 Generative AI \u00b7 IoT \u00b7 Automation",
                description: "I build practical solutions in Data, AI and IoT: dashboards, automations, AI assistants and connected systems.",
                badgesAria: "Work-study objective and key profile information",
                badgeGoal: "Work-study",
                badgeRhythm: "1 week at school / 3 weeks in company",
                badgeDate: "September 2026",
                badgeLanguages: "FR \u00b7 EN \u00b7 IT",
                badgeLocation: "Herblay 95220 \u00b7 Val-d\u2019Oise \u00b7 Greater Paris Region",
                opportunity: "Available for a work-study program from September 2026, with an adaptable school / company rhythm depending on the academic calendar.",
                ctaProjects: "View my projects",
                ctaCv: "Download my CV"
            },
            about: {
                title: "About me",
                paragraph1: "Engineering student at ECAM-EPMI, I specialize in Data Science, Artificial Intelligence and IoT. I build practical projects combining data analysis, automation, web applications and connected systems.",
                paragraph2: "I am looking for a work-study program from September 2026 to contribute to practical projects in Data, AI or IoT, with a preferred rhythm of 1 week at school / 3 weeks in company.",
                paragraph3: "Based in Herblay (95220), Val-d\u2019Oise, I am mobile across the Greater Paris Region.",
                proofsAria: "Key profile highlights",
                proof1Title: "ECAM-EPMI engineering student",
                proof1Subtitle: "Data Science, AI & IoT track",
                proof2Title: "Work-study search – Sept. 2026",
                proof2Subtitle: "Preferred rhythm: 1 week at school / 3 weeks in company",
                proof3Title: "Herblay 95220 · Val-d’Oise",
                proof3Subtitle: "Greater Paris Region mobility"
            },
            stats: {
                githubRepos: "GitHub repos",
                githubReposHint: "Published technical projects",
                languages: "Languages",
                languagesHint: "Fluent · Professional · Working knowledge",
                availability: "Work-study",
                availabilityHint: "Availability confirmed",
                projects: "Projects",
                projectsHint: "Delivered in team and solo settings"
            },
            skills: {
                title: "My Skills",
                intro: "I prioritize tools that turn a real need into a concrete solution: application, automation, data analysis and connected systems.",
                categories: {
                    dataAi: "Data & AI",
                    webSoftware: "Web & Software",
                    iotConnected: "IoT & Connected Systems",
                    toolsEnvironments: "Tools & Environments"
                },
                tags: {
                    pandasNumpy: "Pandas/NumPy",
                    chatgptApi: "ChatGPT API",
                    aiAutomation: "AI Automation",
                    googleAiStudio: "Google AI Studio"
                }
            },
            projects: {
                title: "My Projects",
                intro: "A selection of concrete projects in Data, AI, IoT and web development, presented as compact case studies.",
                hiddenTemporary: "Project temporarily hidden.",
                labels: {
                    githubCode: "GitHub code",
                    website: "Visit website",
                    demoPreparing: "Non-public demo",
                    privateCode: "Private code",
                    caseStudy: "Case study",
                    prevImage: "Previous image",
                    nextImage: "Next image"
                },
                fintrack: {
                    title: "FinTrack — Personal finance management platform",
                    badge: "Secured prototype",
                    carouselAria: "Gallery for the FinTrack project",
                    problem: "<strong>Problem:</strong> Tracking income, expenses and financial indicators quickly becomes difficult without a centralized and readable interface.",
                    solution: "<strong>Solution:</strong> Web application designed to centralize income, expenses and visualizations through a modern dashboard.",
                    technologies: "<strong>Technologies:</strong> PHP · Bootstrap · Chart.js · JavaScript · XAMPP",
                    result: "<strong>Result:</strong> Functional personal finance management prototype with data visualization and organized modules.",
                    proof: "<strong>What this project demonstrates:</strong> Ability to build a useful, structured web application focused on data and user experience."
                },
                lemindset: {
                    title: "LeMindsetDuTao.com — Coaching & wellbeing showcase website",
                    badge: "Published website",
                    carouselAria: "Gallery for the LeMindsetDuTao.com project",
                    fallbackAria: "Visual preview for the LeMindsetDuTao.com project",
                    fallbackLabel: "LeMindsetDuTao.com",
                    problem: "<strong>Problem:</strong> A coach needed a professional online presence to present services, training, consultations and content.",
                    solution: "<strong>Solution:</strong> Creation of a structured showcase website with sales pages, booking flow, content, ebook, testimonials and SEO optimization.",
                    technologies: "<strong>Technologies:</strong> WordPress · Hostinger · UX/UI · SEO · Calendly",
                    result: "<strong>Result:</strong> Published professional website that clearly presents the offer, reinforces credibility and makes contact easier.",
                    proof: "<strong>What this project demonstrates:</strong> Ability to understand a real client need, structure an offer and deliver a professional web solution."
                },
                ecovolt: {
                    title: "EcoVolt Engineering — 230V→5V/1A AC/DC charger",
                    badge: "Academic project",
                    carouselAria: "Gallery for the EcoVolt Engineering project",
                    problem: "<strong>Problem:</strong> Design a power supply that meets a technical specification while handling safety, cost, planning and environmental impact constraints.",
                    solution: "<strong>Solution:</strong> Team project coordination integrating V-cycle, Gantt planning, LTspice simulations, 3D modeling, technical choices and life cycle analysis.",
                    technologies: "<strong>Technologies:</strong> LTspice · Proteus · Tinkercad · Fusion · V-cycle · Gantt",
                    result: "<strong>Result:</strong> Structured academic project completed by a team of 5 with technical deliverables and project organization.",
                    proof: "<strong>What this project demonstrates:</strong> Leadership, technical project management, understanding of electronic systems and ability to coordinate a team."
                },
                etudencia: {
                    title: "Etudencia — Student resources platform",
                    badge: "Published website",
                    carouselAria: "Gallery for the Etudencia project",
                    problem: "<strong>Problem:</strong> Students need a clear place to find guides, advice and useful resources.",
                    solution: "<strong>Solution:</strong> Design of a web platform focused on content, orientation and student support.",
                    technologies: "<strong>Technologies:</strong> TypeScript · Web app · UI/UX · GitHub",
                    result: "<strong>Result:</strong> Published website accessible online, designed to help students orient themselves and find resources more easily.",
                    proof: "<strong>What this project demonstrates:</strong> Ability to create a useful web platform focused on users and content."
                },
                etdia: {
                    title: "EtdIA — Student support chatbot",
                    badge: "AI prototype",
                    carouselAria: "Gallery for the EtdIA project",
                    fallbackAria: "Visual preview for the EtdIA project",
                    fallbackLabel: "EtdIA",
                    problem: "<strong>Problem:</strong> Students lose time searching for simple information across multiple sources.",
                    solution: "<strong>Solution:</strong> Web chatbot prototype designed to centralize support, FAQ handling and user guidance.",
                    technologies: "<strong>Technologies:</strong> HTML · CSS · JavaScript · Chatbase · LLM",
                    result: "<strong>Result:</strong> AI prototype used to explore the integration of a conversational assistant in a student context.",
                    proof: "<strong>What this project demonstrates:</strong> Understanding of AI use cases, web integration and user assistance logic."
                },
                guessingGame: {
                    title: "Python Guessing Game — Algorithmic logic",
                    badge: "Python",
                    carouselAria: "Gallery for the Python Guessing Game project",
                    fallbackAria: "Visual preview for the Python Guessing Game project",
                    fallbackLabel: "Python Guessing Game",
                    problem: "<strong>Problem:</strong> Learn and practice the basics of algorithmic logic through a simple and concrete project.",
                    solution: "<strong>Solution:</strong> Creation of a small Python game based on conditions, loops, user input and comparison logic.",
                    technologies: "<strong>Technologies:</strong> Python · Object-oriented programming · Terminal",
                    result: "<strong>Result:</strong> Simple but useful project to reinforce Python fundamentals and code structuring.",
                    proof: "<strong>What this project demonstrates:</strong> Solid basics in algorithms, logical reasoning and progressive Python learning."
                }
            },
            experiences: {
                title: "My Experience",
                labels: {
                    teaching: "Teaching",
                    visibility: "Content & outreach",
                    project: "Technical project"
                },
                teaching: {
                    title: "Student tutor — Numéro 1 Scolarité",
                    description: "Support for students in mathematics, physics, chemistry, French and computer science. Explanations adapted to each learner’s level with a clear and structured teaching approach.",
                    proofs: {
                        pedagogy: "Pedagogy",
                        organization: "Organization",
                        transmission: "Knowledge transfer"
                    }
                },
                ecovolt: {
                    title: "Project manager — EcoVolt Engineering",
                    description: "Coordination of a 5-student team on an AC/DC 230V→5V/1A charger project. Follow-up of specifications, V-cycle, Gantt planning, simulations and technical deliverables.",
                    proofs: {
                        team: "5-student team",
                        vcycle: "V-cycle",
                        ltspice: "LTspice"
                    }
                },
                contentCreator: {
                    title: "Tech content creator — LinkedIn",
                    description: "Publication of educational content about Data, AI, IoT and tech careers. This activity shows my ability to explain concepts clearly, structure ideas and maintain active monitoring.",
                    stats: {
                        writing: "Writing",
                        popularization: "Simplification",
                        monitoringValue: "Tech",
                        monitoring: "monitoring"
                    }
                }
            },
            certifications: {
                title: "Certificates",
                labels: {
                    onlineLearning: "Online course",
                    viewCertificate: "View certificate"
                },
                generativeAi: {
                    name: "Discovering Generative AI",
                    issuer: "LinkedIn Learning",
                    description: "Training completed to structure the fundamentals of generative AI, understand its use cases and apply it in concrete projects."
                },
                iot: {
                    name: "IoT Foundations",
                    issuer: "LinkedIn Learning",
                    description: "Training completed to strengthen my understanding of connected-device architecture, data transmission and IoT use cases."
                }
            },
            events: {
                title: "My Events",
                tekkit: {
                    title: "AI & Tech Generation 2026 — Tekkit",
                    location: "<i class=\"fas fa-map-marker-alt\"></i> Station F, Paris",
                    date: "<i class=\"far fa-calendar-alt\"></i> April 2026",
                    description: "AI and Tech conference. Meetings with BNP Paribas, Bpifrance, SNCF Connect & Tech, and CNP Assurances."
                }
            },
            contact: {
                title: "Contact me",
                subtitle: "Let's discuss a work-study opportunity, a project or a collaboration.",
                text: "You can reach me by email, LinkedIn, GitHub or through the form below. I am available for a Data, AI, IoT or software development work-study opportunity from September 2026.",
                cvButton: "Download my PDF CV",
                labels: {
                    email: "Email",
                    linkedin: "LinkedIn",
                    github: "GitHub",
                    linktree: "Linktree"
                }
            },
            form: {
                intro: "The form opens your email client with a pre-filled message. Without a backend, this is the most realistic option for a static portfolio.",
                nameLabel: "Full name",
                namePlaceholder: "Your full name",
                nameHelp: "Required field. Enter your full name.",
                emailLabel: "Email address",
                emailPlaceholder: "your@email.com",
                emailHelp: "Required field. Use a valid email address.",
                messageLabel: "Your message",
                messagePlaceholder: "Briefly describe your need, project or opportunity...",
                messageHelp: "Required field. Briefly describe your need or project.",
                statusIdle: "",
                submit: "Send message",
                statusError: "The form contains incomplete or invalid fields. Check the name, email and message.",
                statusSuccess: "Your email client opened with the pre-filled message.",
                mailSubjectPrefix: "Contact portfolio",
                mailGreeting: "Hello Ange,",
                mailIntro: "I am contacting you from your portfolio.",
                mailBodyName: "Name",
                mailBodyEmail: "Email",
                mailBodyMessage: "Your message",
                mailClosing: "Best regards"
            },
            fallbacks: {
                profile: "Profile photo unavailable",
                projectVisual: "Visual unavailable",
                eventVisual: "Visual unavailable",
                certificateVisual: "Visual unavailable"
            },
            alts: {
                profile: "Professional portrait of Ange Teufack",
                certGenerativeAi: "LinkedIn Learning certificate Discovering Generative AI",
                certIot: "LinkedIn Learning certificate IoT Foundations",
                fintrack01: "Dashboard of the FinTrack project",
                fintrack02: "Home screen of the FinTrack project",
                fintrack03: "Repository view of the FinTrack project",
                lemindset01: "Homepage of the LeMindsetDuTao.com website",
                lemindset02: "Services section of the LeMindsetDuTao.com website",
                lemindset03: "Booking integration on LeMindsetDuTao.com",
                ecovolt01: "LTspice simulation of the EcoVolt Engineering project",
                ecovolt02: "Gantt planning of the EcoVolt Engineering project",
                ecovolt03: "3D model of the EcoVolt Engineering project",
                etudencia01: "Homepage of the Etudencia project",
                etudencia02: "Internal page of the Etudencia project",
                etudencia03: "Repository view of the Etudencia project",
                etdia01: "Chatbot interface of the EtdIA project",
                etdia02: "Web interface of the EtdIA project",
                etdia03: "Source code of the EtdIA project",
                guessingGame01: "Terminal execution of the Python Guessing Game",
                guessingGame02: "Source code of the Python Guessing Game"
            },
            footer: {
                copyright: "Designed and developed by Ange Teufack © 2026",
                tech: "Built with HTML · CSS · JS · GitHub Pages"
            }
        }
    };

    /* ----------------------------------------------------------------------
       3. UTILITAIRES DOM ET ÉTAT
       Ces helpers évitent de répéter les mêmes sélecteurs et règles.
       ---------------------------------------------------------------------- */
    const body = document.body;
    const root = document.documentElement;
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-item');
    const themeToggle = document.getElementById('theme-toggle');
    const languageToggle = document.getElementById('language-toggle');
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    const metaDescription = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const state = {
        language: DEFAULT_LANGUAGE,
        theme: DEFAULT_THEME
    };

    /* ----------------------------------------------------------------------
       4. RÉCUPÉRATION DE VALEURS DE TRADUCTION
       On résout une clé de type "hero.title" dans l'objet de langue courant.
       ---------------------------------------------------------------------- */
    const getTranslation = (language, key) => {
        return key.split('.').reduce((value, currentKey) => {
            return value && value[currentKey] !== undefined ? value[currentKey] : null;
        }, translations[language]);
    };

    /* ----------------------------------------------------------------------
       5. APPLICATION DU CONTENU TRADUIT
       Chaque type d'attribut est géré séparément pour rester explicite:
       texte, HTML, placeholder, aria-label, etc.
       ---------------------------------------------------------------------- */
    const translateElements = (language) => {
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const translatedText = getTranslation(language, element.dataset.i18n);
            if (translatedText !== null) {
                element.textContent = translatedText;
            }
        });

        document.querySelectorAll('[data-i18n-html]').forEach((element) => {
            const translatedHtml = getTranslation(language, element.dataset.i18nHtml);
            if (translatedHtml !== null) {
                element.innerHTML = translatedHtml;
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
            const translatedPlaceholder = getTranslation(language, element.dataset.i18nPlaceholder);
            if (translatedPlaceholder !== null) {
                element.setAttribute('placeholder', translatedPlaceholder);
            }
        });

        document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
            const translatedAriaLabel = getTranslation(language, element.dataset.i18nAriaLabel);
            if (translatedAriaLabel !== null) {
                element.setAttribute('aria-label', translatedAriaLabel);
            }
        });

        document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
            const translatedAlt = getTranslation(language, element.dataset.i18nAlt);
            if (translatedAlt !== null) {
                element.setAttribute('alt', translatedAlt);
            }
        });
    };

    /* ----------------------------------------------------------------------
       6. MISE À JOUR DES MÉTADONNÉES
       Cela garde le titre et les descriptions cohérents avec la langue active.
       ---------------------------------------------------------------------- */
    const updateMetaContent = (language) => {
        const meta = translations[language].meta;
        document.title = meta.title;

        if (metaDescription) metaDescription.setAttribute('content', meta.description);
        if (ogTitle) ogTitle.setAttribute('content', meta.title);
        if (ogDescription) ogDescription.setAttribute('content', meta.description);
        if (twitterTitle) twitterTitle.setAttribute('content', meta.title);
        if (twitterDescription) twitterDescription.setAttribute('content', meta.description);
    };

    /* ----------------------------------------------------------------------
       7. BOUTONS DE PRÉFÉRENCES
       Le bouton langue affiche la langue cible.
       Le bouton thème affiche l'icône du thème vers lequel on va basculer.
       ---------------------------------------------------------------------- */
    const updatePreferenceButtons = () => {
        if (languageToggle) {
            languageToggle.textContent = state.language === 'fr' ? 'EN' : 'FR';
            languageToggle.setAttribute('aria-label', translations[state.language].header.languageButtonAria);
        }

        if (themeToggle) {
            const themeIcon = themeToggle.querySelector('i');
            const nextThemeIsDark = state.theme === 'light';

            if (themeIcon) {
                themeIcon.className = nextThemeIsDark ? 'fas fa-moon' : 'fas fa-sun';
            }

            themeToggle.setAttribute(
                'aria-label',
                nextThemeIsDark
                    ? translations[state.language].header.themeDarkAria
                    : translations[state.language].header.themeLightAria
            );
        }
    };

    /* ----------------------------------------------------------------------
       8. ARIA DU MENU MOBILE
       On synchronise toujours aria-expanded et aria-label avec l'état réel.
       ---------------------------------------------------------------------- */
    const updateMenuAccessibility = (isOpen) => {
        if (!burgerMenu) return;

        burgerMenu.setAttribute('aria-expanded', String(isOpen));
        burgerMenu.setAttribute(
            'aria-label',
            isOpen ? translations[state.language].menu.close : translations[state.language].menu.open
        );
    };

    const setMobileMenuState = (shouldOpen) => {
        if (!burgerMenu || !navLinks) return;

        navLinks.classList.toggle('active', shouldOpen);
        burgerMenu.classList.toggle('active', shouldOpen);
        updateMenuAccessibility(shouldOpen);
    };

    /* ----------------------------------------------------------------------
       9. THÈME CLAIR / SOMBRE
       Le body porte explicitement une classe light-theme ou dark-theme.
       ---------------------------------------------------------------------- */
    const applyTheme = (theme, persist = true) => {
        state.theme = theme === 'dark' ? 'dark' : 'light';

        body.classList.toggle('dark-theme', state.theme === 'dark');
        body.classList.toggle('light-theme', state.theme === 'light');

        if (persist) {
            localStorage.setItem(STORAGE_KEYS.theme, state.theme);
        }

        if (themeColorMeta) {
            themeColorMeta.setAttribute('content', state.theme === 'dark' ? '#0D1117' : '#F4F8FC');
        }

        updatePreferenceButtons();
    };

    /* ----------------------------------------------------------------------
       10. LANGUE FR / EN
       On applique toutes les traductions visibles sans dupliquer la page HTML.
       ---------------------------------------------------------------------- */
    const applyLanguage = (language, persist = true) => {
        state.language = translations[language] ? language : DEFAULT_LANGUAGE;

        root.setAttribute('lang', state.language);
        translateElements(state.language);
        updateMetaContent(state.language);
        updatePreferenceButtons();
        updateMenuAccessibility(navLinks ? navLinks.classList.contains('active') : false);

        if (formStatus) {
            const statusKey = formStatus.dataset.statusMessageKey || 'form.statusIdle';
            const translatedStatus = getTranslation(state.language, statusKey);

            if (translatedStatus !== null) {
                formStatus.textContent = translatedStatus;
            }
        }

        if (persist) {
            localStorage.setItem(STORAGE_KEYS.language, state.language);
        }
    };

    /* ----------------------------------------------------------------------
       11. INITIALISATION DES PRÉFÉRENCES
       La langue par défaut est le français et le thème par défaut est clair.
       ---------------------------------------------------------------------- */
    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || DEFAULT_THEME;
    const savedLanguage = localStorage.getItem(STORAGE_KEYS.language) || DEFAULT_LANGUAGE;

    applyTheme(savedTheme, false);
    applyLanguage(savedLanguage, false);

    /* ----------------------------------------------------------------------
       12. ÉVÉNEMENTS DES BOUTONS DE PRÉFÉRENCES
       Un clic bascule simplement vers l'autre état puis sauvegarde.
       ---------------------------------------------------------------------- */
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            applyTheme(state.theme === 'light' ? 'dark' : 'light');
        });
    }

    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            applyLanguage(state.language === 'fr' ? 'en' : 'fr');
        });
    }

    /* ----------------------------------------------------------------------
       13. MENU BURGER ACCESSIBLE
       Le menu peut être ouvert/fermé au clic, au clavier et via Escape.
       ---------------------------------------------------------------------- */
    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', () => {
            setMobileMenuState(!navLinks.classList.contains('active'));
        });

        burgerMenu.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                setMobileMenuState(false);
            }
        });
    }

    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            setMobileMenuState(false);
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
            setMobileMenuState(false);
        }
    });

    /* ----------------------------------------------------------------------
       14. CAROUSELS DES PROJETS
       Chaque projet possède sa propre galerie. La logique reste volontairement
       simple: une slide visible à la fois, avec support clavier et compteur.
       ---------------------------------------------------------------------- */
    const projectCarousels = document.querySelectorAll('[data-carousel]');

    const updateCarousel = (carousel, nextIndex) => {
        const slides = carousel.querySelectorAll('[data-carousel-slide]');
        const status = carousel.querySelector('[data-carousel-status]');

        if (!slides.length) return;

        const normalizedIndex = (nextIndex + slides.length) % slides.length;
        carousel.dataset.carouselIndex = String(normalizedIndex);

        slides.forEach((slide, slideIndex) => {
            const isActive = slideIndex === normalizedIndex;
            slide.hidden = !isActive;
            slide.setAttribute('aria-hidden', String(!isActive));
        });

        if (status) {
            status.textContent = `${normalizedIndex + 1} / ${slides.length}`;
        }
    };

    projectCarousels.forEach((carousel) => {
        const slides = carousel.querySelectorAll('[data-carousel-slide]');
        const previousButton = carousel.querySelector('[data-carousel-prev]');
        const nextButton = carousel.querySelector('[data-carousel-next]');

        if (!slides.length) return;

        /* ------------------------------------------------------------------
           Quand une seule slide reste, on bascule en mode statique :
           pas de boutons inutiles, pas de navigation clavier trompeuse.
           ------------------------------------------------------------------ */
        if (slides.length === 1) {
            carousel.classList.add('project-carousel-static');
            carousel.removeAttribute('tabindex');
        }

        updateCarousel(carousel, 0);

        if (previousButton && slides.length > 1) {
            previousButton.addEventListener('click', () => {
                const currentIndex = Number(carousel.dataset.carouselIndex || '0');
                updateCarousel(carousel, currentIndex - 1);
            });
        }

        if (nextButton && slides.length > 1) {
            nextButton.addEventListener('click', () => {
                const currentIndex = Number(carousel.dataset.carouselIndex || '0');
                updateCarousel(carousel, currentIndex + 1);
            });
        }

        carousel.addEventListener('keydown', (event) => {
            if (slides.length <= 1) return;

            const currentIndex = Number(carousel.dataset.carouselIndex || '0');

            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                updateCarousel(carousel, currentIndex - 1);
            }

            if (event.key === 'ArrowRight') {
                event.preventDefault();
                updateCarousel(carousel, currentIndex + 1);
            }

            if (event.key === 'Home') {
                event.preventDefault();
                updateCarousel(carousel, 0);
            }

            if (event.key === 'End') {
                event.preventDefault();
                updateCarousel(carousel, slides.length - 1);
            }
        });
    });

    /* ----------------------------------------------------------------------
       15. ANIMATIONS AU SCROLL
       IntersectionObserver garde le comportement existant avec un coût faible.
       ---------------------------------------------------------------------- */
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                currentObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    fadeElements.forEach((element) => {
        observer.observe(element);
    });

    /* ----------------------------------------------------------------------
       16. HEADER AU SCROLL
       On garde le comportement existant en ajoutant une classe contextuelle.
       ---------------------------------------------------------------------- */
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (!header) return;
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    /* ----------------------------------------------------------------------
       17. FORMULAIRE DE CONTACT STATIQUE
       Le formulaire reste réaliste pour un portfolio sans backend:
       validation native + génération propre du mailto + message accessible.
       ---------------------------------------------------------------------- */
    const updateFormStatus = (translationKey, statusType) => {
        if (!formStatus) return;

        const translatedStatus = getTranslation(state.language, translationKey);
        formStatus.textContent = translatedStatus !== null ? translatedStatus : '';
        formStatus.dataset.status = statusType;
        formStatus.dataset.statusMessageKey = translationKey;
    };

    if (contactForm && formStatus && nameInput && emailInput && messageInput) {
        formStatus.dataset.statusMessageKey = 'form.statusIdle';

        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                updateFormStatus('form.statusError', 'error');
                return;
            }

            const nameValue = nameInput.value.trim();
            const emailValue = emailInput.value.trim();
            const messageValue = messageInput.value.trim();

            const mailSubjectPrefix = getTranslation(state.language, 'form.mailSubjectPrefix');
            const mailGreeting = getTranslation(state.language, 'form.mailGreeting');
            const mailIntro = getTranslation(state.language, 'form.mailIntro');
            const mailBodyName = getTranslation(state.language, 'form.mailBodyName');
            const mailBodyEmail = getTranslation(state.language, 'form.mailBodyEmail');
            const mailBodyMessage = getTranslation(state.language, 'form.mailBodyMessage');
            const mailClosing = getTranslation(state.language, 'form.mailClosing');

            const mailSubject = encodeURIComponent(`${mailSubjectPrefix} — ${nameValue}`);
            const mailBody = encodeURIComponent(
                `${mailGreeting}\n\n` +
                `${mailIntro}\n\n` +
                `${mailBodyName} : ${nameValue}\n` +
                `${mailBodyEmail} : ${emailValue}\n\n` +
                `${mailBodyMessage} :\n${messageValue}\n\n` +
                `${mailClosing},\n${nameValue}`
            );

            updateFormStatus('form.statusSuccess', 'success');

            window.location.href = `mailto:angeteufackjunior@gmail.com?subject=${mailSubject}&body=${mailBody}`;
            contactForm.reset();
        });
    }
});
