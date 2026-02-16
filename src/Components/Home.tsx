import React from 'react';
import { Linkedin, Mail, MessageCircle, ArrowRight } from "lucide-react";
import img from "/assets/profil.jpeg";

const Home: React.FC = () => {
  return (
    <section 
      id="Home" 
      className="relative w-full min-h-screen flex items-center bg-slate-950 overflow-hidden"
    >
      {/* EFFETS DE LUMIÈRE D'ARRIÈRE-PLAN (Pour remplir les coins vides) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-600/10 blur-[150px] rounded-full"></div>
      </div>

      {/* CONTENU PRINCIPAL - w-full sans contrainte de max-width */}
      <div className="w-full px-6 md:px-16 lg:px-24 py-20 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* SECTION TEXTE */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            <div className="inline-flex items-center px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-500/10 rounded-full border border-blue-500/20">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Disponible pour projets Fullstack
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter mb-8">
              Hey, je suis <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400">
                Mario TAKOUDA
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-12">
              Développeur <span className="text-white font-semibold">Fullstack</span> expérimenté. 
              Je bâtis des applications web et mobiles performantes avec 
              <span className="text-blue-400"> React</span>, 
              <span className="text-emerald-400"> Flutter</span> et 
              <span className="text-rose-400"> Laravel</span>.
            </p>

            {/* BOUTONS CONTACT */}
            <div className="flex flex-wrap gap-5 justify-center md:justify-start">
              <a
                href="mailto:mariotakouda99@gmail.com"
                className="group flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl transition-all hover:bg-blue-700 hover:scale-105 active:scale-95 shadow-2xl shadow-blue-500/25"
              >
                <Mail className="w-5 h-5 mr-3" />
                Démarrer un projet
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
              </a>

              <div className="flex gap-4">
                <a
                  href="https://wa.me/22890123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-900 border border-slate-800 text-emerald-400 rounded-2xl hover:border-emerald-500 transition-all hover:-translate-y-1 shadow-xl"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>

                <a
                  href="http://linkedin.com/in/mario-takouda-722b87352"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-900 border border-slate-800 text-blue-400 rounded-2xl hover:border-blue-500 transition-all hover:-translate-y-1 shadow-xl"
                  title="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* SECTION IMAGE DE PROFIL */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <div className="relative group">
              {/* Cercle décoratif tournant derrière */}
              <div className="absolute -inset-4 border border-dashed border-blue-500/30 rounded-full animate-[spin_20s_linear_infinite] group-hover:border-blue-500/60"></div>
              
              <img 
                src={img} 
                alt="Mario Takouda" 
                className="relative w-64 h-80 md:w-[420px] md:h-[540px] object-cover border-4 border-slate-900 shadow-2xl transition-all duration-500 grayscale group-hover:grayscale-0"
                style={{
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                }}
              />

              {/* Petit badge d'info flottant */}
              <div className="absolute -bottom-8 -right-4 bg-slate-900 border border-slate-800 p-5 rounded-3xl shadow-2xl">
                <div className="flex flex-col items-center">
                   <span className="text-3xl font-black text-blue-500 leading-none">1+</span>
                   <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1 text-center">Ans d'expertise</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;