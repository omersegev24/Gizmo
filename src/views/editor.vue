<template>
  <section class="editor-page flex">
    <editor-sidebar @addCmp="addCmp" :cmps="cmps" />
    <wap-container :wap="wap"></wap-container>
  </section>
</template>

<script>
import { eventBus } from "../services/eventBus.service.js";
import { wapService } from "../services/wap.service.js";
import { cmpService } from "../services/cmp.service.js";
import editorSidebar from "../cmps/editor-sidebar.vue";
import wapContainer from "../cmps/wap-container.vue";
export default {
  data() {
    return {
      cmps: []
    };
  },
  async created() {
    this.$store.dispatch({ type: "loadWap" });

    let cmps = await cmpService.query();
    this.cmps = cmps;

    eventBus.$on("updateCmp", updatedCmp => {
      this.updateCmp(updatedCmp);
    });
    eventBus.$on("remove", cmp => {
      this.$store.commit({ type: "removeCmp", cmp });
    });
    eventBus.$on("updatePos", updatedPos => {
      this.$store.commit({ type: "updatePos", updatedPos });
    });
    eventBus.$on("edit", cmp => {
      this.$store.commit({ type: "setSelectedCmp", cmp });
    });
    eventBus.$on('uploadImg', ev => {
      this.$store.dispatch({ type: "uploadImg", ev });
    })
    eventBus.$on("saveWap", () => {
      this.$store.dispatch({ type: 'saveWap' })
    });

  },
  computed: {
    wap() {
      return this.$store.getters.getWap;
    }
  },
  methods: {
    addCmp(cmp) {
      this.$store.dispatch({ type: "addCmp", cmp });
    },
    updateCmp(cmp) {
      this.$store.dispatch({ type: "updateCmp", cmp });
    }
  },
  components: {
    editorSidebar,
    wapContainer
  }
};
</script>