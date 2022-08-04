import { h } from 'vue';
const _routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/index.vue'),
    meta: {
      title: '首页',
      key: 'index',
      icon: 'waterfalls-v',
    },
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index.vue'),
        meta: {
          title: '首页',
          key: 'index',
          icon: 'home',
        },
      },
    ],
  },
  {
    path: '/css',
    name: 'css',
    meta: {
      title: 'CSS',
      key: 'css',
      icon: 'waterfalls-v',
    },
    children: [
      {
        path: '/selector',
        name: 'selector',
        component: () => import('@/views/css/selector/index.vue'),
        meta: {
          title: '选择器',
          key: 'selector',
          icon: 'filter',
        },
      },
      {
        path: '/layout',
        name: 'layout',
        component: () => import('@/views/css/layout/index.vue'),
        meta: {
          title: '布局',
          key: 'layout',
          icon: 'page',
        },
      },
    ],
  },
];

export const basicRoutes = [..._routes];
