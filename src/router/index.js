import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import characters from "@/router/characters"
import comics from "@/router/comics"
import series from "@/router/series"
import {setTitle} from "@/helpers/Router"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...comics,
  ...characters,
  ...series
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
