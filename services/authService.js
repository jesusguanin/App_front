import { apiRequest } from '../utils/api';

export const authService = {
  login: (usuario, clave, perfil = 1) =>
    apiRequest({
      endpoint: '/api/auth/login',
      method: 'POST',
      body: { usuario, clave, perfil },
    }),
};
