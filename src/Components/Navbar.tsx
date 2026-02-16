import { Container, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    // left-0 et right-0 forcent la barre à s'étirer sur toute la largeur de la fenêtre
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/5">
      
      {/* Ce conteneur interne centre le contenu sur les grands écrans 
          tout en laissant la barre de navigation (le fond) s'étendre à l'infini.
      */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center group shrink-0">
            <div className="bg-accent/10 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300 mr-3">
              <Container className="w-6 h-6 text-accent" />
            </div>
            <span className="text-xl font-black tracking-tighter text-white">
              MARIO <span className="text-accent italic">Open_Coding</span>
            </span>
          </a>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-2">
              <NavItem href="#Home" label="Accueil" />
              <NavItem href="#About" label="À Propos" />
              <NavItem href="#Experiences" label="Expériences" />
              <NavItem href="#Projects" label="Projets" />
            </ul>
            
            <a 
              href="#Contact" 
              className="px-6 py-2.5 bg-accent text-slate-950 font-bold rounded-xl hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)] transition-all active:scale-95 text-sm whitespace-nowrap"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, label }: { href: string; label: string }) => (
  <li>
    <a 
      href={href} 
      className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group"
    >
      {label}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-1/2"></span>
    </a>
  </li>
);

export default Navbar;