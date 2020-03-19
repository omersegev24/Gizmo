<template>
  <section class="wap-preview">
    <component v-for="cmp in wap.cmps" :key="cmp.id" :is="cmp.type" :info="cmp.info"></component>
  </section>
</template>

<script>
import appNav from "../cmps/wap-cmps/app-nav.vue";
import appCard from "../cmps/wap-cmps/app-card.vue";
import appHeader from "../cmps/wap-cmps/app-header.vue";
import appFooter from "../cmps/wap-cmps/app-footer.vue";
import layoutColumns from '../cmps/wap-cmps/app-nav.vue';
import appMap from '../cmps/wap-cmps/app-map.vue';
import appContact from '../cmps/wap-cmps/app-contact-us.vue';
import appChat from '../cmps/wap-cmps/app-chat.vue';
import appSocialLinks from '../cmps/wap-cmps/app-social-links.vue';

export default {
  props:{
    wap: Object
  },
  components: {
    appNav,
    appCard,
    appHeader,
    appFooter,
    appMap,
    appContact,
    layoutColumns,
    appChat,
    appSocialLinks
  }
};
</script>