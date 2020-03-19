<template>
  <section class="template-container">
    <component v-for="cmp in wap.cmps" :key="cmp.id" :is="cmp.type" :info="cmp.info"></component>
  </section>
</template>

<script>
import { wapService } from "../services/wap.service.js";
import appNav from "../cmps/app-nav.vue";
import appCard from "../cmps/app-card.vue";
import appHeader from "../cmps/app-header.vue";
import appFooter from "../cmps/app-footer.vue";
import layoutColumns from '../cmps/app-nav.vue';
import appMap from '../cmps/app-map.vue';
import appContact from '../cmps/app-contact-us.vue';
import appChat from '../cmps/app-chat.vue';
import appSocialLinks from '../cmps/app-social-links.vue';

export default {
  data() {
    return {
      wap: {}
    };
  },
  async created() {
    let wap = await wapService.query();
    this.wap = wap;
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