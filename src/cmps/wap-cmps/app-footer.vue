<template>
  <footer
    class="app-footer light-and-shiny flex justify-center align-center flex-column"
    id="app-footer"
    :class="currCmp.subClass"
  >
    <component
      v-for="child in cmp.children"
      :is="child.type"
      :key="child.id"
      :style="child.style"
      :cmp="child"
      :contenteditable="true"
      :src="child.imgUrl"
      @blur="editTxt($event,child)"
    >{{child.txt}}</component>
  </footer>
</template>

<script>
import { eventBus } from "../../services/eventBus.service.js";
import socialLinks from './app-social-links.vue'
export default {
  props: {
    cmp: Object
  },
  data() {
    return {
      currCmp: {},
      editMode: false,
      // socialLinks: this.cmp.links
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
  },
  components: {
    socialLinks
  }
};
</script>