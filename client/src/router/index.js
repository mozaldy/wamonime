import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'

const loadView = (view) => () => import(`../views/${view}.vue`)

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
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
  },
  {
    path: '/search',
    name: 'search',
    component: loadView('SearchView')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
export { routes }
