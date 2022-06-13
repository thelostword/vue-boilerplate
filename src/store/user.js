/*
 * @Author: losting
 * @Date: 2022-05-18 11:11:36
 * @LastEditTime: 2022-06-13 11:10:51
 * @LastEditors: losting
 * @Description:
 * @FilePath: \vite-vue3-template\src\store\user.js
 */
import { defineStore, acceptHMRUpdate } from 'pinia';
import { setToken, removeToken } from '@/utils/auth';
import {
  login as apiLogin,
  userInfo as apiUserInfo,
} from '@/api/auth';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    userInfo: {},
  }),

  actions: {
    /**
     * 登录
     * @param {object} data 登录信息
     * @returns Promise 登录结果
     */
    async login(data) {
      const [err, res] = await apiLogin(data);
      if (err) return await Promise.reject(err);
      // 存储token
      setToken(res.token);
      return await Promise.resolve(res);
    },

    /**
     * 退出登录
     */
    logout() {
      // 删除token
      removeToken();
      // 重置store
      this.$reset();
    },

    /**
     * 获取用户信息
     * @returns Promise 获取用户信息
     */
    async getUserInfo() {
      const [err, res] = await apiUserInfo();
      if (err) return await Promise.reject(err);
      this.$patch({
        userInfo: res.data || {},
      });
      return await Promise.resolve(res);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
