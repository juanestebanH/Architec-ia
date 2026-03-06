import React from 'react';

function Ideal() {
  return (
    <section class="py-24 relative overflow-hidden ">
      <div class="absolute inset-0 bg-(--color-amarillo) opacity-[0.03]"></div>
      <div class="absolute -bottom-48 -left-48 w-96 h-96 bg-(--color-amarillo) opacity-20 blur-[120px] rounded-full"></div>
      <div class="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-6 text-(--color-blanco) leading-tight">
          ¿Listo para encontrar tu arquitectura ideal?
        </h2>
        <p class="text-(--color-gris) text-lg mb-10 max-w-xl mx-auto">
          Comienza ahora y obtén recomendaciones en menos de 5 minutos. Sin
          compromisos, solo buen diseño.
        </p>
        <button class="bg-(--color-amarillo) hover:bg-amarillo-hover font-bold px-12 py-5 rounded-2xl transition-all yellow-shadow hover:scale-105 active:scale-95">
          Comenzar Ahora
        </button>
      </div>
    </section>
  );
}

export default Ideal;
