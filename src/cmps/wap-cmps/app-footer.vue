<template>
  <footer class="app-footer flex justify-center align-center flex-column" id="app-footer" :class="info.subClass">
    <div class="flex justify-content align-center">
      <span class="far fa-copyright"></span>
      <p>{{info.title}}</p>
    </div>
    <section class="social-links">
      <a v-for="link in socialLinks" :key="link.to" :href="link.url" :class="'fab fa-' + link.to"></a>
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
      socialLinks: this.info.children[0].info.links
    }
  }
};
</script>