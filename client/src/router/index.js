import { createRouter, createWebHistory } from 'vue-router'

import IndexView from '../views/IndexView.vue'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import AnimeView from '../views/AnimeView.vue'
import ItemView from '../views/ItemView.vue'
import MangaView from '../views/MangaView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search/:q',
    name: 'search',
    component: SearchView
  },
  {
    path: '/anime',
    name: 'anime',
    component: AnimeView
  },
  {
    path: '/anime/:id',
    name: 'anime_item',
    component: ItemView,
    meta: {
      content: 'anime'
    }
  },
  {
    path: '/manga/:id',
    name: 'manga_item',
    component: ItemView,
    meta: {
      content: 'manga'
    }
  },
  {
    path: '/manga',
    name: 'manga',
    component: MangaView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

const nav_routes = [
  { name: 'search', path: '/' },
  { name: 'home', path: '/home' },
  { name: 'anime', path: '/anime' },
  { name: 'manga', path: '/manga' },
  { name: 'about', path: '/about' }
]

export default router
export { nav_routes }
