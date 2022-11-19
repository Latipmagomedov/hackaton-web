import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/beside',
    name: 'Beside',
    component: () => import('../views/beside')
  },
  {
    path: '/places',
    name: 'Places',
    component: () => import('../views/places')
  },
  {
    path: '/like',
    name: 'Like',
    component: () => import('../views/like')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
