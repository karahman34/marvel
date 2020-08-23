import {format} from "@/helpers/Router"

const name = 'comic'
const prefix = '/comics'
const routes = [
  {
    path: '',
    name: 'index',
    meta: {
      title: 'Comics'
    },
    component: () => import('@/views/Comics.vue')
  }
]

export default format({name, prefix, routes})