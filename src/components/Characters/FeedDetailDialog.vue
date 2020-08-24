<template>
  <v-dialog
    v-model="show"
    max-width="500"
    overlay-opacity="0.6"
  >
    <v-card>
      <v-card-title class="px-4">
        Character Details
      </v-card-title>

      <!-- The Character -->
      <character :character="character" />
    </v-card>
  </v-dialog>
</template>

<script>
import Character from "@/components/Characters/Character"

export default {
  components: {
    Character
  },

  props: {
    character: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      show: true
    }
  },

  watch: {
    show(val) {
      if (!val) this.$emit('close')
    }
  }
}
</script>