import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from '@/views/MainComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainComponent
  },
  {
    path: '/allcheck',
    name: 'allcheck',
    component: () => import('../views/AllCheck.vue'),
  },
  {
    path: '/addpost',
    name: 'addpost',
    component: () => import('../views/AddPost.vue'),
  },
  {
    path: '/boardinfo',
    name: 'boardinfo',
    component: () => import('../views/BoardInfo.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
