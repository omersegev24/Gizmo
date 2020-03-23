<template>
  <footer
    class="app-footer light-and-shiny flex justify-center align-center flex-column"
    id="app-footer"
    :class="currCmp.subClass"
  >
    <p :class="{editable: editMode}" :contenteditable="editMode" @blur="editTitle">
      <span class="far fa-copyright"></span>
      {{currCmp.title}}
    </p>

    <section class="social-links">
      <a
        v-for="link in socialLinks"
        :key="link.social"
        :href="link.url"
        :class="'fab fa-' + link.social"
      ></a>
    </section>
  </footer>
</template>

<script>
import { eventBus } from "../../services/eventBus.service.js";
export default {
  props: {
    cmp: Object
  },
  data() {
    return {
      currCmp: {},
      editMode: false,
      socialLinks: this.cmp.links
    };
  },
  created() {
    this.currCmp = JSON.parse(JSON.stringify(this.cmp));
    eventBus.$on("editMode", isEditMode => {
      this.editMode = isEditMode;
    });
  },
  methods: {
    editTitle(ev) {
      this.currCmp.title = ev.target.innerText;
      this.update();
    },
    update() {
      var cmpCopy = JSON.parse(JSON.stringify(this.currCmp));
      eventBus.$emit("updateCmp", cmpCopy);
    }
  }
};
</script>