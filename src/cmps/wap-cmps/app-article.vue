<template>
  <section class="app-article buson-theme" id="app-article" :class="cmp.subClass">
    <component
      v-for="child in cmp.children"
      :is="child.type"
      :key="child.id"
      :style="child.style"
      :contenteditable="true"
      :src="child.imgUrl"
      :class="{ 'mark-selected':child.id === selectedCmp.id}"
      @change="editTxt($event,child)"
      @click.stop="openEdit(child)"
    >{{child.txt}}</component>
  </section>
</template>

<script>
import { eventBus } from "../../services/eventBus.service.js";
export default {
  props: {
    cmp: Object,
    selectedCmp: Object
  },
  methods: {
    editTxt(ev, cmp) {
      var cmpCopy = JSON.parse(JSON.stringify(cmp));
      cmpCopy.txt = ev.target.innerText;
      eventBus.$emit("updateCmp", cmpCopy);
    },
    openEdit(cmp) {
      eventBus.$emit("edit", cmp);
    }
  }
};
</script>
