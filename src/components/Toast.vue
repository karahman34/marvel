<template>
  <div>
    <v-snackbar
      v-if="show"
      top
      centered
      :color="color"
      :value="true"
    >
      <!-- Message -->
      <span class="font-font-weight-bolder">{{ msg }}</span>

      <template v-slot:action="{ attrs }">
        <v-btn
          text
          :color="buttonColor"
          v-bind="attrs"
          @click="close"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>

export default {
  data() {
    return {
      closeTimeOut: null
    }
  },

  computed: {
    previous() {
      return this.$toast.previous
    },
    color() {
      return this.$toast.color
    },
    timeout() {
      return this.$toast.timeout
    },
    msg() {
      return this.$toast.msg
    },
    show() {
      return this.$toast.show
    },
    buttonColor() {
      return !this.color ? 'red' : 'white'
    }
  },

  watch: {
    msg(val, old) {
      if (old !== null && (val !== null && val !== old)) {
        this.close()
        if (this.closeTimeOut) clearTimeout(this.closeTimeOut)

        this.$nextTick(() => setTimeout(() => this.$toast.set(this.previous), 250))
      }
    },
    show(val, old) {
      if (!old && val) {
        if (this.closeTimeOut) clearTimeout(this.closeTimeOut)
        
        this.closeTimeOut = setTimeout(() => this.close(), this.timeout)
      }
    }
  },

  methods: {
    close() {
      this.$toast.close()
    }
  }
}
</script>