const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/index.vue'),
    meta: {
      title: '首页',
    },
  },
];

export default routes;
