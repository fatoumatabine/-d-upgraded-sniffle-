// authActions.js
import { LOGIN_SUCCESS, LOGOUT } from './types';

// Action de connexion réussie
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

// Action de déconnexion
export const logout = () => ({
  type: LOGOUT,
});
