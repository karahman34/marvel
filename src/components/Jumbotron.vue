<template>
  <div id="jumbotron" />
</template>

<script>
export default {
  name: 'Jumbotron'
}
</script>

<style lang="scss" scoped>
#jumbotron {
  position: relative;
  width: 100%;
  height: 72vh;
  background-image: url("~@/assets/img/jumbotron.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

@media screen and (max-width: 900px) {
  #jumbotron {
    height: 60vh;
    background-attachment: inherit;
  }
}
</style>