// services/http/client.js
const API_URL = 'http://127.0.0.1:8000/';

export const httpClient = async (endpoint, options = {}) => {
  const controller = new AbortController();

  const defaultHeaders = {
    Accept: 'application/json',
  };

  const isFormData = options.body instanceof FormData;

  const config = {
    method: options.method || 'GET',
    headers: isFormData
      ? options.headers
      : {
          ...defaultHeaders,
          'Content-Type': 'application/json',
          ...options.headers,
        },
    signal: controller.signal,
    body: options.body
      ? isFormData
        ? options.body
        : JSON.stringify(options.body)
      : null,
  };

  setTimeout(() => controller.abort(), 3000);

  try {
    const res = await fetch(`${API_URL}${endpoint}`, config);
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return {
        err: true,
        status: res.status,
        ...data,
      };
    }

    return data;
  } catch (error) {
    return {
      err: true,
      status: '00',
      message: error.message || 'Error de red',
    };
  }
};
