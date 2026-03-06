import React, { useState } from 'react';
import LogoStyle from './LogoStyle';

import { ComparisonModal } from './ComparisonModal';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="relative flex flex-col items-center justify-center h-screen  hero-gradient overflow-hidden">
      <div className="absolute top-1/6 right-1/6 text-(--color-gris) opacity-20 animate-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="55"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-database-icon lucide-database"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5V19A9 3 0 0 0 21 19V5" />
          <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
      </div>

      <div className="absolute bottom-10 md:bottom-1/6 left-1/6 text-(--color-gris) opacity-20 animate-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="55"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-code-xml-icon lucide-code-xml"
        >
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
      </div>
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-(--color-amarillo) opacity-5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-(--color-amarillo) opacity-5 blur-[120px] rounded-full"></div>
      <div className="max-w-6xl  mx-auto px-6 text-center relative z-10">
        <LogoStyle />

        <h1 class="text-5xl md:text-7xl font-bold  mb-8 leading-tigh animate-text">
          <span class="block">La arquitectura correcta para</span>
          <span class="block text-white">tu proyecto,</span>
          <span class="block text-(--color-amarillo) glow-text">
            recomendada por IA
          </span>
        </h1>

        <p class="text-lg md:text-xl text-(--color-gris) max-w-3xl mx-auto mb-12 font-light leading-relaxed animate-text">
          Responde unas preguntas simples y obtén recomendaciones de
          arquitectura de software personalizadas para tu proyecto, equipo y
          tecnologías.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-text">
          <a
            href="/formulario"
            class="w-full sm:w-auto bg-(--color-amarillo) hover:bg-(--color-amarillo-hover) text-slate-950 font-bold px-8 py-4 rounded-xl transition-all yellow-shadow"
          >
            Comenzar recomendación personalizada
          </a>
          <button
            onClick={openModal}
            class="w-full sm:w-auto bg-transparent border border-slate-700 hover:border-(--color-amarillo) text-white font-semibold px-8 py-4 rounded-xl transition-all"
          >
            Ver comparación rápida
          </button>
        </div>
      </div>

      <ComparisonModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}

export default Home;
