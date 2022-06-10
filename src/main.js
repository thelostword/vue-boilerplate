/*
 * @Author: losting
 * @Date: 2022-05-18 09:22:59
 * @LastEditTime: 2022-06-10 09:59:15
 * @LastEditors: losting
 * @Description:
 * @FilePath: \vite-vue3-template\src\main.js
 */
import 'normalize.css';
import { createApp } from 'vue';
import router from '@/router';
import { createPinia } from 'pinia';
import App from './App.vue';

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app');
