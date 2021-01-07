<template>
  <div>
    <!-- Details Dialog -->
    <details-dialog
      v-if="detailDialog"
      :comic="comic"
      @close="detailDialog = false"
    />

    <!-- Comic -->
    <v-card class="comic">
      <!-- Thumbnail -->
      <v-img
        :src="imgSrc"
        min-height="200px"
      />

      <!-- Title -->
      <v-card-subtitle>
        <span class="comic-title">{{ comic.title }}</span>
      </v-card-subtitle>

      <v-card-text class="pb-0">
        <!-- Description -->
        <p class="comic-description">
          {{ desc }}

          <span
            v-if="comic.description && comic.description.length > 100"
            class="font-weight-bolder white--text"
            style="font-size: 18px;"
          >
            ...
          </span>
        </p>
      </v-card-text>

      <v-card-actions class="justify-end">
        <v-btn
          text
          color="orange"
          class="mr-1"
          @click.native="detailDialog = true"
        >
          Detail
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import DetailsDialog from "@/components/Comics/DetailsDialog"

export default {
  components: {
    DetailsDialog
  },

  props: {
    comic: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      detailDialog: false
    }
  },

  computed: {
    imgSrc() {
      const {path, extension} = this.comic.thumbnail

      return `${path}/standard_xlarge.${extension}`
    },
    desc() {
      return !this.comic.description ? 'Has no description.' : this.comic.description.slice(0, 100)
    }
  }
}
</script>

<style lang="scss" scoped>
  .comic {
    .comic-title {
      font-size: 18px;
      font-weight: bolder;
    }

    .comic-description {
      margin: 0;
    }
  }
</style>