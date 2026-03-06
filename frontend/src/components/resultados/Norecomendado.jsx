import React from 'react';

function Norecomendado({ data }) {
  return (
    <div className="w-full mt-12">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-4">
        <h2 className="text-2xl text-(--color-blanco) font-bold whitespace-nowrap">
          Arquitectura No Recomendada
        </h2>
        <div className="bg-gray-900 h-0.5 w-full"></div>
      </div>

      <div className="w-full bg-(--color-azul-claro) p-6 rounded-xl ">
        <h3 className="bg-(--color-rojo)/20 text-(--color-rojo) font-bold w-fit rounded-xl p-2 mb-4">
          {data.name}
        </h3>

        <p className="text-(--color-gris)">{data.reason}</p>
      </div>
    </div>
  );
}

export default Norecomendado;
