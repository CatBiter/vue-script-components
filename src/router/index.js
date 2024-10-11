import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout'

export const constRoutes  = [
  {
    path: '',
    component: Layout,
    redirect: '/workplace',
    children: [
      {
        path: 'workplace',
        component: () => import('@/views/WorkPlace'),
        name: 'WorkPlace',
        meta: { title: '工作台', icon: ''}
      }
    ]
  },{
    path: '/company',
    component: Layout,
    meta: { title: '公司', icon: ''},
    children: [
      {
        path: 'rightClickMenus',
        component: () => import('@/views/company/RightClickMenus'),
        name: 'RightClickMenus',
        meta: { title: '右键菜单', icon: ''}
      },{
        path: 'detailShow',
        component: () => import('@/views/company/DeatilShow'),
        name: 'DeatilShow',
        meta: { title: '详情显示', icon: ''}
      },{
        path: 'preview',
        component: () => import('@/views/company/Preview'),
        name: 'Preview',
        meta: { title: '文件/图片预览', icon: ''}
      }
    ]
  },{
    path: '/test',
    component: Layout,
    meta: { title: '测试', icon: ''},
    children: [
      {
        path: 'test1',
        component: () => import('@/views/company/RightClickMenus'),
        name: 'test1',
        meta: { title: '测试1', icon: ''}
      },{
        path: 'test2',
        component: () => import('@/views/company/DeatilShow'),
        name: 'test2',
        meta: { title: '测试2', icon: ''}
      },{
        path: 'test3',
        component: () => import('@/views/company/Preview'),
        name: 'test3',
        meta: { title: '测试3', icon: ''}
      }
    ]
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: constRoutes
});

// 导出路由实例
export default router;