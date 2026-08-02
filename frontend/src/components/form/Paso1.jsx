import InputIcon from './InputIcon';
import Input from './Input';
import Pregunta from './Pregunta';

function Paso1({ form, update, datosInput, dominios, despliegues, errores }) {
  const inputOtro =
    'w-full p-3 rounded-xl border bg-(--color-azul-fondo) text-(--color-blanco) placeholder-(--color-gris) focus:outline-none focus:ring-2 focus:ring-(--color-amarillo)';

  return (
    <div>
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold">Contexto del Proyecto</h2>
        <p className="text-(--color-gris)">
          Cuéntanos sobre lo que estás construyendo
        </p>
      </div>

      <Pregunta
        titulo="¿Qué tipo de aplicación construyes?"
        error={errores.app_type}
        grid="flex flex-wrap"
        extra={
          form.app_type === 'Otro' && (
            <input
              type="text"
              value={form.app_type_otro}
              onChange={(e) => update('app_type_otro', e.target.value)}
              placeholder="Describe tu tipo de aplicación"
              aria-label="Otro tipo de aplicación"
              className={`${inputOtro} ${
                errores.app_type ? 'border-red-500/60' : 'border-(--color-gris)'
              }`}
            />
          )
        }
      >
        {datosInput.map((dato) => (
          <div
            key={dato.titulo}
            className="w-full md:basis-[calc(33.333%-1rem)] grow"
          >
            <InputIcon
              icon={dato.icon}
              titulo={dato.titulo}
              descripcion={dato.descripcion}
              activo={form.app_type === dato.titulo}
              onClick={() => {
                update('app_type', dato.titulo);
                if (dato.titulo !== 'Otro') update('app_type_otro', '');
              }}
            />
          </div>
        ))}
      </Pregunta>

      <Pregunta
        titulo="¿En qué dominio se mueve el sistema?"
        error={errores.business_domain}
        grid="grid grid-cols-1 md:grid-cols-3"
        extra={
          form.business_domain === 'Otro' && (
            <input
              type="text"
              value={form.business_domain_otro}
              onChange={(e) => update('business_domain_otro', e.target.value)}
              placeholder="Describe tu dominio"
              aria-label="Otro dominio"
              className={`${inputOtro} ${
                errores.business_domain
                  ? 'border-red-500/60'
                  : 'border-(--color-gris)'
              }`}
            />
          )
        }
      >
        {dominios.map((dominio) => (
          <Input
            key={dominio}
            titulo={dominio}
            activo={form.business_domain === dominio}
            onClick={() => {
              update('business_domain', dominio);
              if (dominio !== 'Otro') update('business_domain_otro', '');
            }}
          />
        ))}
      </Pregunta>

      <Pregunta
        titulo="¿Dónde planeas desplegar el sistema?"
        error={errores.deployment_environment}
        grid="grid grid-cols-1 md:grid-cols-4"
      >
        {despliegues.map((despliegue) => (
          <Input
            key={despliegue}
            titulo={despliegue}
            activo={form.deployment_environment === despliegue}
            onClick={() => update('deployment_environment', despliegue)}
          />
        ))}
      </Pregunta>
    </div>
  );
}

export default Paso1;
