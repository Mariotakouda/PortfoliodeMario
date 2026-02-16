import { Terminal, Twitter, Youtube, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  // On stocke le composant lui-même, pas le JSX
  const socialLinks = [
    { Icon: Twitter, link: "https://twitter.com" },
    { Icon: Youtube, link: "https://youtube.com" },
    { Icon: Facebook, link: "https://facebook.com" },
    { Icon: Linkedin, link: "https://linkedin.com" }
  ];

  return (
    <footer className="w-full bg-slate-950 border-t border-white/5 pt-16 pb-8" id="Footer">
      <div className="w-full px-6 md:px-16 lg:px-24">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
          
          {/* Branding */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4 group cursor-default">
              <div className="p-2 bg-blue-600 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-black text-white tracking-tighter">
                MARIO <span className="text-blue-500">CODE_NOW</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left leading-relaxed">
              Développeur Fullstack passionné par la création d'expériences numériques d'exception.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
            <a href="#Home" className="hover:text-blue-500 transition-colors">Accueil</a>
            <a href="#About" className="hover:text-blue-500 transition-colors">À Propos</a>
            <a href="#Projects" className="hover:text-blue-500 transition-colors">Projets</a>
            <a href="#Experiences" className="hover:text-blue-500 transition-colors">Parcours</a>
          </nav>

          {/* Réseaux Sociaux (Correction TypeScript ici) */}
          <div className="flex gap-5">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-white/5 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
              >
                {/* On appelle le composant directement avec ses props */}
                <social.Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} — Mario Takouda. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2 text-slate-600 text-xs font-medium">
            <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
            Fait avec passion au Togo
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;