/*
 * @Author: losting
 * @Date: 2022-05-18 10:04:32
 * @LastEditTime: 2022-06-10 09:59:06
 * @LastEditors: losting
 * @Description:
 * @FilePath: \vite-vue3-template\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router';

import routes from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
