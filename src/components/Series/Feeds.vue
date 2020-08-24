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

    <!-- Content -->
    <v-row class="mt-2">
      <!-- Skeleton -->
      <template v-if="loading">
        <v-col
          v-for="n in 12"
          :key="n"
          cols="4"
          xs="4"
          sm="3"
          xl="2"
        >
          <div>
            <v-skeleton-loader type="image" />
          </div>
        </v-col>
      </template>

      <!-- Content -->
      <template v-else>
        <v-col
          v-for="ser in series"
          :key="ser.id"
          xs="4"
          sm="3"
          xl="2"
        >
          <span
            class="feed-link"
            @click="focusSeries = ser"
          >
            <!-- Thumbnail -->
            <v-img
              :src="`${ser.thumbnail.path}/portrait_incredible.${ser.thumbnail.extension}`"
              class="mb-2 feed-thumbnail"
            />
            <!-- Title -->
            <span
              class="feed-text"
              v-text="ser.title"
            />
          </span>
        </v-col>
      </template>
    </v-row>
  </div>
</template>

<script>
import DetailDialog from "@/components/Series/DetailDialog"
import {getSeries} from '@/utils/marvel'

export default {
  components: {
    DetailDialog
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
          limit: 12,
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