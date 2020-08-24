<template>
  <div class="home-container my-10">
    <!-- Header -->
    <h2 class="font-weight-medium">
      Comics
    </h2>

    <!-- Selects -->
    <v-row>
      <v-col
        v-for="(select, name) in selects"
        :key="name"
        cols="6"
        md="3"
      >
        <!-- Format -->
        <v-select
          v-model="selects[name].val"
          hide-details
          solo
          :label="name"
          :items="select.items"
        />
      </v-col>
    </v-row>

    <!-- Search -->
    <browse-search-input
      context="comics"
      class="browse-search-input my-3"
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
    <v-row v-if="!loading && comics.length">
      <v-col
        v-for="comic in comics"
        :key="comic.id"
        cols="6"
        sm="4"
        lg="3"
      >
        <!-- The Comic -->
        <comic :comic="comic" />
      </v-col>
    </v-row>

    <!-- Pagination -->
    <pagination
      v-if="comics.length"
      class="mt-6"
      :items-length="itemsLength"
      :per-page="perPage"
    />

    <!-- 404 Not found / empty -->
    <h2
      v-if="!loading && !comics.length"
      class="text-center mt-4"
    >
      Comics not found..
    </h2>
  </div>
</template>

<script>
import Comic from "@/components/Comics/Comic"
import BrowseSearchInput from "@/components/Browse/BrowseSearchInput"
import {getComics} from "@/utils/marvel"
import Pagination from "@/components/Browse/Pagination"

export default {
  components: {
    Comic,
    Pagination,
    BrowseSearchInput
  },

  data() {
    return {
      selects: {
        format: {
          val: null,
          items: [
            'comics',
            'megazine',
            'trade paperback',
            'hardcover',
            'digest',
            'graphic novel',
            'digital comic',
            'infinite comic'
          ]
        },
        formatType: {
          val: null,
          items: ['comic', 'collection']
        },
        order: {
          val: 'title',
          items: [
            'focDate',
            'onsaleDate',
            'title',
            'issueNumber',
            'modified'
          ]
        },
        direction: {
          val: null,
          items: ['asc', 'desc']
        }
      },
      perPage: 16,
      loading: false,
      comics: [],
      itemsLength: null
    }
  },

  computed: {
    search() {
      return this.$route.query.search
    },
    currentPage() {
      return this.$route.query.page || 1
    },
    orderBy() {
      const {direction, order} = this.selects

      return direction.val === 'desc'
        ? `-${order.val}`
        : order.val
    },
    payload() {
      const {format, formatType} = this.selects

      return {
        limit: this.perPage,
        format: format.val,
        formatType: formatType.val,
        orderBy: this.orderBy,
        offset: this.currentPage === 1 ? 0 : (this.currentPage - 1) * this.perPage,
        titleStartsWith: this.search || null
      }
    }
  },

  watch: {
    payload: {
      deep: true,
      handler(val, old) {
        if (this.currentPage !== 1 && val.offset === old.offset) {
          // Update page to 1
          this.$router.replace({
            query: {
              ...this.$route.query,
              page: 1
            }
          }).catch(() => {})
        } else {
          this.getComicsHandler()
        }
      }
    }
  },

  mounted() {
    this.getComicsHandler()
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    async getComicsHandler() {
      // Initiate loading
      this.loading = true

      this.scrollToTop()

      try {
        // Fetch the comics
        const res = await getComics(this.payload)
        const {data} = res.data

        this.comics = data.results
        this.itemsLength = data.total
      } catch (e) {
        this.$toast.set({
          color: 'red',
          msg: 'Failed to fetch comics..'
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