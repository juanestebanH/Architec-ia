import { Sparkles, Cpu } from 'lucide-react';
import { useEffect, useState } from 'react';

export function LoadingTransition({
  message = 'Analizando tus respuestas...',
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 bg-linear-to-br from-(--color-azul-fondo) via-(--color-azul-claro) to-(--color-gris) z-50 flex items-center justify-center">
      <div className="text-center text-(--color-blanco)">
        {/* Spinner con entrada */}
        <div
          className={`mb-8 transition-all duration-500 ${
            visible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}
        >
          <div className="relative inline-block">
            <div className="w-24 h-24 border-4 border-(--color-gris) border-t-(--color-blanco) rounded-full animate-spin-slow" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Cpu className="w-10 h-10" />
            </div>
          </div>
        </div>

        {/* Título */}
        <h2
          className={`text-2xl text-(--color-blanco) mb-2 transition-all duration-500 delay-200 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}
        >
          {message}
        </h2>

        {/* Subtexto */}
        <div
          className={`flex items-center justify-center gap-2 text-(--color-amarillo) transition-all duration-500 delay-400 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Generando tu recomendación personalizada</span>
        </div>

        {/* Barra de progreso */}
        <div
          className={`w-64 h-1 bg-(--color-gris) rounded-full mx-auto mt-8 overflow-hidden transform origin-left transition-all duration-1000 delay-600 ${
            visible ? 'scale-x-100' : 'scale-x-0'
          }`}
        >
          <div className="h-full w-1/3 bg-(--color-amarillo) rounded-full animate-progress" />
        </div>
      </div>
    </div>
  );
}
