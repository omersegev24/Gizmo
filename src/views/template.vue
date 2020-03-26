<template>
  <section class="template-page">
    <h1>Pick the website template you love</h1>
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