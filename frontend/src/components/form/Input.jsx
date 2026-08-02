function Input({ titulo, activo, onClick }) {
  const manejarTeclado = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={manejarTeclado}
      className={`p-4 text-center border  rounded-xl  hover:bg-(--color-amarillo)/10 hover:border-(--color-amarillo) cursor-pointer hover:shadow-lg transition-shadow hover:text-(--color-amarillo) focus:outline-none focus:ring-2 focus:ring-(--color-amarillo) ${
        activo
          ? 'bg-(--color-amarillo)/10 text-(--color-amarillo) border-(--color-amarillo)'
          : 'bg-(--color-azul-claro) text-(--color-gris) border-(--color-gris)'
      }`}
    >
      <p>{titulo}</p>
    </div>
  );
}

export default Input;
