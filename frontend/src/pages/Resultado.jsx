import { useLocation } from 'react-router-dom';
import { Atom } from 'lucide-react';
import Justificacion from '../components/resultados/Justificacion';
import Ventajas from '../components/resultados/Ventajas';
import Limitaciones from '../components/resultados/Limitaciones';
import Futuro from '../components/resultados/Futuro';
import Diagrama from '../components/resultados/Diagrama';
import Norecomendado from '../components/resultados/Norecomendado';
import Volver from '../components/resultados/Volver';
function Resultado() {
  const location = useLocation();
  const datos = location.state?.datos || [];

  return (
    <main className="relative flex flex-col items-center justify-center  p-6 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Tu Arquitectura{' '}
          <span className="text-(--color-amarillo)">Recomendada</span>
        </h2>

        <p className="text-(--color-gris) font-semibold">
          Basada en tus necesidades y contexto específico
        </p>
      </div>

      <div className="bg-(--color-amarillo) p-6  rounded-xl flex items-center gap-6">
        <div className="bg-black w-fit p-2 rounded-xl ">
          <Atom className="text-(--color-amarillo) h-10 w-10" />
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl text-(--color-azul-fondo) font-semibold  tracking-wide">
            {datos.recommended_architecture}
          </h3>
        </div>
      </div>

      <Justificacion Justificacion={datos.technical_justification} />

      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
        <Ventajas beneficios={datos.benefits} />
        <Limitaciones limitaciones={datos.limitations} />
      </div>

      <Diagrama diagramaData={datos.logical_diagram} />

      <Futuro recomendacion={datos.future_recommendations} />

      <Norecomendado data={datos.rejected_architectures[0]} />

      <Volver />
    </main>
  );
}

export default Resultado;
