import React from 'react';
import { motion } from 'framer-motion';
import Title from "./Title";

// --- Imports des technologies ---
import imgHTML from "/assets/techno/html.png";
import imgCSS from "/assets/techno/css.png";
import imgjs from "/assets/techno/js.png";
import imgREACT from "/assets/techno/react.png";
import imgFLUTTER from "/assets/techno/flu.png";
import imgTYPE from "/assets/techno/ts.png";
import imgLARAVEL from "/assets/techno/lara.png";
import imgPHP from "/assets/techno/php.png";
import imGMYSQL from "/assets/techno/my.png";
import imgGITHUB from "/assets/techno/github.png";
import imgWORDPRESS from "/assets/techno/wps.png";
import imgFIGMA from "/assets/techno/figma.png";

// --- Imports des entreprises ---
import adnLogo from "/assets/companies/adng1.png";

const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 3, name: "JavaScript", image: imgjs },
  { id: 4, name: "TypeScript", image: imgTYPE },
  { id: 5, name: "React", image: imgREACT },
  { id: 6, name: "Flutter", image: imgFLUTTER },
  { id: 7, name: "Laravel", image: imgLARAVEL },
  { id: 8, name: "Php", image: imgPHP },
  { id: 9, name: "MySQL", image: imGMYSQL },
  { id: 10, name: "Github", image: imgGITHUB },
  { id: 11, name: "Wordpress", image: imgWORDPRESS },
  { id: 12, name: "Figma", image: imgFIGMA },
];

const experiences = [
  {
    id: 1,
    role: "Web Engineer",
    company: "ADN-G1",
    period: "2024 - 2025",
    description: [
      "Développement d'un Système Intégré de Gestion des Ressources Humaines (SIRH) complet.",
      "Optimisation des performances serveur et sécurisation des flux de données sensibles.",
    ],
    image: adnLogo,
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "ADN-G1",
    period: "2023 - 2024",
    description: [
      "Conception d'une plateforme de collaboration interne avec messagerie temps réel.",
      "Création d'une application de vote dynamique haute disponibilité pour compétitions.",
    ],
    image: adnLogo,
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "ADN-G1",
    period: "2022 - 2023",
    description: [
      "Refonte de l'interface utilisateur pour les modules de gestion RH.",
      "Mise en place d'un Design System réutilisable sous React.",
    ],
    image: adnLogo,
  },
];

const Experience: React.FC = () => {
  return (
    <section id="Experiences" className="bg-slate-950 w-full min-h-screen py-24 overflow-hidden">
      
      {/* Conteneur principal sans marges forcées */}
      <div className="w-full px-6 md:px-16 lg:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <Title title="Compétences & Expériences" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* --- SECTION GAUCHE : SKILLS --- */}
          <div className="w-full lg:w-1/2 grid grid-cols-3 sm:grid-cols-4 gap-6 md:gap-10">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center group cursor-default"
              >
                {/* Card Skill corrigée (couleur Slate-900) */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-slate-900/80 rounded-2xl border border-white/5 transition-all duration-500 ease-out group-hover:border-blue-500/40 group-hover:bg-slate-800 shadow-2xl">
                  
                  {/* Effet de lueur douce au survol */}
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-600/5 blur-2xl rounded-full transition-opacity duration-500"></div>
                  
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-12 h-12 md:w-14 md:h-14 object-contain relative z-10 transition-all duration-500 opacity-80 group-hover:opacity-100"
                  />
                </div>
                
                <span className="mt-4 text-[10px] font-bold text-slate-500 group-hover:text-blue-400 uppercase tracking-[0.2em] transition-all duration-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* --- SECTION DROITE : TIMELINE --- */}
          <div className="w-full lg:w-1/2 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l border-slate-800 hover:border-blue-500/50 transition-colors group"
              >
                {/* Point de la Timeline avec lueur */}
                <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-slate-950 border border-slate-700 rounded-full group-hover:bg-blue-500 group-hover:border-blue-500 transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)]"></div>

                <div className="bg-slate-900/40 border border-white/5 p-6 md:p-8 rounded-[2rem] backdrop-blur-sm group-hover:bg-slate-900/60 transition-all duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-5">
                      {/* Logo Entreprise */}
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center p-2.5 shadow-xl transition-transform group-hover:scale-105 duration-500">
                        <img src={exp.image} alt={exp.company} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <p className="text-blue-500 font-bold text-sm tracking-wide uppercase">{exp.company}</p>
                      </div>
                    </div>
                    <span className="inline-block px-4 py-1.5 bg-slate-800/50 text-slate-400 text-[10px] font-black rounded-full border border-white/5 uppercase tracking-tighter">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-4 text-slate-400 text-sm md:text-base leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 bg-blue-500/50 rounded-full shrink-0 group-hover:bg-blue-500 transition-colors"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;