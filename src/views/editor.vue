<template>
  <section class="editor-page flex">
    
    <editor-sidebar  @addCmp="addCmp" :cmps="cmps"/>
    <wap-preview  :wap="wap"></wap-preview>
  </section>
</template>

<script>
import { wapService } from "../services/wap.service.js";
import {cmpService} from '../services/cmp.service.js'
import wapPreview from "../cmps/wap-preview.vue";
import editorSidebar from "../cmps/editor-sidebar.vue"
export default {
  data() {
    return {
      wap: {},
      cmps:[]
    };
  },
  async created() {
    let wap = await wapService.query();
    this.wap = wap;
     let cmps = await cmpService.query();
    this.cmps = cmps;
  },
  methods:{
    addCmp(cmp){
        this.$store.dispatch({ type: 'addCmp', cmp })
     }
  },
  components: {
    wapPreview,
    editorSidebar
  }
};
</script>
<style lang="scss" scoped>
.editor-page{
  background-color: #f8f8f8dc;
}
</style>