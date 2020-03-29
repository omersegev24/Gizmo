<template>
  <div class="home-page main-layout">
    <h1 class="title">Create a Website You’re Proud Of</h1>
    <div>
      <p class="sub-title">
        Discover the platform that gives you the freedom to create, design,
        manage and develop your web presence exactly the way you want.
      </p>
      <router-link to="/template">Get Started</router-link>
    </div>
    <section class="explore-page main-layout">
      <h2 class="title">Get Inspired by These Website Examples Designed on Gizmo</h2>
      <wap-list :waps="waps"></wap-list>
    </section>
    <button class="show-more-btn" @click="showMore">Show More...</button>
  </div>
</template>
<script>
import { eventBus } from "../services/eventBus.service.js";
import wapList from "../cmps/wap-list.vue";
export default {
  created() {
    this.$store.dispatch({ type: "loadWaps" });
    eventBus.$on("openEditor", this.openEditor);
  },
  computed: {
    waps() {
      let waps = this.$store.getters.waps;
      return waps.slice(0, 6);
    }
  },
  methods: {
    async openEditor(wapId) {
      this.$router.push(`/editor/${wapId}`).catch(err => {});
      // this.$router.push(`/editor/${wapId}`);
    },
    showMore(){
      this.$router.push('/template')
    }
  },
  components: {
    wapList
  }
};
</script>