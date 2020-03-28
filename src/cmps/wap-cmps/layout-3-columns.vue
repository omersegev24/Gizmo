<template>
  <section
    class="layout-3-columns buson-theme flex justify-center align-center"
    :class="cmp.subClass"
  >
    <draggable
      v-model="contactCmp"
      class="flex space-evenly align-center"
      @start="dragging = true"
      @end="dragging = false"
      :group="{name:'wap'}"
    >
      <component
        v-for="child in cmp.children"
        :is="child.type"
        :cmp="child"
        :key="child.id"
        :src="child.imgUrl"
        :style="child.style"
        :selectedCmp="selectedCmp"
        :class="{'mark-selected':child.id === selectedCmp.id}"
        @click.stop="openEdit(child)"
      ></component>
    </draggable>
  </section>
</template>

<script>
import { eventBus } from '../../services/eventBus.service.js'
// import appCard from "./app-card.vue";
// import appArticle from './app-article.vue';

export default {
  props: {
    cmp: Object,
    selectedCmp: Object
  },
  methods: {
    openEdit(cmp) {
      eventBus.$emit("edit", cmp);
    }
  },
  computed: {
    contactCmp: {
      get() {
        return this.cmp.children
      },
      set(cmps) {
        console.log('layout3 set', cmps)
        const cmpCopy = JSON.parse(JSON.stringify(this.cmp))
        cmpCopy.children = cmps
        eventBus.$emit('updateCmp', cmpCopy);
      }
    },
  },
};
</script>