import React from 'react';
import CardBenificio from './CardBenificio';
function Beneficios() {
  const beneficios = [
    {
      titulo: 'IA Personalizada',
      descripcion:
        'Recomendaciones basadas en tu contexto específico y necesidades técnicas.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-sparkles-icon lucide-sparkles"
        >
          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
          <path d="M20 2v4" />
          <path d="M22 4h-4" />
          <circle cx="4" cy="20" r="2" />
        </svg>
      ),
    },
    {
      titulo: 'Diagramas Visuales',
      descripcion:
        'Visualiza tu arquitectura en tiempo real con diagramas generados automáticamente.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-circle-pile-icon lucide-circle-pile"
        >
          <circle cx="12" cy="19" r="2" />
          <circle cx="12" cy="5" r="2" />
          <circle cx="16" cy="12" r="2" />
          <circle cx="20" cy="19" r="2" />
          <circle cx="4" cy="19" r="2" />
          <circle cx="8" cy="12" r="2" />
        </svg>
      ),
    },
    {
      titulo: 'Decisiones Rápidas',
      descripcion:
        'Obtén respuestas en menos de 5 minutos y acelera tu ciclo de desarrollo.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-zap-icon lucide-zap"
        >
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
        </svg>
      ),
    },
    {
      titulo: 'Mejores Prácticas',
      descripcion:
        'Basado en patrones probados de la industria y estándares modernos.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-shield-check-icon lucide-shield-check"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div class="text-center mb-20">
          <h2 class="text-3xl md:text-4xl  font-bold mb-4 text-(--color-blanco)">
            ¿Por qué usar ArchitectAI?
          </h2>
          <p class="text-(--color-gris)">
            Toma decisiones arquitectónicas con confianza
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficios.map((beneficio, index) => (
            <CardBenificio
              key={index}
              titulo={beneficio.titulo}
              descripcion={beneficio.descripcion}
              icon={beneficio.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Beneficios;
