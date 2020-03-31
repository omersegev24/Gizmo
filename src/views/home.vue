<template>
  <div class="home-page flex flex-column justify-center">
    <header class="hero flex flex-column justify-center align-center">
      <section class="hero-title">Build your new responsive website in minutes</section>
      <p>Our innoviate system and beautiful templates allow you to build any type of website.</p>
      <button>Get Started</button>
    </header>
    <section class="infos flex flex-wrap">
      <section class="info-1 flex flex-column space-between align-center">
        <div>
          <h1>Drag and Drop</h1>
          <p>Use our powerful drag and drop feature for the best website building experience.</p>
        </div>
        <img src="@/assets/img/info-1.png" alt="Drag and Drop Image" />
      </section>
      <section class="info-2 info-1 flex flex-column space-between align-center">
        <div>
          <h1>Responsive</h1>
          <p>Build fast and responsive website and make it look beautiful even on mobile and tablet.</p>
        </div>
        <img src="@/assets/img/info-2.png" alt="Responsive Image" />
      </section>
      <section class="info-3 info-1 flex flex-column space-between align-center">
        <div>
          <h1>No Code</h1>
          <p>Find out how easy it is to build a powerful responsive website, with our system.</p>
        </div>
        <img src="@/assets/img/info-3.png" alt="No Code Image" />
      </section>
    </section>
    <!-- <header class="flex space-evenly">
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
    <section class="explore">
      <h2 class="templates-title">Get Inspired by These Website Examples Designed on Gizmo</h2>
      <hr>
      <wap-list class="templates-list" :waps="waps"></wap-list>
    </section>-->
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