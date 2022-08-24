/*
 * @Author: losting
 * @Date: 2022-05-25 17:32:48
 * @LastEditTime: 2022-08-24 15:49:12
 * @LastEditors: thelostword
 * @Description:
 * @FilePath: \vite-vue3-template\src\utils\auth.js
 */
import * as ls from '@losting/ls';

export const getToken = () => ls.get('TOKEN');
export const setToken = (token) => {
  if (!token) throw new Error('setToken: token is required');
  ls.set('TOKEN', token);
};
export const removeToken = () => void ls.remove('TOKEN');
