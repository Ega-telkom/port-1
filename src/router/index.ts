import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import i18n from '@/i18n'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Project from '../views/Project.vue'
import Skill from '../views/Skill.vue'
import 'vue3-calendar-heatmap/dist/style.css'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { titleKey: 'home.title'}
  },
  {
    path: '/about',
    name: 'about',
    component: About ,
    meta: { title: 'About' }
  },
  {
    path: '/project',
    name: 'project',
    component: Project,
    meta: { title: 'Project' }
  },
  {
    path: '/skill',
    name: 'skill',
    component: Skill,
    meta: { title: 'Skill' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.titleKey) {
    document.title = i18n.global.t(to.meta.titleKey as string)
  }
  next()
})

export default router
