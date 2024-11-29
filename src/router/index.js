import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';  // 首页组件
import ControlPanel from '../views/ControlPanel.vue';  // 控制面板组件

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,  // 路由指向 HomePage 组件
  },
  {
    path: '/control-panel',
    name: 'ControlPanel',
    component: ControlPanel,  // 路由指向 ControlPanel 组件
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
