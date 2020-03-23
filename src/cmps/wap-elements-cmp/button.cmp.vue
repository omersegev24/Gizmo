<template>
  <button @blur="editTxt" :contenteditable="true">{{cmp.txt}} </button>
</template>

<script>
import { eventBus } from '../../services/eventBus.service.js'
export default {
  name: "elButton",
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
}
</script>

<style>
</style>