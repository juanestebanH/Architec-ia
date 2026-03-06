import { X, CheckCircle2, XCircle, Zap, Users } from 'lucide-react';

export function ComparisonModal({ isOpen, onClose }) {
  const architectures = [
    {
      name: 'Monolito Modular',
      teamSize: '1-5',
      complexity: 3,
      cost: 2,
      scalability: 6,
      timeToMarket: 9,
      pros: ['Desarrollo rápido', 'Simple deployment', 'Bajo costo inicial'],
      cons: ['Escalamiento limitado', 'Un solo stack tecnológico'],
    },
    {
      name: 'Microservicios',
      teamSize: '15+',
      complexity: 9,
      cost: 8,
      scalability: 10,
      timeToMarket: 4,
      pros: ['Alta escalabilidad', 'Equipos independientes', 'Tech diversity'],
      cons: ['Muy complejo', 'Costos altos', 'Requiere DevOps avanzado'],
    },
    {
      name: 'Arquitectura Hexagonal',
      teamSize: '6-15',
      complexity: 7,
      cost: 5,
      scalability: 8,
      timeToMarket: 6,
      pros: ['Código mantenible', 'Flexible', 'Testeable'],
      cons: ['Curva de aprendizaje', 'Más archivos'],
    },
    {
      name: 'Serverless',
      teamSize: '1-10',
      complexity: 5,
      cost: 4,
      scalability: 9,
      timeToMarket: 8,
      pros: ['Auto-escalamiento', 'Pay per use', 'Sin infraestructura'],
      cons: ['Vendor lock-in', 'Cold starts', 'Límites de ejecución'],
    },
  ];

  const renderBar = (value, color) => (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          style={{ width: `${value * 10}%` }}
          className={`h-full ${color} rounded-full transition-all duration-500`}
        />
      </div>
      <span className="text-sm text-gray-600 w-8">{value}/10</span>
    </div>
  );

  if (!isOpen) return null;

  return (
    <>
      {/* backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
      />

      {/* modal */}
      <div className="fixed inset-4 md:inset-10 bg-(--color-azul-fondo) border border-gray-200 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col">
        {/* header */}
        <div className="bg-(--color-azul-claro) text-(--color-blanco) p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl mb-1">Comparación de Arquitecturas</h2>
            <p className="text-blue-100">
              Encuentra la mejor opción para tu proyecto
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {architectures.map((arch) => (
              <div
                key={arch.name}
                className="bg-(--color-azul-claro) rounded-xl p-6 border-2 border-gray-800 hover:border-(--color-amarillo) transition-colors"
              >
                <h3 className="text-xl mb-4 ">{arch.name}</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-(--color-gris)">
                    <Users className="w-4 h-4" />
                    Tamaño de equipo: {arch.teamSize} personas
                  </div>

                  <div>
                    <div className="text-sm text-(--color-gris) mb-1">
                      Complejidad
                    </div>
                    {renderBar(arch.complexity, 'bg-purple-500')}
                  </div>

                  <div>
                    <div className="text-sm text-(--color-gris) mb-1">
                      Costo
                    </div>
                    {renderBar(arch.cost, 'bg-orange-500')}
                  </div>

                  <div>
                    <div className="text-sm text-(--color-gris) mb-1">
                      Escalabilidad
                    </div>
                    {renderBar(arch.scalability, 'bg-green-500')}
                  </div>

                  <div>
                    <div className="text-sm text-(--color-gris) mb-1">
                      Time to Market
                    </div>
                    {renderBar(arch.timeToMarket, 'bg-blue-500')}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-green-700 mb-2 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      Ventajas
                    </div>

                    <ul className="space-y-1">
                      {arch.pros.map((pro, i) => (
                        <li
                          key={i}
                          className="text-sm text-(--color-gris) pl-2 border-l-2 border-green-200"
                        >
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-sm text-orange-700 mb-2 flex items-center gap-1">
                      <XCircle className="w-4 h-4" />
                      Desventajas
                    </div>

                    <ul className="space-y-1">
                      {arch.cons.map((con, i) => (
                        <li
                          key={i}
                          className="text-sm text-(--color-gris) pl-2 border-l-2 border-orange-200"
                        >
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-(--color-azul-claro) rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-blue-600 mt-0.5" />
              <div className="text-sm text-blue-900">
                <strong>Consejo:</strong> No existe una arquitectura perfecta
                universal. La mejor elección depende de tu contexto específico.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
