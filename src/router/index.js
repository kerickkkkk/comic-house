import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/book',
    name: 'Book',
    // route level code-splitting
    // this generates a separate chunk (book.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "book" */ '../views/Book.vue')
  },
  //單頁暫時用
  {
    path: '/book-page',
    name: 'BookPage',
    component: () => import(/* webpackChunkName: "book-page" */ '../views/BookPage.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
