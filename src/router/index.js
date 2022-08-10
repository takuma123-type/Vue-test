import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/trivia',
    name: 'trivia',
    component: () => import(/* webpackChunkName: "trivia" */ '../views/TriviaView.vue')
  },
  {
    path: '/math',
    name: 'math',
    component: () => import(/* webpackChunkName: "math */'../views/MathView.vue')
  },
  {
    path: '/year',
    name: 'year',
    component: () => import(/* webpackChunkName: "year */'../views/YearView.vue')
  },
  {
    path: '/date',
    name: 'date',
    component: () => import(/* webpackChunkName: "date */'../views/DateView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
