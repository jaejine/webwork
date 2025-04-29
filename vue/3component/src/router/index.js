import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import NestedComponent from '@/views/NestedComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/nested',
      name: 'nested',
      component: () => import('../views/NestedComponent.vue')
    },    
    {
      path: '/parent',
      name: 'parnet',
      component: () => import('../views/ParentComponent4.vue')
    },
    {
      path: '/empcom',
      name: 'empcom',
      component: () => import('../views/EmpComponent.vue')
    },
    {
      path: '/empcomcp',
      name: 'empcomcp',
      component: () => import('../views/EmpView.vue')
    },
    {
      path: '/slot',
      name: 'slot',
      component: () => import('../views/SlotView.vue')
    },
  ],
})

export default router
