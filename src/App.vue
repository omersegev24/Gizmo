<template>
  <div id="app">
    <img v-if="inProgress" class="loading" src="./assets/img/loading.svg" />
    <main-nav></main-nav>
    
    <router-view />
  </div>
</template>
<script>
import mainNav from "./cmps/main-nav.vue";
export default {
  computed: {
    inProgress() {
      return this.$store.getters.inProgress;
    }
  },
  components: {
    mainNav,
  }
};
</script>
<style lang="scss" scoped>
  .loading{
    width: 100px;
    height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999;
  }
</style>