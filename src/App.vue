<template>
  <v-app>
    <!-- App Bar -->
    <app-bar
      :menus="menus"
      @nav-draw-toggle="navDraw = !navDraw"
    />

    <!-- Nav Draw -->
    <nav-draw
      v-if="navDraw"
      :menus="menus"
      @close="navDraw = false"
    />

    <!-- Main -->
    <v-main>
      <!-- Toast -->
      <toast />

      <!-- Loader Circular Dialog -->
      <loader-circular-dialog />

      <!-- Router View -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/LayoutPartials/AppBar"
import NavDraw from "@/components/LayoutPartials/NavDraw"
import Toast from '@/components/Toast.vue'
import LoaderCircularDialog from "@/components/LoaderCircularDialog"

export default {
  name: 'App',

  components: {
    Toast,
    AppBar,
    NavDraw,
    LoaderCircularDialog
  },

  data: () => ({
    navDraw: false,
    menus: [
      {
        text: 'Home',
        to: '/'
      },
      {
        text: 'Comics',
        to: '/comics'
      },
      {
        text: 'Series',
        to: '/series'
      },
      {
        text: 'Characters',
        to: '/characters'
      }
    ]
  })
}
</script>

<style lang="scss">
  @import './assets/scss/app';
</style>
