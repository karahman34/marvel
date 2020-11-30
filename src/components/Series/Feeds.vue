<template>
  <div class="feed home-container">
    <!-- Series Detail -->
    <detail-dialog
      v-if="focusSeries"
      :series="focusSeries"
      @close="focusSeries = null"
    />

    <!-- Header -->
    <div class="feed-header">
      <p class="feed-header-text">
        New Series
      </p>

      <v-btn
        color="primary"
        :to="{name: 'series.index'}"
      >
        See More
      </v-btn>
    </div>

    <!-- Carousel -->
    <my-carousel class="mt-3">
      <!-- Skeleton -->
      <template v-if="loading">
        <slide
          v-for="n in limit"
          :key="n"
          class="px-2"
        >
          <v-skeleton-loader
            type="image"
          />
        </slide>
      </template>

      <!-- List Of Series -->
      <slide
        v-for="ser in series"
        v-else
        :key="ser.id"
        class="px-2"
      >
        <span
          class="feed-link"
          @click="focusSeries = ser"
        >
          <!-- Thumbnail -->
          <v-img
            :src="`${ser.thumbnail.path}/portrait_incredible.${ser.thumbnail.extension}`"
            class="feed-thumbnail"
          />
          <!-- Title -->
          <span
            class="feed-text"
            v-text="ser.title"
          />
        </span>
      </slide>
    </my-carousel>
  </div>
</template>

<script>
import {getSeries} from '@/utils/marvel'
import DetailDialog from "@/components/Series/DetailDialog"

export default {
  components: {
    DetailDialog
  },

  props: {
    limit: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      loading: false,
      series: [],
      focusSeries: null
    }
  },

  mounted () {
    this.getSeriesHandler()
  },

  methods: {
    async getSeriesHandler() {
      try {
        this.loading = true

        const res = await getSeries({
          limit: this.limit,
          orderBy: '-modified'
        })
        const {data} = res.data
        this.series = data.results
      } catch (err) {
        this.$toast.set({msg: 'Failed to get series.', color: 'danger'})
      } finally {
        this.loading = false
      }
    }
  }
}
</script>