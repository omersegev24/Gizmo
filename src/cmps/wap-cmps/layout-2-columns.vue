<template>
  <section class="layout-2-columns light-and-shiny flex justify-center" :class="cmp.info.subClass">
    <component v-for="child in cmp.info.children" :is="child.type" :cmp="child" :key="child.id" :class="cmp.info.subClass">
      <pre>child</pre>
    </component>
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