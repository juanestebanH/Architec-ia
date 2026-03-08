import { Atom } from 'lucide-react';
function TituloResultado({ titulo }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Tu Arquitectura{' '}
          <span className="text-(--color-amarillo)">Recomendada</span>
        </h2>

        <p className="text-(--color-gris) font-semibold">
          Basada en tus necesidades y contexto específico
        </p>
      </div>
      <div className="bg-(--color-amarillo) p-6 w-fit  rounded-xl flex items-center justify-center gap-6">
        <div className="bg-black w-fit p-2 rounded-xl ">
          <Atom className="text-(--color-amarillo) h-10 w-10" />
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl text-(--color-azul-fondo) font-semibold  tracking-wide">
            {titulo}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default TituloResultado;
