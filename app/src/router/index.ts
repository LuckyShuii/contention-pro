import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import ResearchView from '../views/ResearchView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ResearchView
    }
  ]
})

export default router
