<template>
  <div class="home-page">
    <header class="flex space-evenly">
      <div>
        <div class="hero-content flex flex-column justify-center">
          <h1 class="title">Create a Website You’re Proud Of</h1>
          <p class="sub-title">
            Discover the platform that gives you the freedom to create, design,
            manage and develop your web presence exactly the way you want.
          </p>
          <router-link to="/template">Get Started</router-link>
        </div>
      </div>
      <img src="@/assets/img/homepage-header.png" alt="Header Image" />
    </header>
  </div>
</template>
<script>
import { eventBus } from "../services/eventBus.service.js";
import wapList from "../cmps/wap-list.vue";
export default {
  created() {
    this.$store.dispatch({ type: "loadWaps" });
  },
  computed: {
    waps() {
      let waps = this.$store.getters.waps;
      return waps.slice(0, 3);
    }
  },
  methods: {
    async openEditor(wapId) {
      this.$router.push(`/editor/${wapId}`).catch(err => {});
      // this.$router.push(`/editor/${wapId}`);
    },
    // showMore() {
    //   this.$router.push("/template");
    showMore() {
      this.$router.push("/template");
    }
  },
  components: {
    wapList
  }
};
</script>