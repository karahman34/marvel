<template>
  <v-overlay
    opacity="0.6"
    z-index="99999999"
    :value="active"
  >
    <v-progress-circular
      indeterminate
      size="60"
    />
    <p class="mt-5 font-weight-medium">
      Loading...
    </p>
  </v-overlay>
</template>

<script>
export default {
  computed: {
    active() {
      return this.$loadingOverlay.active
    }
  }
}
</script>