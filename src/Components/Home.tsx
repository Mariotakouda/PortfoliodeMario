import type { FC } from "react";
import { Linkedin, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import img from "/assets/profil.jpeg";

const Home: FC = () => {
  return (
    <section
      id="Home"
      className="relative w-full min-h-screen flex items-center pt-28 pb-24 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-amber/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[40%] h-[40%] bg-mint/5 blur-[140px] rounded-full" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          {/* SIGNATURE ELEMENT — code editor window */}
          <div className="order-2 lg:order-1 relative">
            <div className="rounded-2xl border border-border bg-surface shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-surface-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-coral/70" />
                  <span className="w-3 h-3 rounded-full bg-amber/70" />
                  <span className="w-3 h-3 rounded-full bg-mint/70" />
                </div>
                <span className="font-mono-ui text-xs text-ink-muted">bio.tsx</span>
                <span className="w-10" aria-hidden="true" />
              </div>

              <div className="flex text-[13px] sm:text-sm md:text-base font-mono-ui leading-relaxed">
                <div className="hidden sm:flex flex-col items-end px-4 py-6 text-ink-muted/40 select-none border-r border-border">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <span key={i} className="h-7">
                      {i + 1}
                    </span>
                  ))}
                </div>
                <div className="px-5 py-6 space-y-1 overflow-x-auto w-full">
                  <p className="whitespace-nowrap">
                    <span className="text-ink-muted">// disponible pour projets fullstack</span>
                  </p>
                  <p className="whitespace-nowrap">
                    <span className="text-amber">const</span>{" "}
                    <span className="text-ink">développeur</span>{" "}
                    <span className="text-ink-muted">= {"{"}</span>
                  </p>
                  <p className="pl-4 whitespace-nowrap">
                    <span className="text-mint">nom</span>
                    <span className="text-ink-muted">:</span>{" "}
                    <span className="text-coral">"Mario Takouda"</span>
                    <span className="text-ink-muted">,</span>
                  </p>
                  <p className="pl-4 whitespace-nowrap">
                    <span className="text-mint">role</span>
                    <span className="text-ink-muted">:</span>{" "}
                    <span className="text-coral">"Fullstack Developer"</span>
                    <span className="text-ink-muted">,</span>
                  </p>
                  <p className="pl-4 whitespace-nowrap">
                    <span className="text-mint">stack</span>
                    <span className="text-ink-muted">:</span>{" "}
                    <span className="text-ink-muted">[</span>
                    <span className="text-coral">"React"</span>
                    <span className="text-ink-muted">, </span>
                    <span className="text-coral">"Flutter"</span>
                    <span className="text-ink-muted">, </span>
                    <span className="text-coral">"Laravel"</span>
                    <span className="text-ink-muted">],</span>
                  </p>
                  <p className="pl-4 whitespace-nowrap">
                    <span className="text-mint">basé</span>
                    <span className="text-ink-muted">:</span>{" "}
                    <span className="text-coral">"Lomé, Togo"</span>
                  </p>
                  <p>
                    <span className="text-ink-muted">{"}"}</span>
                  </p>
                  <p className="pt-2 whitespace-nowrap">
                    <span className="text-amber">return</span>{" "}
                    <span className="text-ink-muted">&lt;</span>
                    <span className="text-mint">SiteEnLigne</span>
                    <span className="text-ink-muted"> /&gt;</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Floating identity chip */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 hidden sm:flex items-center gap-3 bg-canvas border border-border rounded-xl px-4 py-3 shadow-xl">
              <img
                src={img}
                alt="Mario Takouda"
                className="w-10 h-10 rounded-full object-cover border border-border"
              />
              <div className="leading-tight">
                <p className="font-mono-ui text-[11px] text-ink">Mario Takouda</p>
                <p className="font-mono-ui text-[10px] text-ink-muted">Lomé, TG</p>
              </div>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-md border border-border bg-surface font-mono-ui text-xs text-mint">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
              </span>
              disponible pour projets
            </span>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-ink leading-[1.1] tracking-tight mb-6">
              Je construis des produits web
              <span className="text-amber"> qui tiennent la route.</span>
            </h1>

            <p className="text-base md:text-lg text-ink-muted max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Développeur Fullstack basé à Lomé. Je conçois des applications web et
              mobiles robustes, du modèle de données à l'interface, avec React,
              Flutter et Laravel.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="mailto:mariotakouda99@gmail.com"
                className="group inline-flex items-center px-6 py-3.5 bg-amber text-canvas font-mono-ui text-sm font-semibold rounded-lg hover:brightness-110 active:scale-95 transition-all"
              >
                <Mail className="w-4 h-4 mr-2" />
                Démarrer un projet
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/22890123456"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-14 h-14 rounded-lg border border-border bg-surface text-mint hover:border-mint transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href="http://linkedin.com/in/mario-takouda-722b87352"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-14 h-14 rounded-lg border border-border bg-surface text-ink hover:border-ink-muted transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
