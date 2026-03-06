import React from 'react';

function CardBenificio({ titulo, descripcion, icon }) {
  return (
    <div class="p-8 rounded-2xl bg-(--color-azul-claro) border border-slate-800 hover:border-(--color-amarillo) hover:scale-105 transition-transform duration-300">
      <div class="w-14 h-14 bg-(--color-amarillo)/10 rounded-xl flex items-center justify-center mb-6 ">
        <div className="text-(--color-amarillo)">{icon}</div>
      </div>
      <h3 class="text-xl font-bold mb-3 text-(--color-blanco)">{titulo}</h3>
      <p class="text-(--color-gris) text-sm leading-relaxed">{descripcion}</p>
    </div>
  );
}

export default CardBenificio;
