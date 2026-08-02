import { useState } from 'react';
import {
  ArrowLeft,
  Globe,
  Smartphone,
  Cable,
  Monitor,
  Database,
  MoreHorizontal,
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
  const [errores, setErrores] = useState({});
  const [form, setForm] = useState({
    app_type: null,
    app_type_otro: '',
    business_domain: null,
    business_domain_otro: '',
    deployment_environment: null,
    expected_growth: null,
    expected_traffic: null,
    team_size: null,
    team_seniority: null,
    time_to_market: null,
    infra_budget_usd: null,
    system_integrations: [],
    performance_importance: null,
    availability_sla: null,
    compliance_requirements: [],
  });

  // UPDATE GENÉRICO
  const actualizar = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
    setErrores((prev) => ({ ...prev, [field]: false }));
  };

  const toggle = (field, value) => {
    setForm((prev) => {
      const actual = Array.isArray(prev[field]) ? prev[field] : [];
      let nuevo;

      if (value === 'Ninguna') {
        nuevo = actual.includes('Ninguna') ? [] : ['Ninguna'];
      } else if (actual.includes(value)) {
        nuevo = actual.filter((v) => v !== value);
      } else {
        nuevo = [...actual.filter((v) => v !== 'Ninguna'), value];
      }

      return { ...prev, [field]: nuevo };
    });
    setErrores((prev) => ({ ...prev, [field]: false }));
  };

  const validations = {
    1: ['app_type', 'business_domain', 'deployment_environment'],
    2: ['expected_growth', 'expected_traffic', 'team_size', 'team_seniority'],
    3: ['time_to_market', 'infra_budget_usd', 'system_integrations'],
    4: [
      'performance_importance',
      'availability_sla',
      'compliance_requirements',
    ],
  };

  // SIGUIENTE STEP (PRO)
  const next = () => {
    const campos = validations[estadoBarra];
    const nuevosErrores = {};
    let faltantes = false;

    campos.forEach((c) => {
      const valor = form[c];
      let vacio = Array.isArray(valor) ? valor.length === 0 : !valor;

      if (!vacio && valor === 'Otro') {
        const custom = form[`${c}_otro`];
        vacio = !custom || !String(custom).trim();
      }

      if (vacio) {
        nuevosErrores[c] = true;
        faltantes = true;
      }
    });

    setErrores(nuevosErrores);

    if (faltantes) {
      notificacion();
      return;
    }

    if (estadoBarra < 4) {
      setErrores({});
      setEstadoBarra((prev) => prev + 1);
    } else {
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
      descripcion: 'Aplicación web tradicional',
    },
    {
      icon: <Smartphone />,
      titulo: 'Mobile App',
      descripcion: 'Aplicación nativa/híbrida',
    },
    {
      icon: <Cable />,
      titulo: 'API',
      descripcion: 'API REST o GraphQL',
    },
    {
      icon: <Monitor />,
      titulo: 'Desktop App',
      descripcion: 'Aplicación de escritorio',
    },
    {
      icon: <Database />,
      titulo: 'Sistema híbrido',
      descripcion: 'Combina una app web y una móvil en un solo sistema',
    },
    {
      icon: <MoreHorizontal />,
      titulo: 'Otro',
      descripcion: 'Otro tipo de aplicación (escríbelo)',
    },
  ];

  const dominios = [
    'E-commerce',
    'Educación',
    'Salud',
    'Finanzas',
    'Logística',
    'Otro',
  ];

  const crecimiento = ['Bajo', 'Moderado', 'Alto'];
  const usuarios = [
    '1-100 usuarios concurrentes',
    '101-1000 usuarios concurrentes',
    '+1000 usuarios concurrentes',
  ];
  const desarrolladores = ['1-2', '3-5', '+6'];
  const tiempos = [
    'Urgente (<1 mes)',
    'Normal (1-3 meses)',
    'Sin presión (>3 meses)',
  ];
  const velocidadesRespuesta = ['Normal', 'Importante', 'Crítica'];
  const despliegues = [
    'Cloud público',
    'Cloud privado',
    'On-premises',
    'Híbrido',
  ];
  const integraciones = [
    'Ninguna',
    'ERP',
    'APIs de terceros',
    'Sistema legacy a migrar',
  ];
  const senioridades = ['Mayormente junior', 'Mixto', 'Mayormente senior'];
  const presupuestosInfra = [
    'Menos de 100 USD',
    '100-500 USD',
    '500-2000 USD',
    'Más de 2000 USD',
  ];
  const cumplimientos = ['Ninguna', 'GDPR', 'HIPAA', 'PCI-DSS', 'Otra'];
  const slas = [
    '99% (puede tener caídas ocasionales)',
    '99.9% (alta disponibilidad)',
    '99.99% (crítico, casi sin downtime)',
  ];

  const notificacion = () =>
    toast.error('Completa las preguntas marcadas en rojo para continuar', {
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
      errores={errores}
      datosInput={datosInput}
      dominios={dominios}
      despliegues={despliegues}
    />,
    <Paso2
      form={form}
      update={actualizar}
      errores={errores}
      crecimiento={crecimiento}
      usuarios={usuarios}
      desarrolladores={desarrolladores}
      senioridades={senioridades}
    />,
    <Paso3
      form={form}
      update={actualizar}
      toggle={toggle}
      errores={errores}
      tiempos={tiempos}
      presupuestosInfra={presupuestosInfra}
      integraciones={integraciones}
    />,
    <Paso4
      form={form}
      update={actualizar}
      toggle={toggle}
      errores={errores}
      velocidadesRespuesta={velocidadesRespuesta}
      slas={slas}
      cumplimientos={cumplimientos}
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
            {estadoBarra === 4 ? 'Generar recomendación' : 'Siguiente'}
          </button>
        </div>
      </div>

      <Toaster />
    </div>
  );
}

export default Formulario;
