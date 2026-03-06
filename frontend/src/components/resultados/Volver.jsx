import React from 'react';

function Volver() {
  return (
    <div className="my-25 flex flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-2xl font-bold text-(--color-gris)">
        Desea volver a la página de Formulario?
      </h1>
      <a
        href="/formulario"
        className="bg-(--color-amarillo) text-(--color-blanco) hover:bg-(--color-amarillo-hover) font-bold py-2 px-4 rounded"
      >
        Volver a Formulario
      </a>
    </div>
  );
}

export default Volver;
