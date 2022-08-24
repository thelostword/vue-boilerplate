/*
 * @Author: losting
 * @Date: 2022-05-18 09:22:59
 * @LastEditTime: 2022-08-24 15:55:11
 * @LastEditors: thelostword
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
