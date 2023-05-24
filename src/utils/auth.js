import { get, set, remove } from '@losting/ls';

export const getToken = () => get('TOKEN');
export const setToken = (token) => {
  if (!token) throw new Error('setToken: token is required');
  set('TOKEN', token);
};
export const removeToken = () => void remove('TOKEN');
