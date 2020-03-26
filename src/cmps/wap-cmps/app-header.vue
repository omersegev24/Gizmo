<template>
  <header
    class="app-header flex justify-center align-center flex-column"
    id="app-header"
    :class="cmp.subClass"
    :style=" [cmp.style, {'background-image': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.53)), url(' + cmp.imgUrl + ')' }]"
  >
    <component
      v-for="child in cmp.children"
      :key="child.id"
      ref="txt"
      :is="child.type"
      :style="child.style"
      :contenteditable="true"
      :src="child.imgUrl"
      :class="{'title':child.type === 'p',
               'mark-selected':child.id === selectedCmp.id}"
      @input="editTxt($event,child)"
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
  data() {
    return {
      cmpCopy: JSON.parse(JSON.stringify(this.selectedCmp))
    }
  },
  methods: {
    editTxt(ev, cmp) {
      var cmpCopy = JSON.parse(JSON.stringify(cmp));
      cmpCopy.txt = ev.target.innerText;
      eventBus.$emit("updateCmp", cmpCopy);
    },
    openEdit(cmp) {
      eventBus.$emit("edit", cmp);
    },
  },

  watch: {
    selectedCmp() {
      this.cmpCopy = JSON.parse(JSON.stringify(this.selectedCmp));
    }
  },
};
</script>
