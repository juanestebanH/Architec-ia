import React from 'react';

function LogoStyle() {
  return (
    <div className="relative inline-flex gap-4 items-center py-1 px-4 rounded-2xl w-max overflow-hidden mb-5 animate-text">
      <div className="absolute inset-0 rounded-2xl p-px animate-border">
        <div className="h-full w-full rounded-2xl bg-(--color-azul-claro)" />
      </div>

      <div className="relative flex gap-4 items-center">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--color-amarillo) opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-(--color-amarillo)"></span>
        </span>

        <p className="text-(--color-gris) font-semibold tracking-wider">
          ArchitectIa
        </p>
      </div>
    </div>
  );
}

export default LogoStyle;
