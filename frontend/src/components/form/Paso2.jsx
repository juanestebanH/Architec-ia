import Input from './Input';
import Pregunta from './Pregunta';

function Paso2({
  form,
  update,
  crecimiento,
  usuarios,
  desarrolladores,
  senioridades,
  errores,
}) {
  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-4">
        Escala y crecimiento
      </h2>

      <Pregunta
        titulo="¿Qué crecimiento esperas en los próximos 12–24 meses?"
        error={errores.expected_growth}
        grid="grid grid-cols-1 md:grid-cols-3"
      >
        {crecimiento.map((crecimiento) => (
          <Input
            key={crecimiento}
            titulo={crecimiento}
            activo={form.expected_growth === crecimiento}
            onClick={() => update('expected_growth', crecimiento)}
          />
        ))}
      </Pregunta>

      <Pregunta
        titulo="¿Cuántos usuarios concurrentes esperas?"
        error={errores.expected_traffic}
        grid="grid grid-cols-1 md:grid-cols-3"
      >
        {usuarios.map((usuarios) => (
          <Input
            key={usuarios}
            titulo={usuarios}
            activo={form.expected_traffic === usuarios}
            onClick={() => update('expected_traffic', usuarios)}
          />
        ))}
      </Pregunta>

      <Pregunta
        titulo="¿Cuántas personas desarrollan el sistema?"
        error={errores.team_size}
        grid="grid grid-cols-1 md:grid-cols-3"
      >
        {desarrolladores.map((desarrolladores) => (
          <Input
            key={desarrolladores}
            titulo={desarrolladores}
            activo={form.team_size === desarrolladores}
            onClick={() => update('team_size', desarrolladores)}
          />
        ))}
      </Pregunta>

      <Pregunta
        titulo="¿Cuál es el nivel de experiencia del equipo?"
        error={errores.team_seniority}
        grid="grid grid-cols-1 md:grid-cols-3"
      >
        {senioridades.map((senioridad) => (
          <Input
            key={senioridad}
            titulo={senioridad}
            activo={form.team_seniority === senioridad}
            onClick={() => update('team_seniority', senioridad)}
          />
        ))}
      </Pregunta>
    </div>
  );
}

export default Paso2;
