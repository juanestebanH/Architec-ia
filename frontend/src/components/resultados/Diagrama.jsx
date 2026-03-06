import { graphviz } from 'd3-graphviz';
import { useEffect } from 'react';

function Diagrama({ diagramaData }) {
  useEffect(() => {
    graphviz('#diagram').renderDot(diagramaData);
  }, [diagramaData]);

  return (
    <div className="w-full mt-12">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-4">
        <h2 className="text-2xl text-(--color-blanco) font-bold whitespace-nowrap">
          Diagrama Logico
        </h2>
        <div className="bg-gray-900 h-0.5 w-full"></div>
      </div>

      <div
        id="diagram"
        className="w-full  bg-(--color-azul-claro) rounded-xl flex justify-center items-center p-6"
      ></div>
    </div>
  );
}

export default Diagrama;
