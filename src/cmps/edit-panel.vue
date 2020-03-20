<template>
  <div class="edit-panel flex flex-column">
    <div v-for="(item, idx) in currCmp.info" :key="idx">
      <input type="text" v-model="currCmp.info[idx]"/>
    </div>
    <!-- <div v-if="currCmp.info.title">
      <span>Title</span>
      <input type="text" v-model="currCmp.info.title" />
    </div>

    <div v-if="currCmp.info.logo">
      <span>Logo</span>
      <input type="text" v-model="currCmp.info.logo" />
    </div>

    <div v-if="currCmp.info.subTitle">
      <span>subTitle</span>
      <input type="text" v-model="currCmp.info.subTitle" />
    </div>

    <div v-if="currCmp.info.callToAction">
      <span>Button</span>
      <input type="text" v-model="currCmp.info.callToAction" />
    </div>

    <div v-if="currCmp.info.txt">
      <span>Text</span>
      <input type="text" v-model="currCmp.info.txt" />
    </div>

    <div v-if="currCmp.info.imgUrl">
      <span>Image URL</span>
      <input type="text" v-model="currCmp.info.imgUrl" />
    </div>

    <div v-if="currCmp.info.address">
      <span>Address</span>
      <input type="text" v-model="currCmp.info.address" />
    </div>

    <div v-if="currCmp.info.phone">
      <span>Phone</span>
      <input type="text" v-model="currCmp.info.phone" />
    </div>

    <div v-if="currCmp.info.links">
      <span>Links</span>
      <div class="edit-links">
        <input type="text" v-model="currCmp.info.links.to" />
        <input type="text" v-model="currCmp.info.links.url" />
      </div>
    </div> -->

    <div class="flex flex-column">
      <span>Color</span>
      <input type="color" v-model="currCmp.info.style.color" />

      <span>Align</span>
      <select v-model="currCmp.info.style.textAlign">
        <option value="left">Left</option>
        <option value="center">Lenter</option>
        <option value="right">Right</option>
      </select> 

      <span>Text Size</span>
      <input type="range" v-model="currCmp.info.style.fontSize" min="5" max="100" />

      <span>Letter Spacing</span>
      <input type="range" v-model="currCmp.info.style.letterSpacing" min="0" max="50" />

      <span>Font</span>
      <select v-model="currCmp.info.style.fontFamily">
        <option value></option>
      </select>

      <span>Font Weight</span>
      <select v-model="currCmp.info.style.fontWeight">
        <option value="normal">Normal</option>
        <option value="bold">Bold</option>
      </select>
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
