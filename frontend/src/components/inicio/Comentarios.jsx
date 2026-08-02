import React from 'react';
import CardComentarios from './CardComentarios';

function Comentarios() {
  const comentarios = [
    {
      inicial: 'AS',
      nombre: 'Arquitecta de Software',
      cargo: 'Caso ilustrativo',
      comentario:
        '"ArchitectAI nos ayudó a evitar una arquitectura demasiado compleja. Ahora tenemos un MVP que escala perfectamente con nuestras necesidades."',
    },
    {
      inicial: 'DS',
      nombre: 'Desarrollador Senior',
      cargo: 'Caso ilustrativo',
      comentario:
        '"La velocidad con la que pudimos validar nuestras decisiones fue increíble. Es como tener un consultor senior disponible 24/7."',
    },

    {
      inicial: 'DI',
      nombre: 'Director de Ingeniería',
      cargo: 'Caso ilustrativo',
      comentario:
        '"Los diagramas visuales son una joya. Facilitaron enormemente la comunicación del diseño al resto del equipo de desarrollo."',
    },
  ];

  return (
    <section className="py-24 ">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-(--color-blanco)">
            Así lo verían los equipos que lo usen
          </h2>
          <p class="text-(--color-gris)">
            Casos de uso ilustrativos con perfiles técnicos típicos
          </p>
          <div className="flex justify-center mt-4">
            <span className="text-xs font-semibold text-(--color-amarillo) border border-(--color-amarillo)/50 rounded-full px-4 py-1">
              Caso de uso ilustrativo
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comentarios.map((comentario, index) => (
            <CardComentarios key={index} {...comentario} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Comentarios;
