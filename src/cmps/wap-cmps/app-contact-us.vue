<template>
  <section
    class="app-contact-us icy-theme flex space-evenly"
    id="app-contact-us"
    :class="cmp.subClass"
  >
    <draggable
      v-model="contactCmp"
      class="flex space-evenly"
      style="width:100%"
      @start="dragging = true"
      @end="dragging = false"
      group="wap"
    >
      <component
        class="info"
        :style="child.style"
        v-for="child in cmp.children"
        :contenteditable="isEditing"
        :selectedCmp="selectedCmp"
        :is="child.type"
        :cmp="child"
        :key="child.id"
        @dblclick="isEditing=true"
        @blur="editTxt($event,child)"
        @click.stop="openEdit(child)"
      >{{child.txt}}</component>
    </draggable>
  </section>
</template>

<script>
import { eventBus } from "../../services/eventBus.service.js";
import appForm from './app-form.vue'
// import appArticle from './app-article.vue'
export default {
  props: {
    cmp: Object,
    selectedCmp: Object
  },
  data() {
    return {
      isEditing: false
    }
  },
  computed: {
    contactCmp: {
      get() {
        return JSON.parse(JSON.stringify(this.cmp.children));
      },
      set(cmps) {
        const cmpCopy = JSON.parse(JSON.stringify(this.cmp))
        cmpCopy.children = cmps
        eventBus.$emit('updateCmp', cmpCopy);
      }
    },
  },
  methods: {
    editTxt(ev, cmp) {
      this.isEditing = false
      var cmpCopy = JSON.parse(JSON.stringify(cmp));
      cmpCopy.txt = ev.target.innerText;
      eventBus.$emit('updateCmp', cmpCopy);
    },
    openEdit(cmp) {
      eventBus.$emit('edit', cmp)
    },
  },
  components: {
    appForm,
    // appArticle
  }
};
</script>
