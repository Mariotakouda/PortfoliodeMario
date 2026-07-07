import type { FC } from "react";
import { motion } from "framer-motion";
import Title from "./Title";
import img from "/assets/profil.jpeg";

import imgHTML from "/assets/techno/html.png";
import imgCSS from "/assets/techno/css.png";
import imgjs from "/assets/techno/js.png";
import imgREACT from "/assets/techno/react.png";
import imgFLUTTER from "/assets/techno/flu.png";
import imgTYPE from "/assets/techno/ts.png";
import imgLARAVEL from "/assets/techno/lara.png";
import imgPHP from "/assets/techno/php.png";
import imGMYSQL from "/assets/techno/my.png";
import imgPOSTGRESQL from "/assets/techno/ps.svg";
import imgGITHUB from "/assets/techno/github.png";
import imgWORDPRESS from "/assets/techno/wps.png";
import imgFIGMA from "/assets/techno/figma.png";
import imgNEXTJS from "/assets/techno/njs.svg";
import imgODOO from "/assets/techno/odoo.svg";

// Orbite intérieure — stack principale
const innerSkills = [
  { name: "React", image: imgREACT },
  { name: "Next.js", image: imgNEXTJS },
  { name: "TypeScript", image: imgTYPE },
  { name: "Laravel", image: imgLARAVEL },
  { name: "Php", image: imgPHP },
  { name: "JavaScript", image: imgjs },
  { name: "Odoo", image: imgODOO },
];

// Orbite extérieure — reste de la stack
const outerSkills = [
  { name: "HTML", image: imgHTML },
  { name: "CSS", image: imgCSS },
  { name: "Flutter", image: imgFLUTTER },
  { name: "MySQL", image: imGMYSQL },
  { name: "PostgreSQL", image: imgPOSTGRESQL },
  { name: "Github", image: imgGITHUB },
  { name: "Wordpress", image: imgWORDPRESS },
  { name: "Figma", image: imgFIGMA },
];

const stars = [
  { top: "6%", left: "12%", size: 3, delay: "0s" },
  { top: "14%", left: "82%", size: 2, delay: "0.6s" },
  { top: "28%", left: "4%", size: 2, delay: "1.2s" },
  { top: "40%", left: "92%", size: 3, delay: "0.3s" },
  { top: "62%", left: "8%", size: 2, delay: "1.6s" },
  { top: "78%", left: "88%", size: 3, delay: "0.9s" },
  { top: "90%", left: "20%", size: 2, delay: "1.9s" },
  { top: "4%", left: "48%", size: 2, delay: "1.1s" },
  { top: "94%", left: "62%", size: 2, delay: "0.4s" },
];

const experiences = [
  {
    id: 1,
    role: "Web Engineer",
    description: [
      "Développement d'un Système Intégré de Gestion des Ressources Humaines (SIRH) complet.",
      "Optimisation des performances serveur et sécurisation des flux de données sensibles.",
    ],
  },
  {
    id: 2,
    role: "Fullstack Developer",
    description: [
      "Conception d'une plateforme de collaboration interne avec messagerie temps réel.",
      "Création d'une application de vote dynamique haute disponibilité pour compétitions.",
    ],
  },
  {
    id: 3,
    role: "Frontend Developer",
    description: [
      "Refonte de l'interface utilisateur pour les modules de gestion RH.",
      "Mise en place d'un Design System réutilisable sous React.",
    ],
  },
];

const SkillsGalaxy: FC = () => (
  <div
    className="relative mx-auto w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] shrink-0"
    role="img"
    aria-label="Illustration : les technologies de Mario en orbite autour de sa photo"
  >
    {/* Étoiles décoratives */}
    {stars.map((star, i) => (
      <span
        key={i}
        aria-hidden="true"
        className="absolute rounded-full bg-mint"
        style={{
          top: star.top,
          left: star.left,
          width: star.size,
          height: star.size,
          animation: `twinkle 3s ease-in-out infinite`,
          animationDelay: star.delay,
        }}
      />
    ))}

    {/* Anneaux d'orbite (visuels) */}
    <div className="absolute inset-[10%] rounded-full border border-dashed border-border" aria-hidden="true" />
    <div className="absolute inset-0 rounded-full border border-dashed border-border/60" aria-hidden="true" />

    {/* Halo + photo centrale */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
      <div className="relative">
        <div className="absolute -inset-4 rounded-full bg-amber/20 blur-2xl animate-pulse" aria-hidden="true" />
        <img
          src={img}
          alt="Mario Takouda"
          className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-amber/60 shadow-2xl"
        />
      </div>
    </div>

    {/* Orbite intérieure */}
    <div className="absolute inset-0" style={{ animation: "orbit-cw 26s linear infinite" }}>
      {innerSkills.map((skill, i) => {
        const angle = (360 / innerSkills.length) * i;
        return (
          <div
            key={skill.name}
            className="absolute top-1/2 left-1/2 w-0 h-0"
            style={{ transform: `rotate(${angle}deg) translateX(clamp(80px, 24vw, 128px))` }}
          >
            <div
              className="absolute"
              style={{ animation: "orbit-counter-cw 26s linear infinite" }}
            >
              <div
                title={skill.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-surface border border-border p-1.5 flex items-center justify-center shadow-lg hover:border-amber/60 hover:scale-110 transition-all duration-300"
              >
                <img src={skill.image} alt={skill.name} className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        );
      })}
    </div>

    {/* Orbite extérieure */}
    <div className="absolute inset-0" style={{ animation: "orbit-ccw 40s linear infinite" }}>
      {outerSkills.map((skill, i) => {
        const angle = (360 / outerSkills.length) * i + 18;
        return (
          <div
            key={skill.name}
            className="absolute top-1/2 left-1/2 w-0 h-0"
            style={{ transform: `rotate(${angle}deg) translateX(clamp(124px, 32vw, 186px))` }}
          >
            <div
              className="absolute"
              style={{ animation: "orbit-counter-ccw 40s linear infinite" }}
            >
              <div
                title={skill.name}
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-surface border border-border p-1.5 flex items-center justify-center shadow-lg hover:border-mint/60 hover:scale-110 transition-all duration-300"
              >
                <img src={skill.image} alt={skill.name} className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const Experience: FC = () => {
  return (
    <section id="Experiences" className="w-full py-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <Title eyebrow="parcours" title="Compétences & expériences" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
          {/* GALAXIE DE COMPÉTENCES */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/5 flex justify-center"
          >
            <SkillsGalaxy />
          </motion.div>

          {/* TIMELINE */}
          <div className="w-full lg:w-3/5 space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l border-border hover:border-amber/50 transition-colors group"
              >
                <div className="absolute -left-[5px] top-1 w-[9px] h-[9px] bg-canvas border border-border rounded-full group-hover:bg-amber group-hover:border-amber transition-colors" />

                <div className="bg-surface border border-border p-6 md:p-7 rounded-2xl group-hover:border-border transition-colors duration-300">
                  <span className="font-mono-ui text-xs text-ink-muted">{`// 0${index + 1}`}</span>
                  <h3 className="text-lg md:text-xl font-display font-bold text-ink mt-1 mb-4 group-hover:text-amber transition-colors duration-300">
                    {exp.role}
                  </h3>

                  <ul className="space-y-3">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-3 text-ink-muted text-sm md:text-base leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 bg-amber/50 rounded-full shrink-0 group-hover:bg-amber transition-colors" />
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
