<template>
  <div class="app-card icy-theme" :style="cmp.style" :class="cmp.subClass">
    <component
      v-for="child in cmp.children"
      :is="child.type"
      :key="child.id"
      :style="child.style"
      :contenteditable="isEditing"
      @dblclick="isEditing=true"
      @blur="editTxt($event,child)"
      :src="child.imgUrl"
      :class="{ 'mark-selected':child.id === selectedCmp.id}"
      @click.stop="openEdit(child)"
    >{{child.txt}}</component>
  </div>
</template>

<script>
import { eventBus } from "../../services/eventBus.service.js";
export default {
  name: "app-card",
  props: {
    cmp: Object,
    selectedCmp: Object
  },
  data() {
    return {
      isEditing: false
    }
  },
  methods: {
    editTxt(ev, cmp) {
      this.isEditing = false
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