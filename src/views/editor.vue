<template>
  <section class="editor-page">
    <wap-preview :wap="wap"></wap-preview>
  </section>
</template>

<script>
import { wapService } from "../services/wap.service.js";
import wapPreview from "./wap-preview.vue";

export default {
  data() {
    return {
      wap: {}
    };
  },
  async created() {
    let wap = await wapService.query();
    this.wap = wap;
  },
  components: {
    wapPreview
  }
};
</script>
<style lang="scss" scoped>
.editor-page{
  background-color: #f8f8f8dc;
  .wap-preview{
    background-color: #fff;
    width: 700px;
    margin: 0 auto;
  }
}
</style>