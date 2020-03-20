<template>
  <section class="wap-preview">
    <component v-for="cmp in wap.cmps" :key="cmp.id" :is="cmp.type" :info="cmp.info" @click="edit(cmp)"></component>
  </section>
</template>

<script>
import appNav from "../cmps/wap-cmps/app-nav.vue";
import appCard from "../cmps/wap-cmps/app-card.vue";
import appHeader from "../cmps/wap-cmps/app-header.vue";
import appFooter from "../cmps/wap-cmps/app-footer.vue";
import layout2Columns from '../cmps/wap-cmps/layout-2-columns.vue';
import layout3Columns from '../cmps/wap-cmps/layout-3-columns.vue';
import appMap from '../cmps/wap-cmps/app-map.vue';
import appContact from '../cmps/wap-cmps/app-contact-us.vue';
import appChat from '../cmps/wap-cmps/app-chat.vue';
import appSocialLinks from '../cmps/wap-cmps/app-social-links.vue';
import appArticle from '../cmps/wap-cmps/app-article.vue';

export default {
  props:{
    wap: Object
  },
  methods:{
    edit(cmp){
      eventBus.$emit('edit',cmp)
    }
  },
  components: {
    appNav,
    appCard,
    appHeader,
    appFooter,
    appMap,
    appContact,
    layout2Columns,
    layout3Columns,
    appChat,
    appSocialLinks,
    appArticle
  }
};
</script>