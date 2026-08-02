import Input from './Input';
import Pregunta from './Pregunta';

function Paso4({
  form,
  update,
  toggle,
  velocidadesRespuesta,
  slas,
  cumplimientos,
  errores,
}) {
  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-4">
        Atributos de calidad
      </h2>

      <Pregunta
        titulo="¿Qué tan crítica es la velocidad de respuesta?"
        error={errores.performance_importance}
        grid="grid grid-cols-1 md:grid-cols-3"
      >
        {velocidadesRespuesta.map((velocidad) => (
          <Input
            key={velocidad}
            titulo={velocidad}
            activo={form.performance_importance === velocidad}
            onClick={() => update('performance_importance', velocidad)}
          />
        ))}
      </Pregunta>

      <Pregunta
        titulo="¿Qué disponibilidad necesita el sistema?"
        error={errores.availability_sla}
        grid="grid grid-cols-1 md:grid-cols-3"
      >
        {slas.map((sla) => (
          <Input
            key={sla}
            titulo={sla}
            activo={form.availability_sla === sla}
            onClick={() => update('availability_sla', sla)}
          />
        ))}
      </Pregunta>

      <Pregunta
        titulo="¿Aplica alguna normativa de cumplimiento?"
        error={errores.compliance_requirements}
        grid="grid grid-cols-1 md:grid-cols-5"
      >
        {cumplimientos.map((cumplimiento) => (
          <Input
            key={cumplimiento}
            titulo={cumplimiento}
            activo={form.compliance_requirements.includes(cumplimiento)}
            onClick={() => toggle('compliance_requirements', cumplimiento)}
          />
        ))}
      </Pregunta>
    </div>
  );
}

export default Paso4;
