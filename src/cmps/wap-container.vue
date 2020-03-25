<template>
  <section class="wap-container" :class="wapTheme" v-if="wap">
    <wap-preview v-for="cmp in wap.cmps" :key="cmp.id" :cmp="cmp" :class="wapTheme"></wap-preview>
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

    wapTheme() {
      return this.$store.getters.wapTheme
    }
  }
}
</script>

<style>
</style>