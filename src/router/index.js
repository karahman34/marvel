import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {setTitle} from "@/helpers/Router"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  setTitle(to)

  next()
})

export default router
