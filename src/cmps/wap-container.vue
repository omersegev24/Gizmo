<template>
  <section class="wap-container" v-if="wap">
    <wap-preview v-for="cmp in wap.cmps" :key="cmp.id" :cmp="cmp"></wap-preview>
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
  }
}
</script>

<style>
</style>