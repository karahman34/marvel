<template>
  <div class="home mb-10">
    <!-- The Jumbotron -->
    <jumbotron />

    <!-- The Series -->
    <series-feeds class="mt-6 mb-12" />

    <!-- The Characters -->
    <character-feeds />
  </div>
</template>

<script>
import Jumbotron from "@/components/Jumbotron"
import SeriesFeeds from '@/components/Series/Feeds.vue'
import CharacterFeeds from "@/components/Characters/Feeds.vue"

export default {
  name: 'Home',

  components: {
    Jumbotron,
    SeriesFeeds,
    CharacterFeeds
  }
}
</script>
