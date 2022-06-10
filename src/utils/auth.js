/*
 * @Author: losting
 * @Date: 2022-05-25 17:32:48
 * @LastEditTime: 2022-05-27 16:42:12
 * @LastEditors: losting
 * @Description:
 * @FilePath: \moe-admin-template\src\utils\auth.js
 */
import ls from '@losting/ls';

export const getToken = () => ls.get('TOKEN');
export const setToken = (token) => {
  if (!token) {
    throw new Error('setToken: token is required');
  }
  ls.set('TOKEN', token);
};
export const removeToken = () => {
  ls.remove('TOKEN');
};
