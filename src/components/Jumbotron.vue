<template>
  <div id="jumbotron">
    <!-- Content Center -->
    <div id="jumbotron-content">
      <!-- Text -->
      <p id="jumbotron-text">
        Marvel
      </p>

      <!-- Search -->
      <div id="jumbotron-search">
        <v-text-field
          v-model="search"
          solo
          label="Search for comics,characters,series.."
          prepend-inner-icon="mdi mdi-magnify"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Jumbotron',

  data() {
    return {
      search: null
    }
  }
}
</script>

<style lang="scss" scoped>
#jumbotron {
  position: relative;
  width: 100%;
  height: 72vh;
  background-image: url("~@/assets/img/jumbotron.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;

  #jumbotron-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    #jumbotron-text {
      margin: 0;
      line-height: 1.10em;
      font-size: 8em;
      font-weight: 400;
      text-align: center;
      text-shadow: 2px 1px 8px black;
    }

    #jumbotron-search {
      width: 100%;
      margin: 0 auto;
    }
  }
}

@media screen and (max-width: 900px) {
  #jumbotron {
    height: 60vh;
    background-attachment: inherit;
  }

  #jumbotron-content #jumbotron-text {
    font-size: 7em !important;
  }
}
</style>