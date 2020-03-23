<template>
  <section class="app-social-links light-and-shiny">
    <a v-for="link in cmp.children" :key="link.id" :href="cmp.url" class="social-link">
      <i :class="'fab fa-'+ link.social +'-square fa-2x'"></i>
    </a>
  </section>
</template>


<script>
export default {
  props: {
    cmp: Object
  },
}
</script>