function Pregunta({ titulo, error, grid, children, extra }) {
  return (
    <div>
      <h1 className={`my-4 font-bold ${error ? 'text-red-500' : 'text-gray-400'}`}>
        {titulo}
      </h1>
      <div
        className={`${grid} gap-4 ${
          error
            ? 'mb-4 p-2 border-2 border-red-500/60 rounded-xl'
            : 'mb-10'
        }`}
      >
        {children}
      </div>
      {extra}
      {error && (
        <p className="text-red-500 text-sm mb-6">
          Esta respuesta es obligatoria para continuar.
        </p>
      )}
    </div>
  );
}

export default Pregunta;
