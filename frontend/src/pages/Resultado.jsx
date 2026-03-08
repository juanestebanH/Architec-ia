import { useLocation } from 'react-router-dom';
import Justificacion from '../components/resultados/Justificacion';
import Ventajas from '../components/resultados/Ventajas';
import Limitaciones from '../components/resultados/Limitaciones';
import Futuro from '../components/resultados/Futuro';
import Diagrama from '../components/resultados/Diagrama';
import Norecomendado from '../components/resultados/Norecomendado';
import Volver from '../components/resultados/Volver';
import TituloResultado from '../components/resultados/TituloResultado';

function Resultado() {
  const location = useLocation();
  const datos = location.state?.datos || [];

  return (
    <main className="relative flex flex-col items-center justify-center  p-6 max-w-5xl mx-auto">
      <TituloResultado titulo={datos.recommended_architecture} />

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
