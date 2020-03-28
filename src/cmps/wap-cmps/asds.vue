<template>
  <section class="wap-container" :class="wapTheme" v-if="wap">
    <draggable
      v-model="wapCmp"
      :disabled="!enabled"
      class="list-group"
      ghost-class="ghost"
      @start="dragging = true"
      @end="dragging = false"
      
      group="wap"
    >
      <cmp-preview v-for="cmp in wap.cmps" :key="cmp.id" :cmp="cmp" :class="wapTheme"></cmp-preview>
    </draggable>
  </section>
</template>

<script>
import cmpPreview from "./cmp-preview.vue";
export default {
  display: "Nested",
  props: {
    wap: Object
  },
  data() {
    return {
      enabled: true,
      dragging: false
    };
  },
  components: {
    cmpPreview
  },
  computed: {
    wapCmp: {
      get() {
        return this.$store.getters.cmps;
      },
      set(cmps) {
        // const cmps =  JSON.parse(JSON.stringify(value))
        this.$store.commit({ type: "updateCmps", cmps });
      }
    },

    wapTheme() {
      return this.$store.getters.wapTheme;
    }
  }
};
</script>
<style scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>