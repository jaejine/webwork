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
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: LoginView,
    // },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/boardTable',
      name: 'boardTable',
      component: () => import('../views/boardTable.vue')
    },
    {
      path: '/boardInfo',
      name: 'boardInfo',
      component: () => import('../views/BoardInfo.vue')
    },
    {
      path: '/boardForm',
      name: 'boardForm',
      component: () => import('../views/BoardForm.vue')
    },
    {
      path: '/board',
      name: 'boardForm',
      component: () => import('../views/BoardForm.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
  ],
})

export default router
