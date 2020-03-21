<template>
  <div class="edit-panel flex flex-column">
    <div v-for="(item, idx) in currCmp.info" :key="idx">
      <input type="text" v-model="currCmp.info[idx]" placeholder="Enter text..."/>
      <div v-if="currCmp.info.children">
        <!-- <pre>{{currCmp.info.children}}</pre> -->
        <pre>{{cmpChilds}}</pre>
        <input 
          type="text" 
          v-for="(child, idx) in currCmp.info.children" :key="child[idx]" 
          v-model="child[idx]"
          placeholder="Enter text..."
        />
        <!-- <input 
          type="text" 
          v-for="(child,idx) in cmpChilds" :key="child.txt" 
          v-model="cmpChilds[idx].txt"
          placeholder="Enter text..."
        /> -->
      </div>
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
  computed: {
    cmpChilds() {
      let childrenKeys = Object.keys(this.currCmp.info.children[0])
      console.log(childrenKeys)
      return childrenKeys
      //  this.currCmp.info.children.map(child => child)
    }
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