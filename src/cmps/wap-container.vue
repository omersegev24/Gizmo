<template>
  <section class="wap-container" :class="wapTheme" v-if="wap">
    <cmp-preview v-for="cmp in wap.cmps" :key="cmp.id" :cmp="cmp" :class="wapTheme"></cmp-preview>
  </section>
</template>

<script>
import cmpPreview from "./cmp-preview.vue";
export default {
  props: {
    wap: Object
  },
  computed: {
    wapTheme() {
      return this.$store.getters.wapTheme;
    }
  },
  components: {
    cmpPreview
  }
};
</script>