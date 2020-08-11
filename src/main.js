import Vue from 'vue'
import App from './App.vue'
import toast from './plugins/toast'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(toast, {store})

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
