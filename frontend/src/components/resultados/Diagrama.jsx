import { ArrowDown } from 'lucide-react';

function Diagrama({ diagramaData }) {
  return (
    <div className="w-full mt-12">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-4">
        <h2 className="text-2xl text-(--color-blanco) font-bold whitespace-nowrap">
          Flujo lógico
        </h2>
        <div className="bg-gray-900 h-0.5 w-full"></div>
      </div>

      <div>
        {diagramaData?.map((diagrama, index) => (
          <div key={index}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-(--color-azul-claro) text-(--color-verde) border border-(--color-verde) flex items-center justify-center shrink-0">
                {index + 1}
              </div>
              <div className="bg-(--color-azul-claro) p-4 rounded-lg text-(--color-gris) grow">
                {diagrama}
              </div>
            </div>

            {index < diagramaData.length - 1 && (
              <div className="flex justify-center my-3">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-5 bg-(--color-verde)"></div>
                  <ArrowDown className="w-5 h-5 text-(--color-verde)" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Diagrama;
