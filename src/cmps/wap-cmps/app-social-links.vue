<template>
  <section class="app-social-links light-and-shiny">
      <a v-for="link in cmp.info.links" :key="link.social" :href="cmp.info.url" class="social-link"><i :class="'fab fa-'+ link.social +'-square fa-2x'"></i></a>
  </section>
</template>


<script>
export default {
  props: {
    cmp: Object
  },
}
</script>