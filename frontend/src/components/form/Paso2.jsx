import Input from './Input';

function Paso2({
  form,
  update,
  tamanos,
  crecimiento,
  usuarios,
  desarrolladores,
}) {
  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-4">
        Escala y crecimiento
      </h2>

      <div>
        <h1 className="my-4 text-gray-400 font-bold">
          ¿Cómo describirías el tamaño del proyecto hoy?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {tamanos.map((tamanos) => (
            <Input
              key={tamanos}
              titulo={tamanos}
              activo={form.project_size === tamanos}
              onClick={() => update('project_size', tamanos)}
            />
          ))}
        </div>
      </div>

      <div>
        <h1 className="my-4 text-gray-400 font-bold">
          ¿Qué crecimiento esperas en los próximos 12–24 meses?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {crecimiento.map((crecimiento) => (
            <Input
              key={crecimiento}
              titulo={crecimiento}
              activo={form.expected_growth === crecimiento}
              onClick={() => update('expected_growth', crecimiento)}
            />
          ))}
        </div>
      </div>

      <div>
        <h1 className="my-4 text-gray-400 font-bold">
          Usuarios concurrentes esperados
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {usuarios.map((usuarios) => (
            <Input
              key={usuarios}
              titulo={usuarios}
              activo={form.expected_traffic === usuarios}
              onClick={() => update('expected_traffic', usuarios)}
            />
          ))}
        </div>
      </div>

      <div>
        <h1 className="my-4 text-gray-400 font-bold">
          ¿Cuántas personas desarrollan el sistema?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {desarrolladores.map((desarrolladores) => (
            <Input
              key={desarrolladores}
              titulo={desarrolladores}
              activo={form.team_size === desarrolladores}
              onClick={() => update('team_size', desarrolladores)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Paso2;
