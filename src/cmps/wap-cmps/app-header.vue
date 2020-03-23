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
      :class="isEditMode"
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
  computed: {
    isEditMode(){
    return (this.editMode)? 'edit-mode': ''
    }
  },
  methods: {
    editTxt(ev, cmp) {
      var cmpCopy = JSON.parse(JSON.stringify(cmp));
      cmpCopy.txt = ev.target.innerText;
      eventBus.$emit("updateCmp", cmpCopy);
      this.toggleEditMode()
    },
    openEdit(cmp){
      eventBus.$emit('edit', cmp)
      this.toggleEditMode()
    },
    toggleEditMode(){
      this.editMode = !this.editMode
    }
  },
  components: {
    elTitle,
    elButton
  }
};
</script>

