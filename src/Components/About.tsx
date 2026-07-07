import { motion } from "framer-motion";
import { CalendarSync, EthernetPort, LetterText, Paintbrush } from "lucide-react";
import Title from "./Title";

type Accent = "amber" | "mint" | "coral";

const accentClasses: Record<Accent, { icon: string; iconBg: string; hoverBorder: string; hoverText: string; bar: string }> = {
  amber: {
    icon: "text-amber",
    iconBg: "bg-amber/10",
    hoverBorder: "group-hover:border-amber/40",
    hoverText: "group-hover:text-amber",
    bar: "bg-amber",
  },
  mint: {
    icon: "text-mint",
    iconBg: "bg-mint/10",
    hoverBorder: "group-hover:border-mint/40",
    hoverText: "group-hover:text-mint",
    bar: "bg-mint",
  },
  coral: {
    icon: "text-coral",
    iconBg: "bg-coral/10",
    hoverBorder: "group-hover:border-coral/40",
    hoverText: "group-hover:text-coral",
    bar: "bg-coral",
  },
};

const aboutSections = [
  {
    id: 1,
    tag: "frontend",
    title: "Développeur Frontend",
    description:
      "Expert en création d'interfaces réactives et performantes. Je transforme des maquettes complexes en code propre avec une attention particulière aux détails.",
    icon: <LetterText className="w-7 h-7" />,
    accent: "amber" as Accent,
  },
  {
    id: 2,
    tag: "backend",
    title: "Développeur Backend",
    description:
      "Maîtrise des APIs robustes, conception de bases de données optimisées et gestion de la logique serveur sécurisée pour des applications scalables.",
    icon: <CalendarSync className="w-7 h-7" />,
    accent: "mint" as Accent,
  },
  {
    id: 3,
    tag: "ui-ux",
    title: "Passionné UI/UX",
    description:
      "Conception centrée utilisateur. Je crée des parcours fluides et des designs adaptables (responsive) pour maximiser l'engagement.",
    icon: <Paintbrush className="w-7 h-7" />,
    accent: "coral" as Accent,
  },
  {
    id: 4,
    tag: "soft-skills",
    title: "Soft Skills & Agilité",
    description:
      "Communication constructive et facilitation du travail collectif. J'assure une synergie d'équipe pour garantir la réussite des projets.",
    icon: <EthernetPort className="w-7 h-7" />,
    accent: "amber" as Accent,
  },
];

const About = () => {
  return (
    <section className="w-full py-24 relative overflow-hidden" id="About">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-mint/5 blur-[120px] rounded-full -z-0" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title eyebrow="à propos" title="Ce que j'apporte à un projet" />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {aboutSections.map((section, index) => {
            const styles = accentClasses[section.accent];
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative bg-surface border border-border p-8 rounded-2xl overflow-hidden transition-colors duration-300 ${styles.hoverBorder}`}
              >
                <span className="font-mono-ui text-xs text-ink-muted">{`// ${section.tag}`}</span>

                <div
                  className={`mt-5 w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${styles.iconBg} ${styles.icon} group-hover:scale-105 transition-transform duration-300`}
                >
                  {section.icon}
                </div>

                <h3 className={`text-xl md:text-2xl font-display font-bold text-ink mb-3 transition-colors ${styles.hoverText}`}>
                  {section.title}
                </h3>

                <p className="text-ink-muted text-sm md:text-base leading-relaxed">
                  {section.description}
                </p>

                <div className={`mt-6 w-10 h-1 rounded-full ${styles.bar} group-hover:w-20 transition-all duration-500`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
