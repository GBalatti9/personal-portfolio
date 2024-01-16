import React from 'react';
import ReactDOM from 'react-dom/client';
import { PorfolioApp } from './PorfolioApp.jsx';
import { ColorProvider } from './theme/context/ColorProvider.jsx';

import './index.css';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: true },
  lng: 'en',
  resources: {
    en: {
      translation: {
        downloadCV: 'Download CV',
        About: 'About',
        Projects: 'Projects',
        Contact: 'Contact',
        aboutMe: "About Me",
        sayHi: "Hi there! I'm a",
        passionateProgrammer: " passionate and dedicated programmer.",
        philosophy: "My journey in the world of coding is characterized by a simple yet effective philosophy: with every new technology or concept I acquire, I embark on a creative journey to build meaningful projects. You can explore some of my endeavors on my GitHub profile;",
        invitation: " I invite you to take a look.",
        enjoy: "I find joy in collaborating with multidisciplinary teams and learning from experienced individuals. ",
        problems: "Problem-solving is my forte,",
        challenges: "and I approach challenges with curiosity, proactivity, and responsibility. Beyond my technical skills, I bring a ",
        positivity: "positive and collaborative spirit",
        team: "to any team or project.",
        eager: "Eager to continue growing and learning, I'm always up for new opportunities and challenges. Let's not just code; ",
        cool: "let's build cool things together! ",
        reachOut: "Feel free to reach out, and let's create something amazing.",
        projectsTitle: 'Projects',
        contactTitle: 'Contact'
      }
    },
    es: {
      translation: {
        downloadCV: 'Descargar CV',
        About: 'Sobre mí',
        Projects: 'Proyectos',
        Contact: 'Contacto',
        aboutMe: "Sobre mí",
        sayHi: "¡Hola! Soy un ",
        passionateProgrammer: "programador apasionado y dedicado.",
        philosophy: "Mi camino en el mundo de la programación se caracteriza por una filosofía simple pero efectiva: con cada nueva tecnología o concepto que adquiero, me embarco en un viaje creativo para construir proyectos significativos. Puedes explorar algunos de mis esfuerzos en mi perfil de GitHub;",
        invitation: " ¡Pasá y mirá nomás!",
        enjoy: "Me encanta colaborar con equipos multidisciplinarios y aprender de personas con experiencia. ",
        problems: "La resolución de problemas es mi fuerte",
        challenges: "y afronto los desafíos con curiosidad, proactividad y responsabilidad. Más allá de mis habilidades técnicas, aporto un ",
        positivity: "espíritu positivo y colaborativo",
        team: "a cualquier equipo o proyecto.",
        eager: "Con muchas ganas de seguir creciendo y aprendiendo, siempre estoy dispuesto a nuevas oportunidades y desafíos. No nos limitemos a codificar; ",
        cool: "¡Construyamos grandes cosas juntos! ",
        reachOut: "No dudes en contactarme y creemos algo increíble.",
        projectsTitle: 'Proyectos',
        contactTitle: 'Contacto'
      },
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorProvider>
      <I18nextProvider i18n={i18next}>
        <PorfolioApp />
      </I18nextProvider>
    </ColorProvider>
  </React.StrictMode>,
)
