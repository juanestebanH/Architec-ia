import { httpClient } from '../helpers/http';

export const postAgente = (datos) => {
  return httpClient('agente', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: { results_json: datos },
  });
};
