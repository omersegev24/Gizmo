<template>
  <p class="title" @blur="editTxt" :style="cmp.style">
    {{cmp.txt}}
    <action-panel :cmp="cmp"></action-panel>
  </p>
</template>

<script>
import { eventBus } from '../../services/eventBus.service.js'
import actionPanel from '../action-panel.vue'
export default {
  name: "elTitle",
  props: {
    cmp: Object
  },
  methods: {
    editTxt(ev) {
      const cmpCopy = JSON.parse(JSON.stringify(this.cmp));
      cmpCopy.txt = ev.target.innerText;
      eventBus.$emit("updateCmp", cmpCopy);
    }
  },
  components: {
    actionPanel
  }
}
</script>

<style>
</style>