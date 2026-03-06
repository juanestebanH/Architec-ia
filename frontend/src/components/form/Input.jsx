import React from 'react';

function Input({ titulo, activo, onClick }) {
  return (
    <div
      className={`p-4 text-center border  rounded-xl  hover:bg-(--color-amarillo)/10 hover:border-(--color-amarillo) cursor-pointer hover:shadow-lg transition-shadow hover:text-(--color-amarillo) ${
        activo
          ? 'bg-(--color-amarillo)/10 text-(--color-amarillo) border-(--color-amarillo)'
          : 'bg-(--color-azul-claro) text-(--color-gris) border-(--color-gris)'
      }`}
      onClick={onClick}
    >
      <p>{titulo}</p>
    </div>
  );
}

export default Input;
