/*
 * @Author: losting
 * @Date: 2022-05-18 09:22:59
 * @LastEditTime: 2022-05-19 16:06:16
 * @LastEditors: losting
 * @Description:
 * @FilePath: \vite-vue3-template\src\main.js
 */
import 'normalize.css';
import { createApp } from 'vue';
import router from '@/router';
import { createPinia } from 'pinia';
import App from './App.vue';

// 全局路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app');
