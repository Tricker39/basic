const _routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/index.vue'),
    meta: {
      title: '首页',
      key: 'index',
    },
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/layout/index.vue'),
    meta: {
      title: '布局',
      key: 'layout',
    },
  },
];

export const basicRoutes = [..._routes];
