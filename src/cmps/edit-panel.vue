<template>
  <div class="edit-panel flex flex-column">
    <div v-for="(item, idx) in currCmp.info" :key="idx">
      <div v-if="Array.isArray(currCmp.info[idx])">
        {{currCmp.info[idx]}}
      </div>
      <input type="text" v-model="currCmp.info[idx]" placeholder="Enter text..." v-else/>
    </div>

    <edit-text :currCmp="currCmp" @updateCmp="updateCmp"></edit-text>
  </div>
</template>

<script>
import { eventBus } from "../services/eventBus.service.js";
import editText from './edit-text.vue'
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
  methods:{
    updateCmp(cmp){
      eventBus.$emit("updateCmp", cmp);
    }
  },
  components:{
    editText
  }
};
</script>

  <!-- <div v-if="currCmp.info.title">
      <span>Title</span>
      <input type="text" v-model="currCmp.info.title" placeholder="enter text" />
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
    </div>
   <div class="flex flex-column">
      <span>Color</span>
      <input type="color" v-model="currCmp.style.color" />

      <span>Align</span>
      <select v-model="currCmp.style.textAlign">
        <option value="left">Left</option>
        <option value="center">Center</option>
        <option value="right">Right</option>
      </select> 

      <span>Align Vertical</span>
      <select v-model="currCmp.style.justifyContent">
        <option value="center">Center</option>
        <option value="space-around">Space Around</option>
        <option value="space-between">Space Between</option>
        <option value="space-evenly">Space Evenly</option>
      </select> 

      <span>Text Size</span>
      <input type="range" v-model="currCmp.style.textSize" min="5" max="100" />

      <span>Letter Spacing</span>
      <input type="range" v-model="currCmp.style.letterSpacing" min="0" max="50" />

      <span>Font</span>
      <select v-model="currCmp.style.fontFamily">
        <option v-for="font in fontFamily" :key="font" :value="font">{{font}}</option>
      </select>

      <span>Font Weight</span>
      <select v-model="currCmp.style.fontWeight">
        <option value="normal">Normal</option>
        <option value="bold">Bold</option>
      </select>
    </div>  
  </div> -->