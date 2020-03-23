<template>
  <section class="layout-3-columns light-and-shiny flex justify-center" :class="cmp.subClass">
    <component v-for="child in cmp.children" :is="child.type" :cmp="child" :key="child.id"></component>
  </section>
</template>

<script>
import appCard from "./app-card.vue";
import appArticle from './app-article.vue';

export default {
  props: {
    cmp: Object
  },
  components:{
    appCard,
    appArticle
  }
};
</script>