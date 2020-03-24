<template>
  <footer
    class="app-footer flex justify-center align-center flex-column"
    id="app-footer"
    :class="currCmp.subClass"
  >
    <component
      v-for="child in cmp.children"
      :is="child.type"
      :key="child.id"
      :cmp="child"
      :contenteditable="true"
      :selectedCmp="selectedCmp"
      :class="{'mark-selected':child.id === selectedCmp.id}"
      :src="child.imgUrl"
      :style="child.style"
      @blur="editTxt($event,child)"
      @click.stop="openEdit(child)"
    >{{child.txt}}</component>
  </footer>
</template>

<script>
import { eventBus } from "../../services/eventBus.service.js";
import socialLinks from './app-social-links.vue'
export default {
  props: {
    cmp: Object,
    selectedCmp: Object
  },
  data() {
    return {
      currCmp: {},
      editMode: false,
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
      var cmpCopy = JSON.parse(JSON.stringify(this.currCmp));
      cmpCopy.txt = ev.target.innerText;
      eventBus.$emit("updateCmp", cmpCopy);
    },
    openEdit(cmp) {
      eventBus.$emit('edit', cmp)
    }
  },
  components: {
    socialLinks
  }
};
</script>