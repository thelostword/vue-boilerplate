/*
 * @Author: losting
 * @Date: 2022-05-18 09:22:59
 * @LastEditTime: 2022-11-10 15:19:18
 * @LastEditors: thelostword
 * @Description:
 * @FilePath: \vite-vue3-template\src\main.js
 */
import './style.css';
import { createApp } from 'vue';
import router from '@/router';
import { setupStore } from '@/store';
import App from './App.vue';

const app = createApp(App);

setupStore(app);

app
  .use(router)
  .mount('#app');
