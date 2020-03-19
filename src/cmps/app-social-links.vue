<template>
  <section class="app-social-links">
      <a v-for="link in info.links" :key="link.to" :href="info.url" class="social-link">{{link.to}}</a>
  </section>
</template>

<script>
export default {
  props: {
    info: Object 
  }
}
</script>

<style>

</style>