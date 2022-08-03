import { createApp } from 'vue';
import App from './App.vue';
import router from '@/routers';
import 'highlight.js/styles/atom-one-dark.css';
import 'highlight.js/lib/common';
import hljsVuePlugin from '@highlightjs/vue-plugin';

createApp(App).use(router).use(hljsVuePlugin).mount('#app');
