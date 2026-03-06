import Input from './Input';
function Paso4({
  form,
  update,
  velocidadesRespuesta,
  TiposSeguridad,
  TiposCaida,
}) {
  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-4">
        Atributos de calidad
      </h2>

      <div>
        <h1 className="my-4 text-gray-400 font-bold">
          ¿Qué tan crítica es la velocidad de respuesta?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {velocidadesRespuesta.map((velocidad) => (
            <Input
              key={velocidad}
              titulo={velocidad}
              activo={form.performance_importance === velocidad}
              onClick={() => update('performance_importance', velocidad)}
            />
          ))}
        </div>
      </div>

      <div>
        <h1 className="my-4 text-gray-400 font-bold">
          ¿Qué nivel de seguridad requiere el sistema?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {TiposSeguridad.map((tipoSeguridad) => (
            <Input
              key={tipoSeguridad}
              titulo={tipoSeguridad}
              activo={form.security_level === tipoSeguridad}
              onClick={() => update('security_level', tipoSeguridad)}
            />
          ))}
        </div>
      </div>

      <div>
        <h1 className="my-4 text-gray-400 font-bold">
          ¿El sistema puede caer?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {TiposCaida.map((caidas) => (
            <Input
              key={caidas}
              titulo={caidas}
              activo={form.availability_requirement === caidas}
              onClick={() => update('availability_requirement', caidas)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Paso4;
