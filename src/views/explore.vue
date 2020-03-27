<template>
  <section class="explore-page main-layout">
    <h2 class="title">Get Inspired by These Website Examples Designed on Gizmo</h2>
    <wap-list :waps="waps"></wap-list>
  </section>
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
      return this.$store.getters.waps;
    }
  },
  methods: {
    async openEditor(wapId) {
      const h = this.$createElement;
      try {
        var action = await this.$msgbox({
          title: "Open Editor",
          message: h("p", null, [h("span", null, "Are you sure?")]),
          showCancelButton: true,
          confirmButtonText: "Edit",
          cancelButtonText: "Cancel",
          beforeClose: (action, instance, done) => {
            if (action === "confirm") {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = "Loading...";
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 1500);
            } else {
              done();
            }
          }
        })
        this.$router.push(`/editor/${wapId}`).catch(err => {});
      } catch (err) {
        console.log(err);
      }
      // this.$router.push(`/editor/${wapId}`);
    },
  },
  components: {
    wapList
  }
};
</script>