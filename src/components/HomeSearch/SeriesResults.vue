<template>
  <v-row no-gutters>
    <v-col
      v-for="result in results"
      :key="result.id"
      cols="6"
      sm="4"
      md="3"
      class="px-2 pb-6 pt-0"
    >
      <series :series="result" />
    </v-col>
  </v-row>
</template>

<script>
import Series from "@/components/Series/Series"

export default {
  components: {
    Series
  },

  props: {
    results: {
      type: Array,
      required: true
    }
  }
}
</script>