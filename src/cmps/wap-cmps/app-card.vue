<template>
  <div class="app-card" :style="currCmp.style" :class="currCmp.subClass">
    <component
      v-for="child in cmp.children"
      :is="child.type"
      :key="child.id"
      :style="child.style"
      :contenteditable="true"
      @blur="editTxt($event,child)"
      :src="child.imgUrl"
      @click.stop="openEdit(child)"
    >{{child.txt}}</component>
   
  </div>
</template>

<script>
import { eventBus } from "../../services/eventBus.service.js";
export default {
  props: {
    cmp: Object,
    isEditing: Boolean
  },
  data() {
    return {
      currCmp: {},
      editMode: false
    };
  },
  created() {
    this.currCmp = JSON.parse(JSON.stringify(this.cmp));
    eventBus.$on("editMode", isEditMode => {
      this.editMode = isEditMode;
    });
  },
  methods: {
    editTxt(ev, cmp) {
      var cmpCopy = JSON.parse(JSON.stringify(cmp));
      cmpCopy.txt = ev.target.innerText;
      eventBus.$emit("updateCmp", cmpCopy);
    },
    openEdit(cmp){
      eventBus.$emit('edit', cmp)
    }
  },
};
</script>