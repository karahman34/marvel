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
        <!-- Home Search -->
        <home-search />
      </div>
    </div>
  </div>
</template>

<script>
import HomeSearch from "@/components/HomeSearch/HomeSearch"

export default {
  name: 'Jumbotron',

  components: {
    HomeSearch
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