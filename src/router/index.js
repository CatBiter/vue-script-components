import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout'



// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      component: Layout,
      redirect: '/workplace',
      children: [
        {
          path: '/workplace',
          component: () => import('@/views/WorkPlace'),
          name: 'WorkPlace',
        }
      ]
    },{
      path: ''
    }
  ],
});

// 导出路由实例
export default router;