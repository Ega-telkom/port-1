import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import 'vue3-calendar-heatmap/dist/style.css'

const routes: RouteRecordRaw[] = [
  {
    path: '/', name: 'home', component: Home
  },
  { path: '/about', name: 'about', component: About 

  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router