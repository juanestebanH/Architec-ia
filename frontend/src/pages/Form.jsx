import Formulario from '../components/form/Formulario.jsx';
import { useNavigate } from 'react-router-dom';
import { useAgente } from '../hooks/agente';
import { LoadingTransition } from '../components/form/LoadingTransition';

function Form() {
  const navigate = useNavigate();
  const { formAgente, loading } = useAgente();

  const irResultado = async (data) => {
    const response = await formAgente(data);

    if (!response?.err) {
      navigate('/resultado', { state: { datos: response } });
    }
  };

  if (loading) {
    return <LoadingTransition />;
  }

  return (
    <main>
      <h1 className="text-xl md:text-3xl font-bold text-center mt-10 text-(--color-blanco) animate-text">
        Formulario de Recomendación de Arquitectura
      </h1>
      <p className="text-center text-(--color-gris) mt-4 animate-text">
        Responde las siguientes preguntas para obtener recomendaciones
        personalizadas de arquitectura de software.
      </p>

      <div className="max-w-6xl mx-auto px-6 mt-8">
        <Formulario onSubmit={irResultado} />
      </div>
    </main>
  );
}

export default Form;
