import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'

const loadView = (view) => () => import(`../views/${view}.vue`)

let routes = [
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
    path: '/search/:q',
    name: 'search',
    component: loadView('SearchView')
  },
  {
    path: '/anime',
    name: 'anime',
    component: loadView('AnimeView')
  },
  {
    path: '/anime/:id',
    name: 'anime_item',
    component: loadView('ItemView'),
    meta: {
      content: 'anime'
    }
  },
  {
    path: '/manga/:id',
    name: 'manga_item',
    component: loadView('ItemView'),
    meta: {
      content: 'manga'
    }
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
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

routes = [
  { name: 'search', path: '/' },
  { name: 'home', path: '/home' },
  { name: 'anime', path: '/anime' },
  { name: 'manga', path: '/manga' },
  { name: 'about', path: '/about' }
]

export default router
export { routes }
