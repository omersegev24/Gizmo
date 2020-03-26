<template>
  <div class="cmp-preview">
    
      <component
        :is="cmp.type"
        :cmp="cmp"
        :selectedCmp="selectedCmp"
        :style="cmp.style"
        :class="[getWapTheme,{'mark-selected':cmp.id === selectedCmp.id}]"
        @click.native.stop="edit(cmp)"
      ></component>

      <action-panel :cmp="cmp"></action-panel>
      <div class="screen"></div>
  </div>
</template>

<script>
import { eventBus } from "../services/eventBus.service.js";
import appNav from "./wap-cmps/app-nav.vue";
import appCard from "./wap-cmps/app-card.vue";
import appHeader from "./wap-cmps/app-header.vue";
import appFooter from "./wap-cmps/app-footer.vue";
import layout2Columns from './wap-cmps/layout-2-columns.vue';
import layout3Columns from './wap-cmps/layout-3-columns.vue';
import appMap from './wap-cmps/app-map.vue';
import appContact from './wap-cmps/app-contact-us.vue';
import appChat from './wap-cmps/app-chat.vue';
import appSocialLinks from './wap-cmps/app-social-links.vue';
import appArticle from './wap-cmps/app-article.vue';
import actionPanel from './action-panel.vue';
import appYoutube from './wap-cmps/app-youtube.vue';
export default {

  props: {
    cmp: Object,
  },
  data() {
    return {
      enabled: true,
      dragging: false
    };
  },
  methods: {
    edit(cmp) {
      eventBus.$emit('edit', cmp)
    },
  },
  computed: {
    cmpCopy() {
      return JSON.parse(JSON.stringify(this.cmp))
    },
    getWapTheme() {
      return this.$store.getters.wapTheme
    },
    selectedCmp() {
      return this.$store.getters.selectedCmp
    }
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