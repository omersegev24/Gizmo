<template>
  <div class="wap-preview">
    <component :is="cmp.type" :info="cmp.info" :style="cmp.info.style"></component>
    <actions-panel :cmp="cmp"></actions-panel>
  </div>
</template>

<script>
import { eventBus } from "../services/eventBus.service.js";
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
import actionsPanel from '../cmps/actions-panel.vue'
export default {
  props: {
    cmp: Object
  },
  methods: {
    // edit(cmp) {
    //   eventBus.$emit('edit', cmp)
    // }
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
    appArticle,
    actionsPanel
  }
};
</script>