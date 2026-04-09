import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
        hero_title: "Salut, je suis ACHILLE TAMO",
        hero_description: "Je suis un développeur passionné par la création d’applications web modernes et performantes. Curieux et motivé, j’aime apprendre de nouvelles technologies et relever des défis pour améliorer mes compétences",
        download_cv: "Télécharger mon CV",
        contact_me: "Contactez moi",
        about: "À propos",
        contact: "Contact",
        projects: "Projets",
        skills: "Compétences",
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_skills: "Compétences",
        nav_projects: "Projets",
        nav_contact: "Contact",
        hire_me: "Engagez-moi",
        about_title: "À propos de moi",
        about_description: "Je suis titulaire d’un DEC en informatique de gestion et passionné par le développement web. Curieux et motivé, j’aime apprendre continuellement et relever de nouveaux défis pour améliorer mes compétences. Au fil de mes projets, j’ai développé des bases solides en programmation, notamment en création d’applications web modernes et interactives. J’accorde une attention particulière à la qualité du code, à l’expérience utilisateur et à la performance. Mon objectif est de continuer à évoluer dans le domaine du développement, collaborer sur des projets concrets et apporter des solutions efficaces et innovantes.",
        education: "Éducation",
        experience: "Années d'expérience",
        projects_completed: "Projets terminés",
        learn_more: "En savoir plus",
        skills_title: "Mes",
        skills_highlight: "Compétences",
        skills_description: "Un ensemble de compétences variées en développement, allant des langages bas niveau aux frameworks modernes pour créer des applications complètes et performantes.",

        softskills_title: "Compétences",
        softskills_highlight: "professionnelles",
        softskills_description: "Des qualités essentielles qui me permettent de travailler efficacement en équipe, m’adapter rapidement et résoudre des problèmes complexes.",

        soft_adaptability: "Adaptabilité",
        soft_pressure: "Travail sous pression",
        soft_teamwork: "Esprit d’équipe",
        soft_problem: "Résolution de problèmes",
        soft_communication: "Communication",
        soft_time: "Gestion du temps",
        soft_autonomy: "Autonomie",
        soft_learning: "Apprentissage rapide",
        projects_title: "Mes",
        projects_highlight: "Projets",
        projects_description: "Un aperçu de mes récents travaux",

        project1_title: "Système de recherche d’images médicales",
        project1_desc: "Application web permettant de rechercher des images médicales similaires grâce à des techniques avancées d’extraction et de similarité.",

        project2_title: "Application de visualisation d’images",
        project2_desc: "Application desktop permettant la manipulation avancée d’images avec une architecture logicielle propre.",

        project3_title: "Plateforme e-commerce de chaussures",
        project3_desc: "Site e-commerce complet avec gestion des utilisateurs et des commandes.",

        code: "Code",
        view_projects: "Voir tous les projets",
        contact_title: "Contactez",
        contact_highlight: "Moi",
        contact_subtitle: "Discutons de vos projets",

        first_name: "Prénom",
        last_name: "Nom",
        email: "Adresse mail",
        phone: "Numéro de téléphone",
        message: "Votre message",

        send_message: "Envoyer votre message",
        footer_role: "Développeur Full Stack & Designer UI/UX",
        made_with: "Fait avec",
        by: "par",
    },
  },
  en: {
    translation: {
        hero_title: "Hi, I'm ACHILLE  TAMO",
        hero_description: "I am a developer passionate about building modern and high-performance web applications. Curious and motivated, I enjoy learning new technologies and taking on challenges to improve my skills",
        download_cv: "Download my CV",
        contact_me: "Contact me",
        about: "About",
        contact: "Contact",
        projects: "Projects",
        skills: "Skills",
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hire_me: "Hire me",
        about_title: "About me",
        about_description: "I hold a diploma in computer science and management and I am passionate about web development. Curious and motivated, I enjoy continuously learning and taking on new challenges to improve my skills. Through my projects, I have built a solid foundation in programming, especially in developing modern and interactive web applications. I pay special attention to code quality, user experience, and performance. My goal is to keep growing in the development field, collaborate on real-world projects, and deliver efficient and innovative solutions.",
        education: "Education",
        experience: "Years of experience",
        projects_completed: "Completed projects",
        learn_more: "Learn more",
        skills_title: "My",
        skills_highlight: "Skills",
        skills_description: "A diverse set of development skills, ranging from low-level languages to modern frameworks for building complete and high-performance applications.",

        softskills_title: "Professional",
        softskills_highlight: "Skills",
        softskills_description: "Essential qualities that allow me to work effectively in teams, adapt quickly, and solve complex problems.",

        soft_adaptability: "Adaptability",
        soft_pressure: "Work under pressure",
        soft_teamwork: "Teamwork",
        soft_problem: "Problem solving",
        soft_communication: "Communication",
        soft_time: "Time management",
        soft_autonomy: "Autonomy",
        soft_learning: "Fast learning",
        projects_title: "My",
        projects_highlight: "Projects",
        projects_description: "A showcase of my recent work",

        project1_title: "Medical Image Search System",
        project1_desc: "Web application that searches for similar medical images using advanced feature extraction and similarity techniques.",

        project2_title: "Image Visualization Application",
        project2_desc: "Desktop application for advanced image manipulation with a clean software architecture.",

        project3_title: "Shoe E-commerce Platform",
        project3_desc: "Full e-commerce website with user and order management.",

        code: "Code",
        view_projects: "View all projects",
        contact_title: "Contact",
        contact_highlight: "Me",
        contact_subtitle: "Let's talk about your project",

        first_name: "First name",
        last_name: "Last name",
        email: "Email address",
        phone: "Phone number",
        message: "Your message",

        send_message: "Send message",
        footer_role: "Full Stack Developer & UI/UX Designer",
        made_with: "Made with",
        by: "by",
        
    },
  },
};

const userLang = navigator.language.startsWith("fr") ? "fr" : "en";

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || userLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;