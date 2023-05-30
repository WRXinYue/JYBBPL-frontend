// 不需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'App',
    component: () => import('@/App.vue'),
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/pages/index.vue'),
  },
];

export default commonRoutes;
