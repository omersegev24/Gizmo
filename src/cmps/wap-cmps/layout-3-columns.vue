<template>
  <section class="layout-3-columns flex" :class="info.subClass">
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