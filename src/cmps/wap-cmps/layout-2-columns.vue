<template>
  <section class="layout-2-columns light-and-shiny flex justify-center" :class="cmp.info.subClass">
    <component
      v-for="child in cmp.info.children"
      :is="child.type"
      :cmp="child"
      :key="child.id"
      :isEditing="isEditing"
      :style="child.style"
      @click.native.stop="cmpClicked(child)"
    ></component>
  </section>
</template>

<script>
import { eventBus } from '../../services/eventBus.service.js'
import appCard from "./app-card.vue";
import appArticle from './app-article.vue';

export default {
  props: {
    cmp: Object
  },
  data() {
    return {
      isEditing: false
    }
  },
  methods: {
    cmpClicked(child) {
      this.editTest = true
      console.log(child.id)
      eventBus.$emit("edit", child);
    }
  },
  components: {
    appCard,
    appArticle
  }
};
</script>

<style>
.edit-mode {
  border: 1px solid pink;
}
</style>