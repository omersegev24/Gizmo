<template>
  <section class="app-social-links">
      <a v-for="link in info.links" :key="link.social" :href="info.url" class="social-link"><i :class="'fab fa-'+ link.social +'-square fa-2x'"></i></a>
  </section>
</template>


<script>
export default {
  props: {
    info: Object 
  }
}
</script>