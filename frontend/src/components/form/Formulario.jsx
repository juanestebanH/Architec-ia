import { useState } from 'react';
import {
  ArrowLeft,
  Globe,
  Smartphone,
  Cable,
  Monitor,
  Database,
} from 'lucide-react';
import Paso1 from './Paso1';
import Paso2 from './Paso2';
import Paso3 from './Paso3';
import Paso4 from './Paso4';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Formulario({ onSubmit }) {
  const [estadoBarra, setEstadoBarra] = useState(1);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    app_type: null,
    business_domain: null,
    project_size: null,
    expected_growth: null,
    expected_traffic: null,
    team_size: null,
    time_to_market: null,
    budget_level: null,
    scalability_importance: null,
    performance_importance: null,
    security_level: null,
    availability_requirement: null,
  });

  // UPDATE GENÉRICO
  const actualizar = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // VALIDACIONES CENTRALIZADAS
  const validations = {
    1: ['app_type', 'business_domain'],
    2: ['project_size', 'expected_growth', 'expected_traffic', 'team_size'],
    3: ['time_to_market', 'budget_level', 'scalability_importance'],
    4: ['performance_importance', 'security_level', 'availability_requirement'],
  };

  // SIGUIENTE STEP (PRO)
  const next = () => {
    const campos = validations[estadoBarra];
    const faltantes = campos.some((c) => !form[c]);

    if (faltantes) {
      notificacion();
      return;
    }

    if (estadoBarra < 4) setEstadoBarra((prev) => prev + 1);
    else {
      onSubmit(form);
    }
  };

  const back = () => {
    if (estadoBarra === 1) navigate('/');
    else setEstadoBarra((prev) => prev - 1);
  };

  const progreso = (estadoBarra / 4) * 100;

  const datosInput = [
    {
      icon: <Globe />,
      titulo: 'Web App',
      descripcion: 'Aplicacion Web Tradicional',
    },
    {
      icon: <Smartphone />,
      titulo: 'Mobile App',
      descripcion: 'Aplicacion Nativa/Hibrida',
    },
    {
      icon: <Cable />,
      titulo: 'Api',
      descripcion: 'Api REST o GraphQL',
    },
    {
      icon: <Monitor />,
      titulo: 'Desktop App',
      descripcion: 'Aplicacion de Escritorio',
    },
    {
      icon: <Database />,
      titulo: 'Sistema híbrido',
      descripcion: 'Procesamientos de datos',
    },
  ];

  const dominios = [
    'E-commerce',
    'Educacion',
    'Salud',
    'Finanzas',
    'Logistica',
  ];

  const tamanos = ['Pequeño', 'Mediano', 'Grande'];
  const crecimiento = ['Bajo', 'Moderado', 'Alto'];
  const usuarios = ['1-100', '101-1000', '+1000'];
  const desarrolladores = ['1-2', '3-5', '+6'];
  const tiempos = [
    'urgente (<1 mes)',
    'Normal (1-3 meses)',
    'Sin presion (>3 meses)',
  ];
  const presupuestos = ['Muy limitado', 'Moderado', 'Holgado'];
  const escalas = ['Baja', 'Media', 'Alto'];
  const velocidadesRespuesta = ['Normal', 'Importante', 'Crítica'];
  const TiposSeguridad = ['Basico', 'Media', 'Alta'];
  const TiposCaida = ['Aceptable', 'No aceptable', 'Crítica'];

  const notificacion = () =>
    toast.error('Faltan campos requeridos', {
      position: 'top-right',
      style: {
        borderRadius: '10px',
        background: 'var(--color-azul-claro)',
        color: '#fff',
      },
    });

  const pasos = [
    <Paso1
      form={form}
      update={actualizar}
      datosInput={datosInput}
      dominios={dominios}
    />,
    <Paso2
      form={form}
      update={actualizar}
      tamanos={tamanos}
      crecimiento={crecimiento}
      usuarios={usuarios}
      desarrolladores={desarrolladores}
    />,
    <Paso3
      form={form}
      update={actualizar}
      tiempos={tiempos}
      presupuestos={presupuestos}
      escalas={escalas}
    />,
    <Paso4
      form={form}
      update={actualizar}
      velocidadesRespuesta={velocidadesRespuesta}
      TiposSeguridad={TiposSeguridad}
      TiposCaida={TiposCaida}
    />,
  ];

  return (
    <div>
      <div>
        <div className="flex justify-between text-(--color-gris)">
          <div
            className="flex hover:text-(--color-blanco)  gap-2 cursor-pointer"
            onClick={back}
          >
            <ArrowLeft className="w-6 h-6  " />
            <h2>Atras</h2>
          </div>

          <div>
            <h2>Paso {estadoBarra} de 4</h2>
          </div>
        </div>

        <div>
          <progress
            max="100"
            value={progreso}
            className="w-full h-1 rounded-xl [&::-webkit-progress-value]:bg-(--color-amarillo) 
             [&::-moz-progress-bar]:bg-gray-700"
          ></progress>
        </div>
      </div>

      <div className="bg-(--color-azul-claro) w-full h-auto my-8 rounded-xl border border-(--color-gris) p-6">
        {pasos[estadoBarra - 1]}

        <div className="flex justify-end">
          <button
            onClick={next}
            className="bg-(--color-amarillo) text-(--color-azul-fondo) font-bold py-2 px-4 rounded-lg hover:bg-(--color-amarillo-hover) cursor-pointer mt-10 "
          >
            siguiente
          </button>
        </div>
      </div>

      <Toaster />
    </div>
  );
}

export default Formulario;
