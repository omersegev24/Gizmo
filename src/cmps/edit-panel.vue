<template>
  <section class="edit-panel flex flex-column">
    <section class="wap-prefs-container">
      <div class="flex space-between align-center" @click="toggleWapPrefs">
        <p>Website Preferences</p>
        <template v-if="!isPrefsOpen">
          <span>
            <i class="fas fa-angle-down"></i>
          </span>
        </template>
        <template v-else>
          <span>
            <i class="fas fa-angle-up"></i>
          </span>
        </template>
      </div>
      <transition name="prefs">
        <div v-show="isPrefsOpen">
          <wap-prefs @updateWapPrefs="updateWapPref" :wap="currWap"></wap-prefs>
        </div>
      </transition>
    </section>

    <hr v-if="currCmp.id" class="divider" />

    <div v-if="currCmp.id">
      <section v-if="currCmp.type === 'app-map'" class="map-edit-panel">
        <edit-map :mapCmp="cmpCopy"></edit-map>
      </section>

      <!-- <div v-if="currCmp.txt">
        <textarea
          v-if="currCmp.txt.length > 100"
          v-model="cmpCopy.txt"
          :style="{resize:'none'}"
          cols="30"
          rows="6"
          @input="updateCmp(cmpCopy)"
        ></textarea>
        <input v-else type="text" v-model="cmpCopy.txt" @input="updateCmp(cmpCopy)" placeholder="Enter text" />
      </div>-->
      <!-- <input
          v-else
          type="text"
          v-model="cmpCopy.txt"
          @input="updateCmp(cmpCopy)"
          placeholder="Enter text"
        />
      </div>-->

      <div v-if="currCmp.to" class="flex align-center space-between">
        <p>Link to:</p>
        <input type="text" v-model="cmpCopy.to" placeholder="Enter text..." />
      </div>
      <hr v-if="currCmp.to" class="divider" />

      <div v-if="currCmp.imgUrl">
        <div class="upload-img-container flex space-between align-center">
          <p>Upload image:</p>
          <input @change="uploadImg" id="file" type="file" title="Upload Image" />
          <label class="btn-3" for="file">
            <span>Upload</span>
          </label>
        </div>
        <img class="img-preview" :src="currCmp.imgUrl" style="max-width: 250px" />
        <hr class="divider" />
      </div>

      <edit-text v-if="currCmp.type!=='img'" :currCmp="currCmp" @updateCmp="updateCmp"></edit-text>
    </div>
    <hr class="divider" />
  </section>
</template>

<script>
import { eventBus } from "../services/eventBus.service.js";

import editText from "./edit-text.vue";
import editMap from "./edit-map.vue";
import wapPrefs from "./wap-cmps/wap-prefs.vue";
export default {
  props: {
    currCmp: Object
  },
  data() {
    return {
      cmpCopy: JSON.parse(JSON.stringify(this.currCmp)),
      isPrefsOpen: false,
      // wapPrefs: {
      wapTitle: "",
      wapTheme: ""
      // },
    };
  },
  computed: {
    currWap() {
      return this.$store.getters.wap;
    }
  },
  watch: {
    currCmp() {
      this.cmpCopy = JSON.parse(JSON.stringify(this.currCmp));
    }
  },
  methods: {
    updateWapPref(wap) { },
    updateCmp(cmp) {
      console.log("inside editpanel ", cmp.type);
      eventBus.$emit("updateCmp", cmp);
    },
    uploadImg(ev) {
      eventBus.$emit("uploadImg", ev);
    },
    changeWapTitle() {
      eventBus.$emit("changeWapTitle", this.wapTitle);
    },
    changeWapTheme(theme) {
      eventBus.$emit("changeWapTheme", theme);
    },
    toggleWapPrefs() {
      this.isPrefsOpen = !this.isPrefsOpen;
    }
  },
  components: {
    editText,
    editMap,
    wapPrefs
  }
};
</script>