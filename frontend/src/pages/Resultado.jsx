import { useLocation } from 'react-router-dom';
import Justificacion from '../components/resultados/Justificacion';
import Ventajas from '../components/resultados/Ventajas';
import Limitaciones from '../components/resultados/Limitaciones';
import Futuro from '../components/resultados/Futuro';
import Diagrama from '../components/resultados/Diagrama';
import Norecomendado from '../components/resultados/Norecomendado';
import TituloResultado from '../components/resultados/TituloResultado';
import NavResultados from '../components/resultados/NavResultados';
import AccionesResultado from '../components/resultados/AccionesResultado';

function Resultado() {
  const location = useLocation();
  const datos = location.state?.datos || [];

  return (
    <main className="relative flex flex-col items-center justify-center  p-6 max-w-5xl mx-auto">
      <div id="contenido-resultado" className="w-full">
        <TituloResultado titulo={datos.recommended_architecture} />

        <NavResultados />

        <section id="justificacion" className="w-full scroll-mt-24">
          <Justificacion justificacion={datos.technical_justification} />
        </section>

        <div
          id="detalle"
          className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 scroll-mt-24"
        >
          <Ventajas beneficios={datos.benefits} />
          <Limitaciones limitaciones={datos.limitations} />
        </div>

        <section id="flujo" className="w-full scroll-mt-24">
          <Diagrama diagramaData={datos.logical_diagram} />
        </section>

        <section id="futuro" className="w-full scroll-mt-24">
          <Futuro recomendacion={datos.future_recommendations} />
        </section>

        <section id="alternativas" className="w-full scroll-mt-24">
          <Norecomendado rechazadas={datos.rejected_architectures} />
        </section>
      </div>

      <AccionesResultado />
    </main>
  );
}

export default Resultado;
