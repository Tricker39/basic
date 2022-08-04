import { createApp } from 'vue';
import App from './App.vue';
import router from '@/routers';
import 'highlight.js/styles/atom-one-dark.css';
import 'highlight.js/lib/common';
import hljsVuePlugin from '@highlightjs/vue-plugin';
import '@/assets/css/style.css';
import 'uno.css';

createApp(App).use(router).use(hljsVuePlugin).mount('#app');
