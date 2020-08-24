<template>
  <div>
    <!-- The Character -->
    <character
      v-if="focusCharacter"
      :character="focusCharacter"
      @close="focusCharacter = null"
    />

    <v-dialog
      v-model="show"
      max-width="800"
      overlay-opacity="0.6"
    >
      <v-card class="comic-detail-dialog">
        <v-row no-gutters>
          <!-- Thumbnail -->
          <v-col cols="6">
            <v-img
              class="comic-thumbnail"
              :src="thumbnailSrc"
            />
          </v-col>

          <!-- Details -->
          <v-col
            cols="6"
            class="comic-details px-4 py-2"
          >
            <!-- Title -->
            <span class="comic-title font-weight-bold">
              {{ comic.title }}
            </span>

            <!-- Separator -->
            <hr class="separator mt-1 mb-2">

            <div class="comic-detail-container">
              <span class="d-block comic-detail-key">Pages: </span>
              <span class="comic-detail-val">{{ comic.pageCount }}</span>
            </div>

            <div class="comic-detail-container">
              <span class="d-block comic-detail-key">isbn: </span>
              <span class="comic-detail-val">{{ comic.isbn }}</span>
            </div>

            <div class="comic-detail-container">
              <span class="d-block comic-detail-key">upc: </span>
              <span class="comic-detail-val">{{ comic.upc }}</span>
            </div>

            <div class="comic-detail-container">
              <span class="d-block comic-detail-key">ean: </span>
              <span class="comic-detail-val">{{ comic.ean }}</span>
            </div>

            <div class="comic-detail-container">
              <span class="d-block comic-detail-key">issn: </span>
              <span class="comic-detail-val">{{ comic.issn }}</span>
            </div>

            <div class="comic-detail-container">
              <span class="d-block comic-detail-key">modified: </span>
              <span class="comic-detail-val">{{ comic.modified | formatDate }}</span>
            </div>

            <div class="comic-detail-container">
              <span class="d-block comic-detail-key">Description: </span>
              <span class="comic-detail-val">{{ comic.description || 'Has no description.' }}</span>
            </div>

            <div class="comic-detail-container">
              <span class="d-block comic-detail-key">Characters: </span>
              <span
                v-for="character in comic.characters.items"
                :key="character.name"
                class="comic-detail-val white--text font-weight-medium comic-detail-character"
                @click="showCharacter(character.resourceURI)"
              >
                {{ formatCharaName(character.name) }}
              </span>
            </div>

            <div class="comic-detail-container">
              <span class="d-block comic-detail-key">Creators: </span>
              <span class="comic-detail-val">{{ creatorNames.join(', ') }}</span>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Character from "@/components/Characters/FeedDetailDialog.vue"
import {getResponse} from "@/utils/marvel"

export default {
  components: {
    Character
  },

  filters: {
    formatDate: function (val) {
      const d= new Date(val)

      return d.toDateString()
    }
  },

  props: {
    comic: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      loader: false,
      show: true,
      lastCharaName: null,
      focusCharacter: null
    }
  },

  computed: {
    thumbnailSrc() {
      const {path, extension} = this.comic.thumbnail

      return `${path}/portrait_uncanny.${extension}`
    },
    creatorNames() {
      return this.comic.creators.items.map(creator => creator.name)
    }
  },

  watch: {
    show(val) {
      if (!val) this.$emit('close')
    }
  },

  mounted() {
    if (this.comic.characters.items.length) {
      this.lastCharaName = this.comic.characters.items[this.comic.characters.items.length - 1].name
    }
  },

  methods: {
    formatCharaName(name) {
      return name !== this.lastCharaName
        ? `${name}, `
        : name
    },
    async showCharacter(path) {
      this.$loadingOverlay.show()

      try {
        const res = await getResponse(path, 'get')
        const {data} = res.data

        this.focusCharacter = data.results[0]
      } catch (e) {
        this.$toast.set({
          msg: 'Failed to fetch character data.',
          color: 'red'
        })
      } finally {
        this.$loadingOverlay.hide()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .comic-detail-dialog {
    .comic-title {
      font-size: 21px;
    }

    .comic-detail-container {
      margin-bottom: 6px;

      .comic-detail-key {
        color: white;
        font-weight: 600;
      }
    }

    .comic-detail-character {
      cursor: pointer;
    }
  }
</style>