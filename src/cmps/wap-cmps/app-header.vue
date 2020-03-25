<template>
  <header
    class="app-header flex justify-center align-center flex-column"
    id="app-header"
    :class="cmp.subClass"
    :style=" [cmp.style, {'background-image': 'url(' + cmp.imgUrl + ')' }]"
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
      @input="editTxt($event)"
      @keydown="test($event)"
      @click.stop="openEdit(child)"
      ref="txt"
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
    test(ev) {
      console.log(this.$refs.txt[1]);

      if (ev.keyCode === 13) {
        this.$refs.txt[1] = document.execCommand('insertHTML', false, '<br/>');
        return false
      }

    },
    editTxt(ev, cmp) {
      var cmpCopy = JSON.parse(JSON.stringify(this.selectedCmp));
      cmpCopy.txt = ev.target.innerText;
      eventBus.$emit("updateCmp", cmpCopy);
    },
    openEdit(cmp) {
      console.log('cmp', cmp.type)
      eventBus.$emit("edit", cmp);
    }
  }
};
</script>
<style >
p {
  display: block;
}
</style>