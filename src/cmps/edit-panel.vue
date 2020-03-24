<template>
  <div class="edit-panel flex flex-column">
    <div>
      <section class="wap-title-theme">
        <section class="themes">
          <p>Website Themes</p>
          <button @click="changeTitleAndTheme('light-and-shiny')">Light and Shiny</button>
          <button @click="changeTitleAndTheme('dark-theme')">Dark</button>
        </section>
        <section class="title">
          <p>Website Title</p>
          <input type="text" placeholder="Enter title" v-model="wapConfig.wapTitle" />
          <button @click="changeTitleAndTheme">Save Changes</button>
        </section>
        <section class="wap-info">
          <p>Title: {{currWap.title}}</p>
          <p>Theme: {{currWap.theme}}</p>
        </section>
      </section>
      <!-- <p class="guide">Pick a section to start editing!</p> -->
    </div>
    <div v-if="currCmp">
      <section v-if="currCmp.type === 'app-map'" class="map-edit-panel">
        <edit-map :mapCmp="cmpCopy"></edit-map>
      </section>

      <div v-for="(child, index) in linkInputs" :key="child.id">
        <div v-for="(item, key) in child" :key="key">
          <p>{{key}}</p>
          <input type="text" v-model="cmpCopy.links[index][key]" placeholder="Enter text..." />
        </div>
      </div>

      <div v-if="currCmp.imgUrl">
        <p>{{'Image'}}</p>
        <input @change="uploadImg" id="file" type="file" />
        <label class="btn-3" for="file">
          <span>select</span>
        </label>
        <img :src="imgPreview" style="width: 250px, heigth: 250px" />
      </div>

      <edit-text :currCmp="cmpCopy" @updateCmp="updateCmp"></edit-text>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../services/eventBus.service.js";
import cloudinaryService from "../services/cloudinary.service.js";

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
        wapTitle: "",
        wapTheme: ""
      }
    };
  },
  computed: {
    linkInputs() {
      if (this.currCmp.links) {
        return this.currCmp.links;
      }
    },
    imgPreview() {
      return !this.currCmp.imgUrl
        ? this.currCmp.imgUrl
        : "http://res.cloudinary.com/omer1234/image/upload/v1584998858/li0hhzwliqjrqcqv2coz.jpg";
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
    },
    async uploadImg(ev) {
      const res = await cloudinaryService.uploadImg(ev);
      const { url } = res;
      this.cmpCopy.imgUrl = url
        ? url
        : "http://res.cloudinary.com/omer1234/image/upload/v1584998858/li0hhzwliqjrqcqv2coz.jpg";
    },
    changeTitleAndTheme(themeName) {
      this.wapConfig.wapTheme = themeName;
      const { wapConfig } = this;
      this.$store.dispatch({ type: "updateTitleAndTheme", wapConfig });
    }
  },
  components: {
    editText,
    editMap
  }
};
</script>