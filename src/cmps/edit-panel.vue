<template>
  <div class="edit-panel">
    <input v-if="currCmp.info.title" type="text" v-model="currCmp.info.title" />
    <input v-if="currCmp.info.logo" type="text" v-model="currCmp.info.logo" />
    <input v-if="currCmp.info.subTitle" type="text" v-model="currCmp.info.subTitle" />
    <input v-if="currCmp.info.callToAction" type="text" v-model="currCmp.info.callToAction" />
    <input v-if="currCmp.info.txt" type="text" v-model="currCmp.info.txt" />
    <input v-if="currCmp.info.imgUrl" type="text" v-model="currCmp.info.imgUrl" />
    <input v-if="currCmp.info.address" type="text" v-model="currCmp.info.address" />
    <input v-if="currCmp.info.phone" type="text" v-model="currCmp.info.phone" />
    <div v-if="currCmp.info.links" class="edit-links">
      <input type="text" v-model="currCmp.info.links.to" />
      <input type="text" v-model="currCmp.info.links.url" />
    </div>
  </div>
</template>

<script>
import { eventBus } from "../services/eventBus.service.js";
export default {
  props: {
    currCmp: Object
  },
  watch: {
    currCmp: {
      handler() {
        var cmpCopy = JSON.parse(JSON.stringify(this.currCmp));
        eventBus.$emit("updateCmp", cmpCopy);
      },
      deep: true
    }
  }
};
</script>
