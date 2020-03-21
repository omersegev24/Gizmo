<template>
  <div class="edit-panel flex flex-column">
    <div v-for="(item, idx) in inputToRender" :key="idx">
      <p>{{idx}}</p>
      <input type="text" v-model="currCmp.info[idx]" placeholder="Enter text..." />
    </div>

    <div v-for="(child, index) in childrenInputs" :key="index">
      <div v-for="(item, idx) in child.info" :key="idx">
        <p>{{idx}}</p>
        <input
          type="text"
          v-model="currCmp.info.children[index].info[idx]"
          placeholder="Enter text..."
        />
      </div>
    </div>

    <div v-for="(child, index) in linkInputs" :key="child.id">
      <div v-for="(item, key) in child" :key="key">
        <p>{{key}}</p>
        <input type="text" v-model="currCmp.info.links[index][key]" placeholder="Enter text..." />
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
    inputToRender() {
      return _.pickBy(this.currCmp.info, (item) => {
        return typeof (item) === 'string'
      })
    },
    linkInputs() {
      if (this.currCmp.info.links) {
        console.log('linksss', this.currCmp.info.links)
        return this.currCmp.info.links
      }
    },
    childrenInputs() {
      if (this.currCmp.info.children) {
        console.log('childrenn')
        return this.currCmp.info.children
      }
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