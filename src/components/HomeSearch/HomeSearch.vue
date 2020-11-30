<template>
  <div>
    <!-- Text Input -->
    <v-text-field
      v-model="search"
      class="home-search-input"
      solo
      dense
      rounded
      single-line
      hide-details
      prepend-inner-icon="mdi mdi-magnify"
      label="Search for comics,characters,series.."
    />

    <!-- The dialog -->
    <v-dialog
      v-model="dialog"
      max-width="1000"
    >
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center">
          <div>
            <v-icon>mdi mdi-magnify</v-icon>
            Search
          </div>

          <v-btn icon>
            <v-icon>mdi mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <!-- Text Input -->
        <div
          class="px-2 pt-1"
          :class="{'pt-2': search !== null && search.lenght}"
        >
          <v-text-field
            v-model="search"
            label="Enter the keywords here.."
            :loading="loading"
          />
        </div>
        
        <!-- The Tabs -->
        <v-tabs
          v-model="tabActive"
          grow
          class="py-4"
        >
          <v-tab
            v-for="tab in tabs"
            :key="tab"
          >
            {{ tab }}
          </v-tab>
        </v-tabs>

        <!-- The Tabs Items -->
        <v-tabs-items v-model="tabActive">
          <v-tab-item
            v-for="tab in tabs"
            :key="tab"
            class="py-3 px-3"
          >
            <!-- Loading -->
            <div
              v-if="loading"
              class="text-center font-weight-medium white--text"
            >
              Loading...
            </div>

            <!-- The Content -->
            <template v-if="!loading && results.length">
              <!-- Main Content -->
              <component
                :is="tabActiveComponent"
                :results="results"
              />

              <!-- See more button -->
              <div class="pb-1">
                <v-btn
                  block
                  color="success"
                  :to="goToRouteIndex()"
                  :disabled="results.length >= itemsLength"
                >
                  See more
                </v-btn>
              </div>
            </template>

            <!-- 404 / Empty -->
            <h2
              v-if="!loading && !results.length"
              class="text-center"
            >
              no results..
            </h2>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ComicResults from "@/components/HomeSearch/ComicResults"
import CharacterResults from "@/components/HomeSearch/CharacterResults"
import SeriesResults from "@/components/HomeSearch/SeriesResults"
import {getCharacters, getComics, getSeries} from "@/utils/marvel"

export default {
  components: {
    ComicResults,
    CharacterResults,
    SeriesResults
  },

  data() {
    return {
      dialog: false,
      loading: false,
      search: null,
      searchTimeout: null,
      results: [],
      itemsLength: null,
      tabActive: 0,
      tabs: ['comics', 'characters', 'series'],
      tabActiveComponent: 'comic-results'
    }
  },

  watch: {
    search() {
      if (this.searchTimeout !== null) clearTimeout(this.searchTimeout)

      this.searchTimeout = setTimeout(() => {
        this.dialog = true
        if (this.search !== null) this.getResults()
      }, 600)
    },
    tabActive(val) {
      this.getResults()

      switch (val) {
      case 0:
        this.tabActiveComponent = 'comic-results'
        break
      case 1:
        this.tabActiveComponent = 'character-results'
        break
      case 2:
        this.tabActiveComponent = 'series-results'
        break
      }
    }
  },

  methods: {
    goToRouteIndex() {
      const query = {page: "2", search: this.search}

      switch (this.tabActive) {
      case 0:
        return {query, name: 'comic.index'}
      case 1:
        return {query, name: 'character.index'}
      case 2:
        return {query, name: 'series.index'}
      }
    },
    goSearch() {
      switch (this.tabActive) {
      case 0:
        return getComics({
          titleStartsWith: this.search
        })
      case 1:
        return getCharacters({
          nameStartsWith: this.search
        })
      case 2:
        return getSeries({
          titleStartsWith: this.search
        })
      }
    },
    async getResults() {
      this.loading = true

      try {
        const res = await this.goSearch()
        const {data} = res.data

        this.results = data.results
        this.itemsLength = data.total
      } catch (e) {
        this.$toast.set({
          color: 'red',
          msg: 'Failed to get search results.'
        })
        console.log(e)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
  .home-search-input {
    border: 2px solid;
    border-color: #1B5E20;
  }

  .home-search-input.v-input--is-focused {
    border: 3px solid;
    border-color: #66BB6A;
  }

  @media screen and (max-width: 750px) {
    .home-search-input {
      max-width: 80% !important;
      float: right;
    }
  }
</style>