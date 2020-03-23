<template>
  <p class="title" @blur="editTxt" :style="cmp.style">
    {{cmp.txt}}
  </p>
</template>

<script>
import { eventBus } from '../../services/eventBus.service.js'
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
}
</script>