<template>
  <v-row no-gutters>
    <v-col
      v-for="result in results"
      :key="result.id"
      cols="6"
      sm="4"
      md="3"
      class="px-2 py-3"
    >
      <comic :comic="result" />
    </v-col>
  </v-row>
</template>

<script>
import Comic from "@/components/Comics/Comic"

export default {
  components: {
    Comic
  },

  props: {
    results: {
      type: Array,
      required: true
    }
  }
}
</script>