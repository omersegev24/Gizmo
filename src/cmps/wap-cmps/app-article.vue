<template>
  <section class="app-article light-and-shiny" id="app-article" :class="currCmp.subClass">
    <component
      v-for="child in cmp.children"
      :is="child.type"
      :key="child.id"
      :style="child.style"
      :contenteditable="true"
      :src="child.imgUrl"
      @blur="editTxt($event,child)"
    >{{child.txt}}</component>
  </section>
</template>

<script>
import { eventBus } from '../../services/eventBus.service.js';
export default {
  props: {
    cmp: Object
  },
  data() {
    return {
      currCmp: {},
    };
  },
  created() {
    this.currCmp = JSON.parse(JSON.stringify(this.cmp));
  },
  methods: {
    editTxt(ev, cmp) {
      var cmpCopy = JSON.parse(JSON.stringify(cmp));
      cmpCopy.txt = ev.target.innerText;
      eventBus.$emit("updateCmp", cmpCopy);
    },
    update() {
      var cmpCopy = JSON.parse(JSON.stringify(this.currCmp));
      eventBus.$emit("updateCmp", cmpCopy);
    }
  },
};
</script>
