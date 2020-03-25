<template>
  <section class="edit-panel flex flex-column">
    <!-- <div>
      <section class="wap-title-theme">
        <section class="themes">
          <p>Website Themes</p>
          <button @click="changeWapTheme('light-and-shiny')">Light and Shiny</button>
          <button @click="changeWapTheme('dark-theme')">Dark</button>
        </section>
        <section class="title">
          <p>Website Title</p>
          <input type="text" placeholder="Enter title" v-model="wapTitle" />
          <button @click="saveWap">Save Wap</button>
        </section>
        <section class="wap-info">
          <p>Title: {{currWap.title}}</p>
          <p>Theme: {{currWap.theme}}</p>
        </section>
      </section>
    </div>-->
    <wap-prefs @updateWapPrefs="updateWapPref" :wap="currWap"></wap-prefs>

    <div v-if="currCmp.id">
      <section v-if="currCmp.type === 'app-map'" class="map-edit-panel">
        <edit-map :mapCmp="cmpCopy"></edit-map>
      </section>

      <div v-if="currCmp.txt">
        <textarea
          v-if="currCmp.txt.length > 100"
          v-model="cmpCopy.txt"
          :style="{resize:'none'}"
          cols="30"
          rows="6"
          @input="updateCmp(cmpCopy)"
        ></textarea>
        <input v-else type="text" v-model="cmpCopy.txt" @input="updateCmp(cmpCopy)" placeholder="Enter text" />
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

      <edit-text v-if="currCmp.type!=='img'" :currCmp="cmpCopy" @updateCmp="updateCmp"></edit-text>
    </div>
    <button @click="saveWap">Save Wap</button>
  </section>
</template>

<script>
import { eventBus } from "../services/eventBus.service.js";

import editText from "./edit-text.vue";
import editMap from "./edit-map.vue";
import wapPrefs from './wap-cmps/wap-prefs.vue'
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
    updateWapPref(wap){
      
    },
    updateCmp(cmp) {
      console.log('inside editpanel ', cmp.txt)
      eventBus.$emit('updateCmp', cmp);
    },
    saveWap() {
      eventBus.$emit('saveWap');
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
    editMap,
    wapPrefs
  }
};
</script>