import Home from '@/views/index.vue';
const _routes = [
	{
		path: '/',
		name: 'home',
		// component: () => import('@/views/index.vue'),
		component: Home,
	},
];

export const basicRoutes = [..._routes];
