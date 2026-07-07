import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Title from "./Title";

import img1 from "/assets/projects/HODO.png";
import img2 from "/assets/projects/BIBLIO.png";
import img3 from "/assets/projects/Cosmo.png";
import img4 from "/assets/projects/Foot.png";
import img5 from "/assets/projects/DIGIT.png";
import img6 from "/assets/projects/info.png";
import img7 from "/assets/projects/farm.png";

const projects = [
  {
    id: 1,
    title: "HODO",
    description:
      "Système intégré de gestion des ressources humaines (SIRH) permettant le suivi des employés et des performances.",
    technologies: ["React", "Laravel", "MySQL"],
    demoLink: "#",
    repoLink: "#",
    image: img1,
  },
  {
    id: 2,
    title: "BOOKHOUSE",
    description:
      "Bibliothèque numérique moderne permettant la gestion et la consultation d'ouvrages en ligne.",
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
    description:
      "Application de suivi sportif avec une interface utilisateur immersive pour les fans de football.",
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
  {
    id: 6,
    title: "InfoJob",
    description:
      "Application centralisant la gestion des démarches administratives et la mise en relation entre l'offre et la demande d'emploi.",
    technologies: ["Wordpress", "Elementor"],
    demoLink: "#",
    repoLink: "#",
    image: img6,
  },
  {
    id: 7,
    title: "Farm_Track",
    description: "Conception d'un ERP Odoo dédié à la gestion d'une exploitation agricole et d'élevage.",
    technologies: ["Odoo"],
    demoLink: "#",
    repoLink: "#",
    image: img7,
  },
];

const Projects = () => {
  return (
    <section className="w-full py-24" id="Projects">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <Title eyebrow="projets" title="Projets récents" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-amber/30 transition-colors duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent opacity-70" />
              </div>

              <div className="p-6 md:p-7">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-display font-bold text-ink group-hover:text-amber transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 shrink-0 ml-3">
                    <a
                      href={project.repoLink}
                      className="text-ink-muted hover:text-ink transition-colors"
                      aria-label={`Code source de ${project.title}`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demoLink}
                      className="text-ink-muted hover:text-ink transition-colors"
                      aria-label={`Démo de ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-ink-muted text-sm leading-relaxed mb-5 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-7">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 font-mono-ui text-[10px] text-amber bg-amber/10 border border-amber/20 rounded-full uppercase tracking-widest"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.demoLink}
                  className="inline-flex items-center justify-center w-full py-3.5 bg-surface-2 text-ink font-mono-ui text-sm font-semibold rounded-xl group-hover:bg-amber group-hover:text-canvas transition-all duration-300"
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
