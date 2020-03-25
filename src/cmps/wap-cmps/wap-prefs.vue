<template>
  <section class="wap-title-theme">
    <div class="themes flex align-center space-between">
      <p>Website Themes:</p>
      <button @click="updateWapPrefs('light-and-shiny')">Light and Shiny</button>
      <button @click="updateWapPrefs('dark-theme')">Dark</button>
    </div>
    <hr class="divider"/>
    <div class="title flex align-center space-between">
      <p>Website Title:</p>
      <input type="text" @input="updateWapPrefs" placeholder="Enter title" v-model="wapPrefs.title" />
      <!-- <button @click="changeWapTitle">Save Title</button> -->
    </div>
    <!-- <div class="wap-info">
      <p>Title: {{wap.title}}</p>
    </div>-->
  </section>
</template>

<script>
import { eventBus } from "../../services/eventBus.service.js";
export default {
  props: {
    wap: Object
  },
  data() {
    return {
      wapPrefs: {
        theme: this.wap.theme,
        title: this.wap.title
      }
    };
  },
  watch: {
    currCmp() {
      // this.wapCopy = JSON.parse(JSON.stringify(this.wap));
    }
  },
  methods: {
    updateWapPrefs(theme) {
      if (theme) {
        this.wapPrefs.theme = theme;
      }
      eventBus.$emit('updateWapPrefs', this.wapPrefs)
    }
  }
};
</script>

<style>
</style>