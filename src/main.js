// src/main.js (Vue 3 修正版)
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App)
    .use(router) // 注入 Router
    .mount('#app');
