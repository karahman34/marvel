import {format} from "@/helpers/Router"

const prefix = '/characters'
const name = 'character'

const routes = [
  {
    path: '/',
    name: 'index',
    meta: {
      title: 'Characters'
    },
    component: () => import('@/views/Characters.vue')
  }
]

export default format({prefix, name, routes})