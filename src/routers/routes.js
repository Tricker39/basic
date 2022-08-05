const _routes = [
  {
    path: '/',
    name: 'home',
    // component: () => import('@/views/index.vue'),
    // redirect: '/index',
    meta: {
      title: '开始',
      key: 'index',
      icon: 'i-icon-park-outline-waterfalls-v',
    },
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index.vue'),
        meta: {
          title: '首页',
          key: 'index',
          icon: 'i-icon-park-outline-home',
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
      icon: 'i-icon-park-outline-waterfalls-v',
    },
    children: [
      {
        path: '/selector',
        name: 'selector',
        component: () => import('@/views/css/selector/index.vue'),
        meta: {
          title: '选择器',
          key: 'selector',
          icon: 'i-icon-park-outline-filter',
        },
      },
      {
        path: '/layout',
        name: 'layout',
        component: () => import('@/views/css/layout/index.vue'),
        meta: {
          title: '布局',
          key: 'layout',
          icon: 'i-icon-park-outline-page',
        },
      },
    ],
  },
  {
    name: 'js',
    meta: {
      title: 'JavaScript',
      key: 'js',
      icon: 'i-icon-park-outline-waterfalls-v',
    },
    children: [],
  },
];

export const basicRoutes = [..._routes];
