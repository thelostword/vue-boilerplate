import { defineStore, acceptHMRUpdate } from 'pinia';
import { setToken, removeToken } from '@/utils/auth';
import {
  login as apiLogin,
  userInfo as apiUserInfo,
} from '@/api/auth';
import $to from '@/utils/await-to';

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
      const [err, res] = await $to(apiUserInfo());
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
