import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/board',
      name: 'board',
      component: () => import('../views/BoardList.vue'),
    },
    {
      path: '/boardinfo',
      name: '/boardinfo',
      component: () => import('../views/BoardInfo.vue'),
    },
    {
      path: '/boardform',
      name: '/boardform',
      component: () => import('../views/BoardForm.vue'),
    },
    {
      path: '/boardaddform',
      name: '/boardaddform',
      component: () => import('../views/BoardAddForm.vue'),
    },
  ],
})

export default router
