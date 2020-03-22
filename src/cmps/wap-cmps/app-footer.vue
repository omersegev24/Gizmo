<template>
  <footer class="app-footer light-and-shiny flex justify-center align-center flex-column" id="app-footer" :class="info.subClass">
    <div class="flex justify-content align-center">
      <span class="far fa-copyright"></span>
      <p>{{info.title}}</p>
    </div>
    <section class="social-links">
      <a v-for="link in socialLinks" :key="link.social" :href="link.url" :class="'fab fa-' + link.social"></a>
    </section>
  </footer>
</template>

<script>
export default {
  props: {
    info: Object
  },
  data() {
    return {
      socialLinks: this.info.links
    }
  }
};
</script>