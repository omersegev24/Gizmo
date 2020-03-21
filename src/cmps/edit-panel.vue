<template>
  <div class="edit-panel flex flex-column">
    <div v-for="(item, idx) in currCmp.info" :key="idx">
      <input type="text" v-model="currCmp.info[idx]" placeholder="Enter text..."/>
    </div>
    <edit-text :currCmp="currCmp" @updateCmp="updateCmp"></edit-text>
  </div>
</template>

<script>
import { eventBus } from "../services/eventBus.service.js";
import editText from "./edit-text.vue";
export default {
  props: {
    currCmp: Object
  },
  watch: {
    currCmp: {
      handler() {
        var cmpCopy = JSON.parse(JSON.stringify(this.currCmp));
        this.updateCmp(cmpCopy);
      },
      deep: true
    }
  },
  methods: {
    updateCmp(cmp) {
      eventBus.$emit("updateCmp", cmp);
    }
  },
  components: {
    editText
  }
};
</script>