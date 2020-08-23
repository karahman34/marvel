const vuexObj = {
  namespaced: true,

  state: {
    active: false
  },

  mutations: {
    SET_ACTIVE(state, val) {
      state.active = val
    }
  }
}

class LoadingOverlay {
  constructor(vuexName, store) {
    this.store = store
    this.vuexName = vuexName
  }

  get active() {
    return this.store.state[this.vuexName].active
  }

  show() {
    this.store.commit(`${this.vuexName}/SET_ACTIVE`, true)
  }

  hide() {
    this.store.commit(`${this.vuexName}/SET_ACTIVE`, false)
  }
}

export default {
  install: (Vue, store) => {
    const vuexName = 'loadingOverlay'

    store.registerModule(vuexName, vuexObj)
    Vue.prototype.$loadingOverlay = new LoadingOverlay(vuexName, store)
  }
}