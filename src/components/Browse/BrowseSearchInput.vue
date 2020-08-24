<template>
  <!-- Search -->
  <v-text-field
    v-model="search"
    solo
    hide-details
    prepend-inner-icon="mdi mdi-magnify"
    :placeholder="`Search ${context}..`"
  />
</template>

<script>
export default {
  props: {
    context: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      search: null,
      searchTimeout: null
    }
  },

  watch: {
    search(val) {
      if (val === this.$route.query.search) return
      if (this.searchTimeout !== null) clearInterval(this.searchTimeout)

      // Set timer
      this.searchTimeout = setTimeout(() => {
        // Emit the event
        this.$emit('search', val)

        // Update the "search" query
        this.$router.replace({
          query: {
            ...this.$route.query,
            search: val
          }
        })
      }, 600)
    }
  },

  mounted() {
    const preSearch = this.$route.query.search
    if (preSearch) {
      this.search = preSearch
    }
  }
}
</script>