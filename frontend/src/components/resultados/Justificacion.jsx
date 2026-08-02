function Justificacion({ justificacion }) {
  return (
    <div className="w-full mt-12">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-4">
        <h2 className="text-2xl text-(--color-blanco) font-bold">
          Justificación
        </h2>
        <div className="bg-gray-900 h-0.5 w-full"></div>
      </div>

      <div className="w-full bg-(--color-azul-claro) p-6 rounded-xl ">
        <p className="text-(--color-gris) leading-relaxed ">{justificacion}</p>
      </div>
    </div>
  );
}

export default Justificacion;
