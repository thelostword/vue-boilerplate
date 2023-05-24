import { defineStore, acceptHMRUpdate } from 'pinia';
import store from '.';

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

export const useGlobalStoreHook = () => useGlobalStore(store);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot));
}
