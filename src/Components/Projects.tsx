import { motion } from 'framer-motion';
import { Github, ExternalLink } from "lucide-react";
import Title from "./Title";

import img1 from "/assets/projects/HODO.png";
import img2 from "/assets/projects/BIBLIO.png";
import img3 from "/assets/projects/Cosmo.png";
import img4 from "/assets/projects/Foot.png";
import img5 from "/assets/projects/DIGIT.png";

const projects = [
  {
    id: 1,
    title: "HODO",
    description: "Système intégré de gestion des ressources humaines (SIRH) permettant le suivi des employés et des performances.",
    technologies: ["React", "Laravel", "MySQL"],
    demoLink: "#",
    repoLink: "#",
    image: img1,
  },
  {
    id: 2,
    title: "BOOKHOUSE",
    description: "Bibliothèque numérique moderne permettant la gestion et la consultation d'ouvrages en ligne.",
    technologies: ["PHP", "Laravel", "Tailwind"],
    demoLink: "#",
    repoLink: "#",
    image: img2,
  },
  {
    id: 3,
    title: "COSMOSHOP",
    description: "Boutique e-commerce dynamique avec gestion complète du panier et des paiements.",
    technologies: ["Wordpress", "WooCommerce"],
    demoLink: "#",
    repoLink: "#",
    image: img3,
  },
  {
    id: 4,
    title: "VIVA_FOOT",
    description: "Application de suivi sportif avec une interface utilisateur immersive pour les fans de football.",
    technologies: ["PHP", "Laravel", "Blade"],
    demoLink: "#",
    repoLink: "#",
    image: img4,
  },
  {
    id: 5,
    title: "DigitHouse",
    description: "Plateforme vitrine pour une agence marketing mettant en avant leurs services digitaux.",
    technologies: ["Wordpress", "Elementor"],
    demoLink: "#",
    repoLink: "#",
    image: img5,
  },
];

const Projects = () => {
  return (
    <section className="bg-slate-950 w-full py-24" id="Projects">
      <div className="w-full px-6 md:px-16 lg:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title title="Projets Récents" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-slate-900/50 border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500"
            >
              {/* Conteneur Image avec Zoom */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Contenu de la carte */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a href={project.repoLink} className="text-slate-400 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.demoLink} className="text-slate-400 hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Badges Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-[10px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full uppercase tracking-widest"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bouton Voir le Projet */}
                <a
                  href={project.demoLink}
                  className="inline-flex items-center justify-center w-full py-4 bg-slate-800 text-white font-bold rounded-2xl group-hover:bg-blue-600 transition-all duration-300"
                >
                  Voir les détails
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;