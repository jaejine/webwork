import { createRouter, createWebHistory } from 'vue-router'
import MainHome from '../views/MainHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainHome,
    },
  ],
})

export default router
