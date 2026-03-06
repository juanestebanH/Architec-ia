import React from 'react';
import { Check, CircleCheckBig } from 'lucide-react';
function Ventajas({ beneficios }) {
  return (
    <div className="bg-(--color-azul-claro) rounded-xl  mt-12 w-full">
      <div className="flex items-center gap-4 bg-(--color-verde)/20 p-4 rounded-tl-xl rounded-tr-xl">
        <div className="bg-(--color-verde) rounded-full p-0.5 ">
          <Check className="text-(--color-azul-fondo)" />
        </div>
        <h3 className="font-bold ">Ventajas Competetivas</h3>
      </div>

      <div className="p-6">
        {beneficios.map((ventaja, index) => (
          <div key={index} className="flex items-center gap-3 mb-4">
            <CircleCheckBig className="text-(--color-verde) shrink-0" />
            <p className="text-(--color-gris)">{ventaja}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ventajas;
