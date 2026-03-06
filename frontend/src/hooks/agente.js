import { useState } from 'react';
import { postAgente } from '../services/agente.service';

export const useAgente = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formAgente = async (data) => {
    setLoading(true);
    setError(null);

    const response = await postAgente(data);

    if (response.err) {
      setError(response.message);
    }

    setLoading(false);
    return response;
  };

  return { formAgente, loading, error };
};
