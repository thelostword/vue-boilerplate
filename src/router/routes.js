/*
 * @Author: losting
 * @Date: 2022-06-10 09:58:20
 * @LastEditTime: 2022-06-10 09:58:21
 * @LastEditors: losting
 * @Description:
 * @FilePath: \vite-vue3-template\src\router\routes.js
 */
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

export default routes;
