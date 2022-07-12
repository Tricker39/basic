import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
function pathResolve(dir) {
	return resolve(process.cwd(), '.', dir);
}
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: [
			// @/xxxx => src/xxxx   需要匹配 ^@/ @开头会与 windicss 与 vue 冲突
			{
				find: /^@\//,
				replacement: pathResolve('src') + '/',
			},
			// #/xxxx => types/xxxx
			{
				find: /^#\//,
				replacement: pathResolve('types') + '/',
			},
		],
	},
});
