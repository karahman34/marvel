<template>
  <v-navigation-drawer
    v-model="show"
    app
  >
    <v-list>
      <v-list-item-group>
        <v-list-item
          v-for="menu in menus"
          :key="menu.to"
          :to="menu.to"
          exact
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ menu.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  
  props: {
    menus: {
      type: Array,
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