function Norecomendado({ rechazadas }) {
  if (!rechazadas || rechazadas.length === 0) return null;

  return (
    <div className="w-full mt-12">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-4">
        <h2 className="text-2xl text-(--color-blanco) font-bold whitespace-nowrap">
          Arquitecturas No Recomendadas
        </h2>
        <div className="bg-gray-900 h-0.5 w-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rechazadas.map((arq, i) => (
          <div key={i} className="bg-(--color-azul-claro) p-4 rounded-xl">
            <h3 className="bg-(--color-rojo)/20 text-(--color-rojo) font-bold w-fit rounded-xl p-2 mb-3">
              {arq.name}
            </h3>
            <p className="text-(--color-gris) text-sm">{arq.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Norecomendado;
