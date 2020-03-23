<template>
  <div class="edit-panel flex flex-column">
    <div v-if="!currCmp">
      <p>Pick a section to start editing!</p>
    </div>
    <div v-else>
      <section v-if="currCmp.type === 'app-map'" class="map-edit-panel">
        <edit-map :mapCmp="currCmp"></edit-map>
      </section>
      <!-- <div class="edit-panel flex flex-column" v-else>
        <div v-for="(item, idx) in inputToRender" :key="idx">
          <p>{{idx}}</p>
          <input type="text" v-model="cmpCopy.info[idx]" placeholder="Enter text..." />
        </div>
      </div> -->

      <!-- <div v-for="(child, index) in childrenInputs" :key="index">
        <div v-for="(item, idx) in child.info" :key="idx">
          <p>{{idx}}</p>
          <input
            type="text"
            v-model="cmpCopy.info.children[index].info[idx]"
            placeholder="Enter text..."
          />
        </div>
      </div> -->

      <div v-for="(child, index) in linkInputs" :key="child.id">
        <div v-for="(item, key) in child" :key="key">
          <p>{{key}}</p>
          <input type="text" v-model="cmpCopy.info.links[index][key]" placeholder="Enter text..." />
        </div>
      </div>

      <edit-text :currCmp="currCmp" @updateCmp="updateCmp"></edit-text>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../services/eventBus.service.js";
import editText from "./edit-text.vue";
import editMap from "./edit-map.vue";

export default {
  props: {
    currCmp: Object
  },
  data() {
    return {
      cmpCopy: JSON.parse(JSON.stringify(this.currCmp))
    }
  },
  computed: {
    inputToRender() {
      return _.pickBy(this.currCmp.info, item => {
        return typeof item === "string";
      });
    },
    linkInputs() {
      if (this.currCmp.info.links) {
        return this.currCmp.info.links;
      }
    },
    childrenInputs() {
      if (this.currCmp.info.children) {
        return this.currCmp.info.children;
      }
    }
  },
  watch: {
    cmpCopy: {
      handler() {
        // this.cmpCopy = JSON.parse(JSON.stringify(this.currCmp));
        this.updateCmp(this.cmpCopy);
      },
      deep: true
    },
    currCmp() {
      this.cmpCopy = JSON.parse(JSON.stringify(this.currCmp));
    }
  },
  methods: {
    updateCmp(cmp) {
      eventBus.$emit("updateCmp", cmp);
    }
  },
  components: {
    editText,
    editMap
  }
};
</script>