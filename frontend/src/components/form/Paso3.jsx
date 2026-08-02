import Input from './Input';
import Pregunta from './Pregunta';

function Paso3({
  form,
  update,
  toggle,
  tiempos,
  presupuestosInfra,
  integraciones,
  errores,
}) {
  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-4">
        Restricciones reales
      </h2>

      <Pregunta
        titulo="¿Qué tan rápido necesitas lanzar la primera versión?"
        error={errores.time_to_market}
        grid="grid grid-cols-1 md:grid-cols-3"
      >
        {tiempos.map((tiempo) => (
          <Input
            key={tiempo}
            titulo={tiempo}
            activo={form.time_to_market === tiempo}
            onClick={() => update('time_to_market', tiempo)}
          />
        ))}
      </Pregunta>

      <Pregunta
        titulo="¿Cuál es tu presupuesto mensual de infraestructura?"
        error={errores.infra_budget_usd}
        grid="grid grid-cols-1 md:grid-cols-4"
      >
        {presupuestosInfra.map((presupuestoInfra) => (
          <Input
            key={presupuestoInfra}
            titulo={presupuestoInfra}
            activo={form.infra_budget_usd === presupuestoInfra}
            onClick={() => update('infra_budget_usd', presupuestoInfra)}
          />
        ))}
      </Pregunta>

      <Pregunta
        titulo="¿Necesitas integrarte con sistemas existentes?"
        error={errores.system_integrations}
        grid="grid grid-cols-1 md:grid-cols-4"
      >
        {integraciones.map((integracion) => (
          <Input
            key={integracion}
            titulo={integracion}
            activo={form.system_integrations.includes(integracion)}
            onClick={() => toggle('system_integrations', integracion)}
          />
        ))}
      </Pregunta>
    </div>
  );
}

export default Paso3;
