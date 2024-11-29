import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles/global.css';  // 确保路径正确

createApp(App).use(router).mount('#app');
