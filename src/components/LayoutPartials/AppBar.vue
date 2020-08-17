<template>
  <v-app-bar
    app
    fixed
  >
    <v-app-bar-nav-icon
      id="nav-draw-activator"
      @click="$emit('nav-draw-toggle')"
    />

    <v-toolbar-title>
      <router-link
        to="/"
        class="text-decoration-none white--text"
      >
        Logo
      </router-link>
    </v-toolbar-title>

    <v-spacer />

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
export default {
  props: {
    menus: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
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
  }
</style>