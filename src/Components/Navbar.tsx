import { useState } from "react";
import { TerminalSquare, Menu, X } from "lucide-react";

const navItems = [
  { href: "#Home", label: "home.tsx" },
  { href: "#About", label: "about.tsx" },
  { href: "#Experiences", label: "experience.tsx" },
  { href: "#Projects", label: "projects.tsx" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-canvas/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#Home" className="flex items-center gap-3 group shrink-0">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-surface border border-border text-amber group-hover:rotate-6 transition-transform duration-300">
              <TerminalSquare className="w-4 h-4" />
            </span>
            <span className="font-mono-ui text-sm text-ink">
              mario<span className="text-ink-muted">.dev</span>
            </span>
          </a>

          {/* Desktop nav — styled like editor tabs */}
          <div className="hidden md:flex items-center gap-1 rounded-lg border border-border bg-surface/60 p-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-md font-mono-ui text-xs text-ink-muted hover:text-ink hover:bg-surface-2 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#Contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-md bg-amber text-canvas font-mono-ui text-xs font-semibold hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
          >
            {"> contact"}
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-ink hover:bg-surface rounded-md transition-colors"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-6 flex flex-col gap-1 border-t border-border pt-4 animate-[fadeIn_0.2s_ease-out]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-md font-mono-ui text-sm text-ink-muted hover:text-ink hover:bg-surface transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#Contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-3 rounded-md bg-amber text-canvas font-mono-ui text-sm font-semibold text-center"
            >
              {"> contact"}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
