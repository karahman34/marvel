<template>
  <div class="home-container my-10">
    <!-- Header -->
    <h2 class="font-weight-medium">
      Series
    </h2>

    <!-- Selects -->
    <v-row>
      <v-col
        v-for="(select, name) in selects"
        :key="name"
        cols="4"
      >
        <v-select
          v-model="select.val"
          solo
          hide-details
          :label="name"
          :items="select.items"
          :disabled="name === 'direction' && selects.order.val === null"
        />
      </v-col>
    </v-row>

    <!-- Search -->
    <browse-search-input
      context="series"
      class="browse-search-input my-4"
    />

    <!-- Skeleton loaders -->
    <v-row v-if="loading">
      <v-col
        v-for="n in 8"
        :key="n"
        cols="6"
        sm="4"
        lg="3"
      >
        <v-card>
          <v-skeleton-loader type="image" />

          <v-card-text>
            <v-skeleton-loader type="heading" />

            <v-skeleton-loader
              type="text"
              class="mt-6"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Content -->
    <v-row v-if="!loading && series.length">
      <v-col
        v-for="ser in series"
        :key="ser.id"
        md="3"
      >
        <!-- The Series -->
        <series :series="ser" />
      </v-col>
    </v-row>

    <!-- The Pagination -->
    <pagination
      v-if="series.length"
      class="mt-4"
      :per-page="limit"
      :items-length="itemsLength"
    />

    <!-- 404 Not found / Empty -->
    <h2
      v-if="!loading && !series.length"
      class="text-center white--text mt-4"
    >
      Series not found..
    </h2>
  </div>
</template>

<script>
import Series from "@/components/Series/Series"
import BrowseSearchInput from "@/components/Browse/BrowseSearchInput"
import Pagination from "@/components/Browse/Pagination"
import {getSeries} from "@/utils/marvel"


export default {
  components: {
    Series,
    Pagination,
    BrowseSearchInput
  },

  data() {
    return {
      limit: 16,
      loading: false,
      series: [],
      itemsLength: null,
      selects: {
        order: {
          val: null,
          items: ['title', 'modified', 'startYear']
        },
        direction: {
          val: null,
          items: ['asc', 'desc']
        },
        contain: {
          val: null,
          items: ['comic', 'megazine', 'trade paperback', 'hardcover', 'digest']
        }
      }
    }
  },

  computed: {
    orderBy() {
      const {order, direction} = this.selects

      return order.val !== null && direction.val === 'desc'
        ? `-${order.val}`
        : order.val
    },
    search() {
      return this.$route.query.search
    },
    currentPage() {
      return this.$route.query.page || 1
    },
    payload() {
      return {
        limit: this.limit,
        offset: this.currentPage === 1 ? 0 : (this.currentPage - 1) * this.limit,
        orderBy: this.orderBy,
        titleStartsWith: this.search || null
      }
    }
  },

  watch: {
    payload: {
      deep: true,
      handler(val, old) {
        if (this.currentPage > 1 && val.offset === old.offset) {
          this.$router.replace({
            query: {
              ...this.$route.query,
              page: 1
            }
          })
        } else {
          this.getSeriesHandler()
        }
      }
    }
  },

  mounted() {
    this.getSeriesHandler()
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    async getSeriesHandler() {
      this.scrollToTop()
      this.loading = true

      try {
        const res = await  getSeries(this.payload)
        const {data} = res.data

        this.series = data.results
        this.itemsLength = data.total
      } catch (e) {
        this.$toast.set({
          color: 'red',
          msg: 'Failed to fetch series data..'
        })
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .browse-search-input {
    width: 100%;
  }

  @media screen and (min-width: 900px) {
    .browse-search-input {
      width: 75%;
      margin: 0 auto;
    }
  }
</style>