function NavResultados() {
  const secciones = [
    { id: 'justificacion', label: 'Justificación' },
    { id: 'detalle', label: 'Ventajas y Retos' },
    { id: 'flujo', label: 'Flujo lógico' },
    { id: 'futuro', label: 'Futura recomendación' },
    { id: 'alternativas', label: 'Alternativas' },
  ];

  const irASeccion = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <nav
      id="nav-resultados"
      aria-label="Navegación de secciones"
      className="sticky mt-10 top-0 z-50 w-full bg-(--color-azul-fondo)/90 backdrop-blur border-b border-(--color-gris)/40"
    >
      <ul className="flex flex-wrap justify-center gap-2 py-3 px-4">
        {secciones.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={(e) => irASeccion(e, s.id)}
              className="text-sm font-semibold text-(--color-gris) hover:text-(--color-amarillo) border border-(--color-gris)/40 hover:border-(--color-amarillo) rounded-full px-3 py-1 transition-colors"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavResultados;
