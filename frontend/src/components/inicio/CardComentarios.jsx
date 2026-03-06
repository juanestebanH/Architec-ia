import React from 'react';

function CardComentarios({ inicial, nombre, cargo, comentario }) {
  return (
    <div class="glass-card p-8 rounded-2xl border bg-(--color-azul-claro)/70 border-slate-800 shadow-sm hover:border-(--color-amarillo) transition-colors">
      <div class="flex items-center space-x-3 mb-6">
        <div class="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
          {inicial}
        </div>
        <div>
          <p class="text-sm font-bold text-(--color-amarillo)">{nombre}</p>
          <p class="text-xs text-(--color-gris)">{cargo}</p>
        </div>
      </div>
      <p class="italic text-(--color-gris) leading-relaxed">{comentario}</p>
    </div>
  );
}

export default CardComentarios;
