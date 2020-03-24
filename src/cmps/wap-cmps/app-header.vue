<template>
  <header
    class="app-header flex justify-center align-center flex-column"
    id="app-header"
    :class="currCmp.subClass"
    :style="currCmp.style"
  >
    <component
      v-for="child in cmp.children"
      :is="child.type"
      :key="child.id"
      :style="child.style"
      :contenteditable="true"
      :src="child.imgUrl"
      :class="isEditMode(child)"
      @blur="editTxt($event,child)"
      @click.stop="openEdit(child)"
    >{{child.txt}}</component>
  </header>
</template>

<script>
import { eventBus } from "../../services/eventBus.service.js";
import elTitle from "../wap-elements-cmp/title.cmp.vue";
import elButton from "../wap-elements-cmp/button.cmp.vue";
export default {
  props: {
    cmp: Object
  },
  data() {
    return {
      currCmp: {},
      editMode: false
    };
  },
  created() {
    this.currCmp = JSON.parse(JSON.stringify(this.cmp));
  },
  methods: {
    isEditMode(cmp) {
      return (cmp.editMode) ? "edit-mode" : "";
    },
    editTxt(ev, cmp) {
      var cmpCopy = JSON.parse(JSON.stringify(cmp));
      cmpCopy.txt = ev.target.innerText;
      eventBus.$emit("updateCmp", cmpCopy);
    },
    openEdit(cmp) {
      eventBus.$emit("edit", cmp);
      eventBus.$emit("selectCmp", cmp);
    }
  },
  components: {
    elTitle,
    elButton
  }
};
</script>

