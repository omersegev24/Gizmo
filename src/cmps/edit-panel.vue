<template>
  <div class="edit-panel flex flex-column">
    <div v-if="!currCmp">
      <section class="wap-title-theme">
        <section class="themes">
          <p>Wap Themes</p>
          <button @click="changeTitleAndTheme('light-and-shiny')">Light and Shiny</button>
          <button @click="changeTitleAndTheme('dark-theme')">Dark</button>
        </section>
        <section class="title">
          <p>Wap Title</p>
          <input type="text" placeholder="Enter title" v-model="wapConfig.wapTitle" />
          <button @click="changeTitleAndTheme">Save Changes</button>
        </section>
        <section class="wap-info">
          <p>Title: {{currWap.title}}</p>
          <p>Theme: {{currWap.theme}}</p>
        </section>
      </section>
      <p class="guide">Pick a section to start editing!</p>
    </div>
    <div v-else>
      <section v-if="currCmp.type === 'app-map'" class="map-edit-panel">
        <edit-map :mapCmp="cmpCopy"></edit-map>
      </section>
      <!-- <div class="edit-panel flex flex-column" v-else>
        <div v-for="(item, idx) in inputToRender" :key="idx">
          <p>{{idx}}</p>
          <input type="text" v-model="cmpCopy.info[idx]" placeholder="Enter text..." />
        </div>
      </div>-->

      <!-- <div v-for="(child, index) in childrenInputs" :key="index">
        <div v-for="(item, idx) in child.info" :key="idx">
          <p>{{idx}}</p>
          <input
            type="text"
            v-model="cmpCopy.info.children[index].info[idx]"
            placeholder="Enter text..."
          />
        </div>
      </div>-->

      <div v-for="(child, index) in linkInputs" :key="child.id">
        <div v-for="(item, key) in child" :key="key">
          <p>{{key}}</p>
          <input type="text" v-model="cmpCopy.links[index][key]" placeholder="Enter text..." />
        </div>
      </div>

      <edit-text :currCmp="cmpCopy" @updateCmp="updateCmp"></edit-text>
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
      cmpCopy: JSON.parse(JSON.stringify(this.currCmp)),
      wapConfig: {
        wapTitle: '',
        wapTheme: ''
      }
    };
  },
  computed: {
    inputToRender() {
      return _.pickBy(this.currCmp, item => {
        return typeof item === "string";
      });
    },
    linkInputs() {
      if (this.currCmp.links) {
        return this.currCmp.links;
      }
    },
    childrenInputs() {
      if (this.currCmp.children) {
        return this.currCmp.children;
      }
    },
    currWap() {
      return this.$store.getters.getWap;
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
      eventBus.$emit('updateCmp', cmp);
    },
    changeTitleAndTheme(themeName) {
      this.wapConfig.wapTheme = themeName
      const { wapConfig } = this
      this.$store.dispatch({ type: 'updateTitleAndTheme', wapConfig})
    },
  },
  components: {
    editText,
    editMap
  }
};
</script>