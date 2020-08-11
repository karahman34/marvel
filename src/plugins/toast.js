const timeoutDefault = 3000
const colorDefault = undefined
const moduleName = 'toast'

const toastModule = {
  namespaced: true,

  state: {
    show: false,
    msg: null,
    color: colorDefault,
    timeout: timeoutDefault,
    previous: null
  },

  mutations: {
    SET_COLOR(state, val) {
      state.color = val
    },
    SET_TIMEOUT(state, val) {
      state.timeout = val
    },
    SET_MSG(state, val) {
      state.msg = val
    },
    SET_SHOW(state, val) {
      state.show = val
    },
    CLEAR(state) {
      state.previous = {
        msg: state.msg,
        color: state.color,
        timeout: state.timeout
      }

      state.color = colorDefault,
      state.timeout = timeoutDefault,
      state.msg = null,
      state.show = false
    }
  }
}

class Toast {
  constructor(store) {
    this.store = store
  }

  get previous() {
    return this.store.state[moduleName].previous
  }

  get show() {
    return this.store.state[moduleName].show
  }

  get msg() {
    return this.store.state[moduleName].msg
  }

  get timeout() {
    return this.store.state[moduleName].timeout
  }

  get color() {
    return this.store.state[moduleName].color
  }

  set({msg, timeout, color}) {
    this.store.commit(`${moduleName}/SET_MSG`, msg)
    this.store.commit(`${moduleName}/SET_SHOW`, true)

    if (color) this.store.commit(`${moduleName}/SET_COLOR`, color)
    if (timeout) this.store.commit(`${moduleName}/SET_TIMEOUT`, timeout)
  }

  close() {
    this.store.commit(`${moduleName}/CLEAR`)
  }
}

export default {
  install: (Vue, {store}) => {
    store.registerModule(moduleName, toastModule)

    Vue.prototype.$toast = new Toast(store)
  }
}