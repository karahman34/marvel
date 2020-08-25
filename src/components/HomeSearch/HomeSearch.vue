<template>
  <div>
    <!-- Text Input -->
    <v-text-field
      v-model="search"
      solo
      label="Search for comics,characters,series.."
      prepend-inner-icon="mdi mdi-magnify"
    />

    <!-- The dialog -->
    <v-dialog
      v-model="dialog"
      max-width="1000"
    >
      <v-card>
        <!-- Text Input -->
        <div
          class="px-4 pt-1"
          :class="{'pt-2': search !== null && search.lenght}"
        >
          <v-text-field
            v-model="search"
            label="Search for comics,characters,series.."
            prepend-inner-icon="mdi mdi-magnify"
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
        <v-tabs-items
          v-model="tabActive"
          style="padding: 0 10px;margin: 0 auto;"
        >
          <v-tab-item
            v-for="tab in tabs"
            :key="tab"
          >
            <!-- Loading -->
            <div
              v-if="loading"
              class="text-center pb-4 font-weight-medium white--text"
            >
              Loading...
            </div>

            <!-- Main Content -->
            <component
              :is="tabActiveComponent"
              v-else
              :results="results"
            />

            <!-- See more button -->
            <div
              v-if="!loading && results.length"
              class="pt-4 pb-6"
            >
              <v-btn
                block
                color="success"
                :to="goToRouteIndex()"
              >
                See more
              </v-btn>
            </div>
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
        this.getResults()
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