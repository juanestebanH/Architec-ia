import Input from './Input';

function Paso3({ form, update, tiempos, presupuestos, escalas }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-4">
        Restricciones reales
      </h2>

      <div>
        <h1 className="my-4 text-gray-400 font-bold">
          ¿Qué tan rápido necesitas lanzar la primera versión?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {tiempos.map((tiempo) => (
            <Input
              key={tiempo}
              titulo={tiempo}
              activo={form.time_to_market === tiempo}
              onClick={() => update('time_to_market', tiempo)}
            />
          ))}
        </div>
      </div>

      <div>
        <h1 className="my-4 text-gray-400 font-bold">
          ¿Qué tan limitado es el presupuesto?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {presupuestos.map((presupuestoActual) => (
            <Input
              key={presupuestoActual}
              titulo={presupuestoActual}
              activo={form.budget_level === presupuestoActual}
              onClick={() => update('budget_level', presupuestoActual)}
            />
          ))}
        </div>
      </div>

      <div>
        <h1 className="my-4 text-gray-400 font-bold">
          ¿Qué tan importante es escalar horizontalmente?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {escalas.map((escala) => (
            <Input
              key={escala}
              titulo={escala}
              activo={form.scalability_importance === escala}
              onClick={() => update('scalability_importance', escala)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Paso3;
