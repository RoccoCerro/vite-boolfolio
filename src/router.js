import { createWebHistory, createRouter } from 'vue-router'

import AppHome from './pages/AppHome.vue'
import AppPortfolio from './pages/AppPortfolio.vue'
import AppProject from './pages/AppProject.vue'
import AppContact from './pages/AppContact.vue'
import AppNotFound from './pages/AppNotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: AppHome },
    { path: '/portfolio', name: 'portfolio', component: AppPortfolio },
    { path: '/portfolio/:slug', name: 'project.show', component: AppProject, props: true},
    { path: '/contact', name:'contact', component: AppContact },
    { path: '/:patMatch(.*)*', name:'not-found', component: AppNotFound },
  ]
})

export default router