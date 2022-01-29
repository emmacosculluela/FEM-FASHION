import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/70s',
    name: '70s',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "70s" */ '../views/70s.vue')
  },
  {
    path: '/80s',
    name: '80s',
    component: () => import(/* webpackChunkName: "80s" */ '../views/80s.vue')
  },
  {
    path: '/90s',
    name: '90s',
    component: () => import(/* webpackChunkName: "90s" */ '../views/90s.vue')
  },
  {
    path: '/TrendPrediction',
    name: 'TrendPrediction',
    component: () => import(/* webpackChunkName: "TrendPrediction" */ '../views/TrendPrediction.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
