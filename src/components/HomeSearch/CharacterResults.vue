<template>
  <v-row no-gutters>
    <v-col
      v-for="result in results"
      :key="result.id"
      cols="12"
      sm="6"
      md="3"
      class="px-2 pb-6 pt-0"
    >
      <character :character="result" />
    </v-col>
  </v-row>
</template>

<script>
import Character from "@/components/Characters/Character"

export default {
  components: {
    Character
  },

  props: {
    results: {
      type: Array,
      required: true
    }
  }
}
</script>