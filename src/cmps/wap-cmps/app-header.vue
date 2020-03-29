<template>
  <div>
    <header
      class="app-header icy-theme flex justify-center align-center flex-column"
      id="app-header"
      :class="cmp.subClass"
      :style=" [cmp.style, {'background-image': 'url(' + cmp.imgUrl + ')' }]"
    >
      <draggable
        v-model="contactCmp"
        class="txt-container flex space-evenly align-center"
        @start="dragging = true"
        @end="dragging = false"
        group="wap"
      >
        <!-- <div class="txt-container"> -->
        <component
          v-for="child in cmp.children"
          :key="child.id"
          :is="child.type"
          :style="child.style"
          :cmp="child"
          :contenteditable="false"
          :selectedCmp="selectedCmp"
          :src="child.imgUrl"
          :class="{'title':child.type === 'p',
               'mark-selected':child.id === selectedCmp.id}"
          @input="editTxt($event,child)"
          @click.stop="openEdit(child)"
        >{{child.txt}}</component>
        <!-- </div> -->
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
      dragging: false
    };
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
  computed: {
    imgStyle() {
      if (cmp.subClass === "icy-theme") {
        return { "background-image": "url(" + cmp.imgUrl + ")" };
      }
    },
    contactCmp: {
      get() {
        return JSON.parse(JSON.stringify(this.cmp.children));
      },
      set(children) {
        const cmpCopy = JSON.parse(JSON.stringify(this.cmp));
        cmpCopy.children = children;
          eventBus.$emit('updateCmp', cmpCopy);
        if (this.cmp.children.length !== children.length) {
        // } else {
          eventBus.$on('afterWapUpdated', () => {
            eventBus.$emit("updateCmp", cmpCopy);
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
