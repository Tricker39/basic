const _routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/index.vue'),
    meta: {
      title: '首页',
    },
  },
];

export const basicRoutes = [..._routes];
