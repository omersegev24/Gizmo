<template>
  <section class="layout-2-columns flex justify-center" :class="cmp.subClass" :style="cmp.style">
    <component
      v-for="child in cmp.children"
      :is="child.type"
      :cmp="child"
      :key="child.id"
      :selectedCmp="selectedCmp"
    ></component>
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
  components: {
    appCard,
    appArticle
  }
};
</script>
