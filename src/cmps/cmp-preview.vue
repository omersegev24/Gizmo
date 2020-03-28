<template>
  <div class="cmp-preview">
    
    <component
      :is="cmp.type"
      :cmp="cmp"
      :selectedCmp="selectedCmp"
      :style="cmp.style"
      :src="cmp.imgUrl"
      :class="[getWapTheme,{'mark-selected':cmp.id === selectedCmp.id}]"
      @click.stop="edit(cmp)"
    >{{cmp.txt}}</component>

    <action-panel :cmp="cmp"></action-panel>
    <div class="screen"></div>
  </div>
</template>

<script>
import { eventBus } from "../services/eventBus.service.js";
// import appNav from "./wap-cmps/app-nav.vue";
// import appCard from "./wap-cmps/app-card.vue";
// import appGallery from "./wap-cmps/app-gallery.vue";
// import appHeader from "./wap-cmps/app-header.vue";
// import appFooter from "./wap-cmps/app-footer.vue";
// import layout2Columns from './wap-cmps/layout-2-columns.vue';
// import layout3Columns from './wap-cmps/layout-3-columns.vue';
// import appMap from './wap-cmps/app-map.vue';
// import appContact from './wap-cmps/app-contact-us.vue';
// import appChat from './wap-cmps/app-chat.vue';
// import appSocialLinks from './wap-cmps/app-social-links.vue';
// import appArticle from './wap-cmps/app-article.vue';
import actionPanel from './action-panel.vue';
// import appYoutube from './wap-cmps/app-youtube.vue';
export default {

  props: {
    cmp: Object,
  },
  methods: {
    edit(cmp) {
      eventBus.$emit('edit', cmp)
    },
  },
  computed: {
  
    getWapTheme() {
      return this.$store.getters.wapTheme
    },
    selectedCmp() {
      return this.$store.getters.selectedCmp
    }
  },
  components: {
    // appNav,
    // appCard,
    // appGallery,
    // appHeader,
    // appFooter,
    // appMap,
    // appYoutube,
    // appContact,
    // layout2Columns,
    // layout3Columns,
    // appChat,
    // appSocialLinks,
    // appArticle,
    actionPanel
  },
};
</script>