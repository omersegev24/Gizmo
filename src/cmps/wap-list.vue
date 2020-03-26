<template>
  <section class="wap-list">
    <div v-for="wap in waps" :key="wap._id">
      <wap-preview :wap="wap"></wap-preview>
    </div>
  </section>
</template>

<script>
import wapPreview from "./wap-preview.vue";
export default {
  props: {
    waps: Array
  },
  components: {
    wapPreview
  }
};
</script>
