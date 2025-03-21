import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HetiNaptár.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/idoPontFog',
      name: 'idoPontFog',
      component: () => import('../views/IdőPontFoglalás.vue'),
    },
  ],
})

export default router
