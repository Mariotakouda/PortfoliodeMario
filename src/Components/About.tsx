import { motion } from 'framer-motion';
import { CalendarSync, EthernetPort, LetterText, Paintbrush } from "lucide-react";
import Title from "./Title";

const aboutSections = [
  {
    id: 1,
    title: "Développeur Frontend",
    description: "Expert en création d'interfaces réactives et performantes. Je transforme des maquettes complexes en code propre avec une attention particulière aux détails.",
    icon: <LetterText className="w-8 h-8 text-blue-500" />,
    color: "from-blue-500/20 to-transparent"
  },
  {
    id: 2,
    title: "Développeur Backend",
    description: "Maîtrise des APIs robustes, conception de bases de données optimisées et gestion de la logique serveur sécurisée pour des applications scalables.",
    icon: <CalendarSync className="w-8 h-8 text-emerald-500" />,
    color: "from-emerald-500/20 to-transparent"
  },
  {
    id: 3,
    title: "Passionné UI/UX",
    description: "Conception centrée utilisateur. Je crée des parcours fluides et des designs adaptables (Responsive) pour maximiser l'engagement.",
    icon: <Paintbrush className="w-8 h-8 text-purple-500" />,
    color: "from-purple-500/20 to-transparent"
  },
  {
    id: 4,
    title: "Soft Skills & Agilité",
    description: "Communication constructive et facilitation du travail collectif. J'assure une synergie d'équipe pour garantir la réussite des projets.",
    icon: <EthernetPort className="w-8 h-8 text-rose-500" />,
    color: "from-rose-500/20 to-transparent"
  },
];

const About = () => {
  return (
    <section className="bg-slate-950 w-full min-h-screen py-24 relative overflow-hidden" id="About">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full -z-0"></div>

      <div className="w-full px-6 md:px-16 lg:px-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title title="À PROPOS" />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {aboutSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative group bg-slate-900/50 border border-white/5 p-8 rounded-3xl backdrop-blur-sm overflow-hidden`}
            >
              {/* Effet de gradient au survol */}
              <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-slate-700 transition-all duration-300">
                  {section.icon}
                </div>

                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {section.title}
                </h2>
                
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {section.description}
                </p>

                {/* Petite barre de progression décorative */}
                <div className="mt-6 w-12 h-1 bg-blue-600 rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;