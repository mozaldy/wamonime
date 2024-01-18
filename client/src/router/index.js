import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '../views/SearchView.vue'

const loadView = (view) => () => import(`../views/${view}.vue`)

const routes = [
  {
    path: '/',
    name: 'search',
    component: SearchView
  },
  {
    path: '/home',
    name: 'home',
    component: loadView('HomeView')
  },
  {
    path: '/anime',
    name: 'anime',
    component: loadView('AnimeView')
  },
  {
    path: '/manga',
    name: 'manga',
    component: loadView('MangaView')
  },
  {
    path: '/about',
    name: 'about',
    component: loadView('AboutView')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
export { routes }
