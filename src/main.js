import Vue from 'vue'
import App from './App.vue'
import toast from './plugins/toast'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import loadingOverlay from "@/plugins/loadingOverlay"
import VueCarousel from 'vue-carousel'
import MyCarousel from '@/components/MyCarousel'

Vue.config.productionTip = false

Vue.use(toast, {store})
Vue.use(loadingOverlay, store)
Vue.use(VueCarousel)

Vue.component('my-carousel', MyCarousel)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
