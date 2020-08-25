<template>
  <div>
    <!-- Character Dialog-->
    <character
      v-if="focusCharacter"
      :character="focusCharacter"
      @close="focusCharacter = null"
    />

    <!-- Main Content Dialog -->
    <v-dialog
      v-model="show"
      max-width="800"
    >
      <v-card class="series-detail-dialog">
        <v-row no-gutters>
          <!-- Thumbnail -->
          <v-col cols="6">
            <v-img :src="thumbnailSrc" />
          </v-col>

          <v-col
            cols="6"
            class="px-3 py-2"
          >
            <span class="series-title">
              {{ series.title }}
            </span>

            <hr class="mt-1 mb-2">

            <div class="series-detail-container">
              <span class="series-detail-key">Rating: </span>
              <p class="series-detail-val">
                {{ series.rating }}
              </p>
            </div>

            <div class="series-detail-container">
              <span class="series-detail-key">Start Year: </span>
              <p class="series-detail-val">
                {{ series.startYear }}
              </p>
            </div>

            <div class="series-detail-container">
              <span class="series-detail-key">End Year: </span>
              <p class="series-detail-val">
                {{ series.endYear }}
              </p>
            </div>

            <div class="series-detail-container">
              <span class="series-detail-key">Description: </span>
              <p class="series-detail-val">
                {{ series.description }}
              </p>
            </div>

            <div class="series-detail-container">
              <span class="series-detail-key">Characters: </span>
              <p class="series-detail-val">
                <span
                  v-for="character in series.characters.items"
                  :key="character.id"
                  class="font-weight-medium white--text"
                  style="cursor: pointer;"
                  @click="showCharacter(character.resourceURI)"
                >
                  {{ formatCharacterName(character.name) }}
                </span>
              </p>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Character from "@/components/Characters/FeedDetailDialog"
import {getResponse} from "@/utils/marvel"

export default {
  components: {
    Character
  },

  props: {
    series: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      show: true,
      focusCharacter: null,
      lastCharacterName: null
    }
  },

  computed: {
    thumbnailSrc() {
      const {path, extension} = this.series.thumbnail

      return `${path}/portrait_uncanny.${extension}`
    }
  },

  watch: {
    show(val) {
      if (!val) this.$emit('close')
    }
  },

  mounted() {
    if (this.series.characters.items && this.series.characters.items.length) {
      this.lastCharacterName = this.series.characters.items[this.series.characters.items.length - 1].name
    }
  },

  methods: {
    formatCharacterName(name) {
      return name === this.lastCharacterName
        ? name
        : `${name}, `
    },
    async showCharacter(path) {
      this.$loadingOverlay.show()

      try {
        const res = await getResponse(path, 'get')
        const {data} = res.data

        this.focusCharacter = data.results[0]
      } catch (e) {
        this.$toast.set({
          color: 'red',
          msg: 'Failed to fetch character data.'
        })
      } finally {
        this.$loadingOverlay.hide()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .series-detail-dialog {
    .series-title {
      font-size: 20px;
      color: white;
      font-weight: bolder;
    }

    .series-detail-container {
      margin-bottom: 7px;

      .series-detail-key {
        color: white;
        font-size: 17px;
        font-weight: bold;
      }

      .series-detail-val {
        margin: 0;
      }
    }
  }
</style>