/*
 * @Author: losting
 * @Date: 2022-05-18 11:29:58
 * @LastEditTime: 2022-05-18 11:29:58
 * @LastEditors: losting
 * @Description:
 * @FilePath: \vite-vue3-template\src\store\global.js
 */
import { defineStore, acceptHMRUpdate } from 'pinia';

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    isLoading: false,
  }),
  actions: {
    setLoading(isLoading) {
      this.$patch({
        isLoading,
      });
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot));
}
