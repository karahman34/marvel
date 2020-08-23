import {format} from "@/helpers/Router"

const name = 'series'
const prefix = '/series'
const routes = [
  {
    path: '',
    name: 'index',
    meta: {
      title: 'Series'
    },
    component: () => import('@/views/Series.vue')
  }
]

export default format({name, prefix, routes})