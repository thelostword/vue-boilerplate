/*
 * @Author: losting
 * @Date: 2022-05-18 11:11:36
 * @LastEditTime: 2022-05-18 12:03:22
 * @LastEditors: losting
 * @Description:
 * @FilePath: \vite-vue3-template\src\store\user.js
 */
import { defineStore, acceptHMRUpdate } from 'pinia';

/**
 * Simulate a login
 * @param {string} a
 * @param {string} p222222
 */
function apiLogin(a, p) {
  if (a === 'ed' && p === 'ed') return Promise.resolve({ isAdmin: true });
  if (p === 'ed') return Promise.resolve({ isAdmin: false });
  return Promise.reject(new Error('invalid credentials'));
}

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'Eduardo',
    isAdmin: true,
  }),

  actions: {
    logout() {
      this.$patch({
        name: '',
        isAdmin: false,
      });
    },

    /**
     * Attempt to login a user
     * @param {string} user
     * @param {string} password
     */
    async login(user, password) {
      const userData = await apiLogin(user, password);

      this.$patch({
        name: user,
        ...userData,
      });
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
