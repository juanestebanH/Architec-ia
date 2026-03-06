import React from 'react';

function Footer() {
  return (
    <footer class="py-12 border-t border-slate-800 ">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div class="flex items-center space-x-2">
          <span class="font-bold text-lg text-(--color-blanco)">
            ArchitectAI
          </span>
        </div>
        <div class="flex space-x-7 text-sm text-(--color-gris) ">
          Privacidad
          <a
            class="hover:text-(--color-amarillo) transition-colors"
            href="#"
          ></a>
          <a class="hover:text-(--color-amarillo) transition-colors" href="#">
            Términos
          </a>
          <a class="hover:text-(--color-amarillo) transition-colors" href="#">
            Contacto
          </a>
        </div>
        <p class="text-sm text-(--color-gris)">
          © 2024 ArchitectAI. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
