/*
 * @Author: losting
 * @Date: 2022-05-18 10:04:32
 * @LastEditTime: 2022-05-18 12:08:39
 * @LastEditors: losting
 * @Description:
 * @FilePath: \vite-vue3-template\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router';

import Layout from '@/layout/index.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      title: '首页',
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: '工作台',
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
