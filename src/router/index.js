import { createRouter, createWebHistory } from 'vue-router';

// 引入你的组件
import Home from '../view/Home.vue';

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
});

// 导出路由实例
export default router;