import InputIcon from './InputIcon';
import Input from './Input';

function Paso1({ form, update, datosInput, dominios }) {
  return (
    <div>
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold">Contexto del Proyecto</h2>
        <p className="text-(--color-gris)">
          Cuéntanos sobre lo que estás construyendo
        </p>
      </div>

      <div>
        <h1 className="my-4 text-gray-400 font-bold">
          ¿Qué tipo de aplicación construyes?
        </h1>
        <div className="flex flex-wrap gap-4 mb-10">
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
                onClick={() => update('app_type', dato.titulo)}
              />
            </div>
          ))}
        </div>

        <div>
          <h1 className="my-4 text-gray-400 font-bold">
            ¿En qué dominio se mueve el sistema?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
            {dominios.map((dominio) => (
              <Input
                key={dominio}
                titulo={dominio}
                activo={form.business_domain === dominio}
                onClick={() => update('business_domain', dominio)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paso1;
