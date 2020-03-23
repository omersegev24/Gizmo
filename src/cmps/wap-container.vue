<template>
  <section class="wap-container" :class="getWapTheme" v-if="wap">
    <wap-preview v-for="cmp in wap.cmps" :key="cmp.id" :cmp="cmp" :class="getWapTheme"></wap-preview>
  </section>
</template>

<script>
import wapPreview from './wap-preview.vue'
export default {
  props: {
    wap: Object
  },
  components: {
    wapPreview
  },
  computed: {
    getWapTheme() {
      return this.$store.getters.getWapTheme
    }
  }
}
</script>

<style>
</style>