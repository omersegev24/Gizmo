<template>
  <div>
    <header
      class="app-header icy-theme flex justify-center align-center flex-column"
      id="app-header"
      :class="cmp.subClass"
      :style=" [cmp.style, {'background-image': 'url(' + cmp.imgUrl + ')' }]"
    >
      <draggable
        v-model="currCmp"
        class="txt-container flex space-evenly align-center"
        @start.prevent.stop="startDrag"
        @end="stopDrag"
        group="wap"
      >
        <component
          v-for="child in cmp.children"
          :key="child.id"
          :is="child.type"
          :style="child.style"
          :cmp="child"
          :contenteditable="isEditing"
          :selectedCmp="selectedCmp"
          :src="child.imgUrl"
          :class="{'title':child.type === 'p',
               'mark-selected':child.id === selectedCmp.id}"
          @dblclick="isEditing=true"
          @blur="editTxt($event,child)"
          @click.stop="openEdit(child)"
        >{{child.txt}}</component>
      </draggable>
    </header>
  </div>
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
      cmpCopy: JSON.parse(JSON.stringify(this.selectedCmp)),
      enabled: true,
      dragging: false,
      isEditing: false
    };
  },
  methods: {
    startDrag() {
      console.log('yes')
      this.dragging = true
    },
    stopDrag() {
      this.dragging = false
    },
    editTxt(ev, cmp) {
      this.isEditing = false
      console.log('TEXT', cmp.txt)
      var cmpCopy = JSON.parse(JSON.stringify(cmp));
      cmpCopy.txt = ev.target.innerText;
      eventBus.$emit("updateCmp", cmpCopy);
    },
    openEdit(cmp) {
      eventBus.$emit("edit", cmp);
    },
  },
  computed: {
    editMode() {
      return !this.dragging
    },
    imgStyle() {
      if (cmp.subClass === "icy-theme") {
        return { "background-image": "url(" + cmp.imgUrl + ")" };
      }
    },
    currCmp: {
      get() {
        return JSON.parse(JSON.stringify(this.cmp.children));
      },
      set(children) {
        const cmpCopy = JSON.parse(JSON.stringify(this.cmp));
        cmpCopy.children = children;
        eventBus.$emit("updateCmp", cmpCopy);
        if (this.cmp.children.length !== children.length) {
          // } else {
          eventBus.$on('afterWapUpdated', () => {
            eventBus.$emit('updateCmp', cmpCopy);
            eventBus.$off('afterWapUpdated')
          })
        }
      }
    }
  },
  watch: {
    selectedCmp() {
      this.cmpCopy = JSON.parse(JSON.stringify(this.selectedCmp));
    }
  }
};
</script>
<style>
</style>