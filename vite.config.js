import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
// import AutoImport from 'unplugin-auto-import/vite';
import { resolve } from 'path';
import Unocss from 'unocss/vite';
function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
    // AutoImport({}),
    Components({
      // relative paths to the directory to search for components.
      dirs: ['src/components'],
      // valid file extensions for components.
      extensions: ['vue'],
      // search for subdirectories
      deep: true,
      // resolvers for custom components
      resolvers: [
        // icon-park 另一种使用方式
        // (componentName) => {
        //   if (componentName.startsWith('Icon')) {
        //     return {
        //       name: componentName.slice(4),
        //       from: '@icon-park/vue-next',
        //     };
        //   }
        // },
      ],
      // generate `components.d.ts` global declarations,
      // also accepts a path for custom filename
      dts: false,
      // Allow subdirectories as namespace prefix for components.
      directoryAsNamespace: true,
      // Subdirectory paths for ignoring namespace prefixes
      // works when `directoryAsNamespace: true`
      globalNamespaces: [],
      // auto import for directives
      // default: `true` for Vue 3, `false` for Vue 2
      // Babel is needed to do the transformation for Vue 2, it's disabled by default for performance concerns.
      // To install Babel, run: `npm install -D @babel/parser @babel/traverse`
      directives: true,
      // filters for transforming targets
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    }),
  ],
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
  server: {
    // Listening on all local IPs
    host: true,
    port: 8888,
  },
});
