<template>
  <nav class="app-nav light-and-shiny" :class="currCmp.subClass">
    <section class="flex space-between align-center">
      <p class="logo" id="Home" :class="{editable: editMode}" @blur="editLogo">{{currCmp.logo}}</p>

      <ul class="nav-links flex justify-end align-center" :class="{'menu-open' : isMenuOpen}">
        <li>
          <a 
          v-for="link in currCmp.links" 
          :href="'#' + link.to" 
          :key="link.txt"
          @click=closeMobileNav
          >{{link.txt}}</a>
        </li>
      </ul>
      <span @click="toggleMenu">
        <i class="hamburger-menu fas fa-bars"></i>
      </span>
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
      editMode: false,
      isMenuOpen: false
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
    },
    toggleMenu() {
      console.log("toggling");
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMobileNav() {
      this.isMenuOpen = false;
    }
  }
};
</script>