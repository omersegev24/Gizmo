<template>
  <section class="layout-2-columns light-and-shiny flex justify-center" :class="info.subClass">
    <component v-for="child in info.children" :is="child.type" :info="child.info" :key="child.id"></component>
  </section>
</template>

<script>
import appCard from "./app-card.vue";
import appArticle from './app-article.vue';

export default {
  props: {
    info: Object
  },
  components:{
    appCard,
    appArticle
  }
};
</script>