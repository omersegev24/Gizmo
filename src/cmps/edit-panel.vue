<template>
  <div class="edit-panel flex flex-column">
    <div>
      <section class="wap-title-theme">
        <section class="themes">
          <p>Website Themes</p>
          <button @click="changeWapTheme('light-and-shiny')">Light and Shiny</button>
          <button @click="changeWapTheme('dark-theme')">Dark</button>
        </section>
        <section class="title">
          <p>Website Title</p>
          <input type="text" placeholder="Enter title" v-model="wapTitle" />
          <!-- <button @click="changeWapTitle">Save Title</button> -->
          <button @click="saveWap">Save Wap</button>
        </section>
        <section class="wap-info">
          <p>Title: {{currWap.title}}</p>
          <p>Theme: {{currWap.theme}}</p>
        </section>
      </section>
    </div>

    <div v-if="currCmp.id">
      <section v-if="currCmp.type === 'app-map'" class="map-edit-panel">
        <edit-map :mapCmp="cmpCopy"></edit-map>
      </section>

      <div v-if="currCmp.txt" @input="updateCmp(cmpCopy)">
        <textarea
          v-if="currCmp.txt.length > 100"
          v-model="cmpCopy.txt"
          :style="{resize:'none'}"
          cols="30"
          rows="6"
        ></textarea>
        <input v-else type="text" v-model="cmpCopy.txt" />
      </div>

      <div v-if="currCmp.to">
        <p>Link to:</p>
        <input type="text" v-model="cmpCopy.to" placeholder="Enter text..." />
      </div>

      <div v-if="currCmp.imgUrl">
        <p>{{'Image'}}</p>
        <input @change="uploadImg" id="file" type="file" />
        <label class="btn-3" for="file">
          <span>select</span>
        </label>
        <img :src="currCmp.imgUrl" style="width: 250px, heigth: 250px" />
      </div>

      <edit-text v-if="currCmp.type!=='img'" :currCmp="currCmp" @updateCmp="updateCmp"></edit-text>
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
      // wapPrefs: {
      wapTitle: '',
      wapTheme: ''
      // },
    };
  },
  computed: {

    // linkInputs() {
    //   if (this.currCmp.type === 'a') {
    //     return this.currCmp
    //   }
    // },
    // childrenInputs() {
    //   if (this.currCmp.children) {
    //     return this.currCmp.children;
    //   }
    // },
    currWap() {
      return this.$store.getters.getWap;
    }
  },
  watch: {
    currCmp() {
      this.cmpCopy = JSON.parse(JSON.stringify(this.currCmp));
    }
  },
  methods: {
    updateCmp(cmp) {
      eventBus.$emit("updateCmp", cmp);
    },
    saveWap() {
      eventBus.$emit("saveWap");
    },
    uploadImg(ev) {
      eventBus.$emit('uploadImg', ev)
    },
    changeWapTitle() {
      eventBus.$emit('changeWapTitle', this.wapTitle);
    },
    changeWapTheme(theme) {
      eventBus.$emit('changeWapTheme', theme);
    }
  },
  components: {
    editText,
    editMap
  }
};
</script>