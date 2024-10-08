import { createRouter, createWebHashHistory } from 'vue-router'
import ResearchView from '../views/ResearchView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ResearchView
    }
  ]
})

export default router
