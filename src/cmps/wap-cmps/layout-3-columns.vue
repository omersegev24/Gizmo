<template>
  <section class="layout-3-columns flex justify-center" :class="cmp.subClass">
    <draggable
      v-model="contactCmp"
      class="flex space-evenly"
      @start="dragging = true"
      @end="dragging = false"
    >
      <component
        v-for="child in cmp.children"
        :is="child.type"
        :cmp="child"
        :key="child.id"
        :style="cmp.style"
        :selectedCmp="selectedCmp"
        :class="{'mark-selected':child.id === selectedCmp.id}"
      ></component>
    </draggable>
  </section>
</template>

<script>
import { eventBus } from '../../services/eventBus.service.js'
import appCard from "./app-card.vue";
import appArticle from './app-article.vue';

export default {
  props: {
    cmp: Object,
    selectedCmp: Object
  },
  data() {
    return {
      // cmpCopy: JSON.parse(JSON.stringify(this.selectedCmp)),
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
  components: {
    appCard,
    appArticle
  },

};
</script>