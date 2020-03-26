<template>
  <section>
    <div v-for="cmp in wap.cmps" :key="cmp.id">
      <component :is="cmp.type" :cmp="cmp" :selectedCmp="selectedCmp" :style="cmp.style"></component>
    </div>
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
import actionPanel from '../cmps/action-panel.vue';
import appYoutube from '../cmps/wap-cmps/app-youtube.vue';

export default {
  data() {
    return {
      wap: {}
    };
  },
  computed: {
    selectedCmp() {
      return this.$store.getters.selectedCmp
    }
  },
  async created() {
    const wapId = this.$route.params.id;
    const wap = await this.$store.dispatch({ type: "loadWap", wapId });
    this.wap = wap;
  },
  components: {
    appNav,
    appCard,
    appHeader,
    appFooter,
    appMap,
    appYoutube,
    appContact,
    layout2Columns,
    layout3Columns,
    appChat,
    appSocialLinks,
    appArticle,
    actionPanel,
  },
};
</script>
