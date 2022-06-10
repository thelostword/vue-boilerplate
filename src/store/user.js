/*
 * @Author: losting
 * @Date: 2022-05-18 11:11:36
 * @LastEditTime: 2022-06-10 11:00:20
 * @LastEditors: losting
 * @Description:
 * @FilePath: \vite-vue3-template\src\store\user.js
 */
import { defineStore, acceptHMRUpdate } from 'pinia';
import $to from '@/utils/await-to';
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
      const [err, res] = await $to(apiLogin(data));
      if (err) {
        const reject = await Promise.reject(err);
        return reject;
      }
      // 存储token
      setToken(res.token);
      const resolve = await Promise.resolve(res);
      return resolve;
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
      const [err, res] = await $to(apiUserInfo());
      if (err) {
        const reject = await Promise.reject(err);
        return reject;
      }
      this.$patch({
        userInfo: res.data || {},
      });
      const resolve = await Promise.resolve(res);
      return resolve;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
