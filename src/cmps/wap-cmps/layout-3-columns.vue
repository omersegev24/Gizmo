<template>
  <section class="layout-3-columns  flex justify-center" :class="cmp.subClass">
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
  },
  created() {
    console.log(this.selectedCmp)
    console.log(this.cmp)
  }
};
</script>