<template>
  <section class="explore-page main-layout">
    <h2 class="title">Get Inspired by These Website Examples Designed on Gizmo</h2>
      <wap-list :waps="waps"></wap-list>
  </section>
</template>

<script>
import {eventBus} from '../services/eventBus.service.js'
import wapList from '../cmps/wap-list.vue'
export default {
  created() {
    this.$store.dispatch({type: 'loadWaps'})
    eventBus.$on('openEditor', this.openEditor)
  },
  computed: {
    waps() {
      return this.$store.getters.waps;
    }
  },
  methods: {
    openEditor(wapId){
      this.$router.push(`/editor/${wapId}`)
    }
  },
  components:{
    wapList
  }
};
</script>