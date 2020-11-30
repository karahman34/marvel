<template>
  <carousel
    navigation-enabled
    :navigation-prev-label="prevLabel"
    :navigation-next-label="nextLabel"
    :pagination-enabled="false"
    :per-page-custom="[[600,4], [960, 6]]"
  >
    <slot />
  </carousel>
</template>

<script>
export default {
  data() {
    return {
      prevLabel: '<i class="mdi mdi-chevron-left-circle prev-label"></i>',
      nextLabel: '<i class="mdi mdi-chevron-right-circle next-label"></i>'
    }
  }
}
</script>

<style>
.prev-label,.next-label {
  color: white;
  font-size: 38px;
}

.VueCarousel-navigation button {
  padding: 0 !important;
}

@media screen and (max-width: 600px) {
  .VueCarousel-navigation-prev {
    transform: translateX(-50%) translateY(-50%) !important;
  }

  .VueCarousel-navigation-next {
    transform: translateX(50%) translateY(-50%) !important;
  }
}
</style>