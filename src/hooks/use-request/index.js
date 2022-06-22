/*
 * @Author: losting
 * @Date: 2022-06-22 15:00:07
 * @LastEditTime: 2022-06-22 15:21:52
 * @LastEditors: losting
 * @Description:
 * @FilePath: \vite-vue3-template\src\hooks\use-request\index.js
 */
import { reactive, toRefs } from 'vue';
import $to from '@/utils/await-to';

export default function useRequest(api) {
  const state = reactive({
    loading: false,
    error: null,
    data: null,
  });

  const run = async (params) => {
    state.loading = true;
    const [err, res] = await $to(api(params));
    if (err) {
      state.error = err;
    } else {
      state.data = res;
      state.error = null;
    }
    state.loading = false;
  };

  return {
    ...toRefs(state),
    run,
  };
}
