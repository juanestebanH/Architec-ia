import { useState } from 'react';

function InputIcon({ icon, titulo, descripcion, activo, onClick }) {
  const [seleccionado, setSeleccionado] = useState(false);

  const clickButton = () => {
    setSeleccionado(!seleccionado);
  };

  return (
    <div
      onClick={onClick}
      className={`p-4 flex gap-4 items-start border  rounded-xl  hover:bg-(--color-amarillo)/10 hover:border-(--color-amarillo) cursor-pointer hover:shadow-lg transition-shadow hover:text-(--color-amarillo) ${
        activo
          ? 'bg-(--color-amarillo)/10 text-(--color-amarillo) border-(--color-amarillo)'
          : 'bg-(--color-azul-claro) text-(--color-gris) border-(--color-gris)'
      }`}
    >
      <div className="p-2 rounded-xl flex items-center bg-(--color-amarillo)/10  ">
        {icon}
      </div>

      <div>
        <p className="font-bold mb-2">{titulo}</p>
        <p className="text-sm">{descripcion}</p>
      </div>
    </div>
  );
}

export default InputIcon;
