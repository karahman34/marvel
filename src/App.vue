<template>
  <v-app>
    <!-- Main -->
    <v-main>
      <!-- The Container -->
      <v-container>
        <!-- Toast -->
        <toast />

        <!-- Router View -->
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Toast from '@/components/Toast.vue'

export default {
  name: 'App',

  components: {
    Toast
  },

  data: () => ({
    //
  })
}
</script>
