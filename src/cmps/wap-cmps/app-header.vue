<template>
  <header
    class="app-header flex justify-center align-center flex-column"
    id="app-header"
    :class="cmp.subClass"
    :style="cmp.style"
  >
    <component
      v-for="child in cmp.children"
      :is="child.type"
      :key="child.id"
      :style="child.style"
      :contenteditable="true"
      :src="child.imgUrl"
      :class="{'title':child.type === 'p',
               'mark-selected':child.id === selectedCmp.id}"
      @blur="editTxt($event,child)"
      @click.stop="openEdit(child)"
    >{{child.txt}}</component>
  </header>
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
