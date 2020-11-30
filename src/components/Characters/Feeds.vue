<template>
  <div class="feed home-container">
    <!-- Header -->
    <div class="feed-header">
      <p class="feed-header-text">
        Characters
      </p>

      <v-btn
        color="primary"
        :to="{name: 'character.index'}"
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
          <div>
            <v-skeleton-loader type="image" />
          </div>
        </slide>
      </template>

      <!-- Content -->
      <template v-else>
        <slide
          v-for="character in characters"
          :key="character.id"
          class="px-2"
        >
          <!-- The Character -->
          <div
            class="feed-link"
            @click="openDetailDialog(character)"
          >
            <!-- Thumbnail -->
            <v-img
              :src="`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`"
              class="feed-thumbnail mb-2"
            />
            <!-- Title -->
            <span
              class="feed-text"
              v-text="character.name"
            />
          </div>
        </slide>
      </template>
    </my-carousel>

    <!-- Detail Dialog -->
    <feed-detail-dialog
      v-if="detailDialog && focusCharacter"
      :character="focusCharacter"
      @close="detailDialog = false"
    />
  </div>
</template>

<script>
import { getCharacters } from '@/utils/marvel'
import FeedDetailDialog from "@/components/Characters/FeedDetailDialog"

export default {
  components: {
    FeedDetailDialog
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
      characters: [],
      detailDialog: false,
      focusCharacter: null
    }
  },

  watch: {
    detailDialog(val) {
      if (!val) this.focusCharacter = null
    }
  },

  mounted () {
    this.getCharactersHandler()
  },

  methods: {
    openDetailDialog(character) {
      this.detailDialog = true
      this.focusCharacter = character
    },
    async getCharactersHandler() {
      try {
        this.loading = true

        const res = await getCharacters({
          limit: this.limit,
          orderBy: '-modified'
        })
        const {data} = res.data
        this.characters = data.results
      } catch (err) {
        this.$toast.set({msg: 'Failed to get characters.', color: 'danger'})
      } finally {
        this.loading = false
      }
    }
  }
}
</script>