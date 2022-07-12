import { createRouter, createWebHistory } from 'vue-router';
import { basicRoutes } from './routes';

// app router
export default createRouter({
	history: createWebHistory(),
	routes: basicRoutes,
	strict: true,
	scrollBehavior: () => ({ left: 0, top: 0 }),
});
