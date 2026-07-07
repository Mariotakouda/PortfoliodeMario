import { TerminalSquare, Linkedin, Mail, MessageCircle } from "lucide-react";

const socialLinks = [
  { Icon: Linkedin, link: "http://linkedin.com/in/mario-takouda-722b87352", label: "LinkedIn" },
  { Icon: Mail, link: "mailto:mariotakouda99@gmail.com", label: "Email" },
  { Icon: MessageCircle, link: "https://wa.me/22890123456", label: "WhatsApp" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-border pt-16 pb-8" id="Contact">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
          {/* Branding */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4 group cursor-default">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-surface border border-border text-amber group-hover:rotate-6 transition-transform duration-300">
                <TerminalSquare className="w-4 h-4" />
              </span>
              <span className="font-mono-ui text-sm text-ink">
                mario<span className="text-ink-muted">.dev</span>
              </span>
            </div>
            <p className="text-ink-muted text-sm max-w-xs text-center md:text-left leading-relaxed">
              Développeur Fullstack basé à Lomé, passionné par la création de
              produits numériques robustes et bien conçus.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 font-mono-ui text-xs text-ink-muted uppercase tracking-widest">
            <a href="#Home" className="hover:text-amber transition-colors">Accueil</a>
            <a href="#About" className="hover:text-amber transition-colors">À propos</a>
            <a href="#Experiences" className="hover:text-amber transition-colors">Parcours</a>
            <a href="#Projects" className="hover:text-amber transition-colors">Projets</a>
          </nav>

          {/* Social */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.link}
                target={social.link.startsWith("http") ? "_blank" : undefined}
                rel={social.link.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center bg-surface border border-border rounded-full text-ink-muted hover:text-canvas hover:bg-amber hover:border-amber transition-all duration-300"
              >
                <social.Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ink-muted/70 font-mono-ui text-[11px] uppercase tracking-widest">
            © {new Date().getFullYear()} — Mario Takouda. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2 text-ink-muted/70 font-mono-ui text-[11px]">
            <span className="w-1.5 h-1.5 bg-mint rounded-full animate-pulse" />
            Fait avec soin au Togo
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
