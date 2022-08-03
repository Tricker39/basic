import { h } from 'vue';
const _routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/index.vue'),
    meta: {
      title: '首页',
      key: 'index',
      icon: 'home',
    },
  },
  {
    path: '/selector',
    name: 'selector',
    component: () => import('@/views/selector/index.vue'),
    meta: {
      title: '选择器',
      key: 'selector',
      icon: 'filter',
    },
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/layout/index.vue'),
    meta: {
      title: '布局',
      key: 'layout',
      icon: 'page',
    },
  },
];

export const basicRoutes = [..._routes];
