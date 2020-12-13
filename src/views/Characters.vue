<template>
  <div class="home-container my-10">
    <!-- Header -->
    <h2 class="font-weight-medium">
      Characters
    </h2>

    <!-- Query Operator -->
    <v-row class="mb-4">
      <v-col
        cols="12"
        md="6"
        class="pb-0"
      >
        <div class="d-flex justify-space-between">
          <!-- Order By -->
          <v-select
            v-model="order.by"
            solo
            hide-details
            label="Order By"
            class="mr-4"
            :items="orderItems"
          />

          <!-- Order Direction -->
          <v-select
            v-model="order.direction"
            solo
            hide-details
            label="Order Direction"
            :items="orderDirections"
            :disabled="order.by === null"
          />
        </div>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="pb-0"
      >
        <!-- The Search -->
        <browse-search-input
          context="characters"
          class="browse-search-input float-right"
        />
      </v-col>
    </v-row>

    <!-- Skeleton Loader -->
    <div v-if="searchLoading">
      <v-row>
        <v-col
          v-for="n in 8"
          :key="n"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-row no-gutters>
            <v-col cols="6">
              <v-skeleton-loader type="image" />
            </v-col>

            <v-col
              cols="6"
              class="px-2 py-2"
            >
              <v-skeleton-loader type="text" />
              <hr class="mb-3 mt-2">
              <v-skeleton-loader type="paragraph" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <!-- Content -->
    <template v-if="characters.length && !searchLoading">
      <v-row>
        <v-col
          v-for="character in characters"
          :key="character.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <!-- The Character -->
          <character :character="character" />
        </v-col>
      </v-row>
    </template>

    <!-- The Pagination -->
    <pagination
      v-if="characters.length"
      class="mt-6 mb-3"
      :per-page="perPage"
      :items-length="totalItems"
    />

    <!--- 404 / Empty -->
    <template v-if="!characters.length && !searchLoading">
      <h2 class="text-center">
        No Characters found..
      </h2>
    </template>
  </div>
</template>

<script>
import Character from "@/components/Characters/Character"
import Pagination from "@/components/Browse/Pagination"
import BrowseSearchInput from "@/components/Browse/BrowseSearchInput.vue"
import {getCharacters} from "@/utils/marvel"

export default {
  components: {
    Character,
    Pagination,
    BrowseSearchInput
  },

  data() {
    return {
      previousPage: null,
      perPage: 16,
      totalItems: null,
      searchLoading: false,
      orderItems: ['name', 'modified'],
      orderDirections: ['asc', 'desc'],
      order: {
        by: null,
        direction: null
      },
      characters: []
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
      const {by, direction} = this.order

      return direction === 'desc'
        ? `-${by}`
        : by
    },
    payload() {
      return {
        limit: this.perPage,
        offset: this.currentPage === 1 ? 0 : (this.currentPage - 1) * this.perPage,
        orderBy: this.orderBy,
        nameStartsWith: this.search || null
      }
    }
  },

  watch: {
    currentPage() {
      this.searchCharacters()
    },
    search() {
      if (this.currentPage === 1) {
        this.searchCharacters()
      } else {
        this.replaceToPageOne()
      }
    },
    orderBy() {
      if (this.currentPage === 1) {
        this.searchCharacters()
      } else {
        this.replaceToPageOne()
      }
    }
  },

  mounted() {
    this.searchCharacters()
  },

  methods: {
    replaceToPageOne() {
      this.$router.replace({
        ...this.$route.query,
        page: 1
      }).catch(()=>{})
    },
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    async searchCharacters() {
      this.scrollToTop()
      // Initiate Loading
      this.searchLoading = true

      try {
        // Fetch characters data
        const res = await getCharacters(this.payload)
        const {data} = res.data

        this.totalItems = data.total
        this.characters = data.results
      } catch (e) {
        this.$toast.set({
          color: 'red',
          msg: 'Failed to fetch characters.'
        })
      } finally {
        this.searchLoading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .browse-search-input {
    width: 100% !important;
  }

  @media screen and (min-width: 960px) {
    .browse-search-input {
      width: 75% !important;
    }
  }

  @media screen and (min-width: 1264px) {
    .browse-search-input {
      width: 50% !important;
    }
  }
</style>