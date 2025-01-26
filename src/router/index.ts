import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Catalog from '@/views/Catalog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Catalog',
      name: 'Catalog',
      component: Catalog,
    },
  ],
})

export default router
