<template>
  <nav class="app-nav light-and-shiny" :class="currCmp.subClass">
    <section class="flex space-between align-center">
      <p
        class="logo"
        id="Home"
        :class="{editable: editMode}"
        :contenteditable="editMode"
        @blur="editLogo"
      >{{currCmp.logo}}</p>

      <ul class="nav-links flex justify-end align-center">
        <li>
          <a v-for="link in currCmp.links" :href="'#' + link.to" :key="link.txt">{{link.txt}}</a>
        </li>
      </ul>
      <!-- @click="toggleMenu" -->
      <span class="hamburger-menu fas fa-bars" ></span>
      <!-- <img class="hamburger-menu" src="././img/hamburger.png" @click="toggleMenu"> -->
    </section>
  </nav>
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
      editMode: false
    };
  },
  created() {
    this.currCmp = JSON.parse(JSON.stringify(this.cmp));
    eventBus.$on("editMode", isEditMode => {
      this.editMode = isEditMode;
    });
  },
  methods: {
    editLogo(ev) {
      this.currCmp.info.logo = ev.target.innerText;
      this.update();
    },
    update() {
      var cmpCopy = JSON.parse(JSON.stringify(this.currCmp));
      eventBus.$emit("updateCmp", cmpCopy);
    }
  }
};
</script>