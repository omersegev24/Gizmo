<template>
  <section class="template-container">
    <component v-for="cmp in wap.cmps" :key="cmp.id" :is="cmp.type" :info="cmp.info"></component>
  </section>
</template>

<script>
import { wapService } from "../services/wap.service.js";
import appNav from '../cmps/app-nav.vue';

export default {
  data() {
    return {
        wap: {}
    };
  },
  async created() {
    var wap = await wapService.query();
    this.wap = wap;
  },
  components:{
      appNav,
  }
};
</script>

<style>
</style>