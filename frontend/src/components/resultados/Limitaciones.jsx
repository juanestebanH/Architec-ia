import { TriangleAlert } from 'lucide-react';

function Limitaciones({ limitaciones }) {
  return (
    <div className="bg-(--color-azul-claro) rounded-xl  mt-12 w-full">
      <div className="flex items-center gap-4 bg-(--color-amarillo)/20 p-4 rounded-tl-xl rounded-tr-xl">
        <TriangleAlert className="text-(--color-amarillo)" />

        <h3 className="font-bold ">Retos y limitaciones</h3>
      </div>

      <div className="p-6">
        {limitaciones.map((limitacion, index) => (
          <div key={index} className="flex items-center gap-3 mb-4">
            <span className="text-(--color-amarillo) font-bold">!</span>
            <p className="text-(--color-gris)">{limitacion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Limitaciones;
