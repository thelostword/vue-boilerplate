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

export const setupRouter = (app) => void app.use(router);
export default router;
