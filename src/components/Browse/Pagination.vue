<template>
  <div>
    <v-pagination
      v-model="localPage"
      :length="Math.ceil(itemsLength / perPage)"
      :total-visible="15"
    />
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      default: null,
      required: false
    },
    perPage: {
      type: Number,
      required: true
    },
    itemsLength: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      localPage: 1
    }
  },

  watch: {
    $route: {
      immediate: true,
      handler(to){
        const page = parseInt(to.query.page)
        if (page) this.localPage = page
      }
    },
    localPage(val) {
      if (this.localPage === this.$route.query.page) return
      if (val !== this.page) this.$emit('pageChanged', val)

      // Update the "page" query
      this.$router.replace({
        query: {
          ...this.$route.query,
          page: val
        }
      })
    }
  }
}
</script>