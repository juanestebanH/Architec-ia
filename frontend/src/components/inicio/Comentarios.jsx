import React from 'react';
import CardComentarios from './CardComentarios';

function Comentarios() {
  const comentarios = [
    {
      inicial: 'MF',
      nombre: 'Maria Fernanda',
      cargo: 'Arquitecta de Software',
      comentario:
        '"ArchitectAI nos ayudó a evitar una arquitectura demasiado compleja. Ahora tenemos un MVP que escala perfectamente con nuestras necesidades."',
    },
    {
      inicial: 'AL',
      nombre: 'Alejandro Lopez',
      cargo: 'Desarrollador senior',
      comentario:
        '"La velocidad con la que pudimos validar nuestras decisiones fue increíble. Es como tener un consultor senior disponible 24/7."',
    },

    {
      inicial: 'RB',
      nombre: 'Ricardo Bernal',
      cargo: 'Director de Ingeniería',
      comentario:
        '"Los diagramas visuales son una joya. Facilitaron enormemente la comunicación del diseño al resto del equipo de desarrollo."',
    },
  ];

  return (
    <section className="py-24 ">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-(--color-blanco">
            Equipos que confían en ArchitectAI
          </h2>
          <p class="text-(--color-gris)">
            Desarrolladores y arquitectos de todo el mundo
          </p>
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
