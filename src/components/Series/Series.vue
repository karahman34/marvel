<template>
  <div>
    <!-- Detail Dialog-->
    <detail-dialog
      v-if="openDetail"
      :series="series"
      @close="openDetail = false"
    />

    <!-- Content -->
    <v-card class="series">
      <!-- Thumbnail -->
      <v-img 
        min-height="200px"
        :src="thumbnailSrc"
      />

      <v-card-title>
        <span class="series-title">{{ series.title }}</span>
      </v-card-title>

      <v-card-text class="pb-0">
        <p class="series-description mb-0">
          {{ series.description | slice }}
        </p>
      </v-card-text>

      <v-card-actions class="justify-end">
        <v-btn
          text
          color="orange"
          class="mr-1"
          @click.native="openDetail = true"
        >
          Detail
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import DetailDialog from "@/components/Series/DetailDialog"

export default {
  components: {
    DetailDialog
  },

  filters: {
    slice(val) {
      if (!val) return 'Has no description.'
      const strLength = val.length

      if (strLength <= 100) return val

      const slicedDesc = val.slice(0, 100)
      return `${slicedDesc}...`
    }
  },

  props: {
    series: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      openDetail: false
    }
  },

  computed: {
    thumbnailSrc() {
      const {path, extension} = this.series.thumbnail

      return `${path}/standard_xlarge.${extension}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .series {
    .series-title {
      font-size: 18px;
      font-weight: bold;
    }
  }
</style>