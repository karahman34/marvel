<template>
  <v-app-bar
    app
    fixed
  >
    <v-app-bar-nav-icon
      id="nav-draw-activator"
      @click="$emit('nav-draw-toggle')"
    />

    <v-toolbar-title class="tool-bar-title">
      <router-link
        to="/"
        class="text-decoration-none white--text"
      >
        <img
          id="logo-image"
          src="@/assets/img/logo.png"
        >
      </router-link>
    </v-toolbar-title>

    <v-spacer />

    <!-- Home Search -->
    <home-search class="home-search-component" />

    <!-- Normal Menus -->
    <router-link
      v-for="menu in menus"
      :key="menu.text"
      :to="menu.to"
      class="menu"
      :class="{active: menu.to === $route.path}"
    >
      <span class="menu-text">{{ menu.text }}</span>
    </router-link>
  </v-app-bar>
</template>

<script>
import HomeSearch from '@/components/HomeSearch/HomeSearch'

export default {
  components: {
    HomeSearch
  },

  props: {
    menus: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  #logo-image {
    height: 41px;
    transform: translateY(10%);
  }

  @media screen and (max-width: 960px) {
    #logo-image {
      height: 39px;
    }
  }

  #nav-draw-activator {
    display: none;
  }
  @media screen and (max-width: 900px) {
    #nav-draw-activator {
      display: inline-block;
    }
  }

  .menu {
    text-decoration: none;
    color: white;
    padding: 10px 12px;
    font-weight: 500;
    font-size: 18px;
  }

  .menu:hover {
    color: #66bb6a;
  }

  .menu:hover::after {
    display: block;
    content: '';
    height: 3px;
    width: 50%;
    margin-left: 1px;
    background-color: #66bb6a;
  }

  .menu.active::after {
    display: block;
    content: '';
    height: 3px;
    width: 100%;
    margin-left: 1px;
    background-color: #66bb6a;
  }

  @media screen and (max-width: 750px) {
    .menu {
      display: none;
    }

    .tool-bar-title {
      padding: 0 !important;
    }

    .home-search-component {
      margin: 0 !important;
    }

    #logo-image {
      height: 34px;
    }
  }

  .home-search-component {
    margin-right: 8px;
  }
</style>