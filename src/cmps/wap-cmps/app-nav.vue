<template>
  <nav class="app-nav light-and-shiny" :class="cmp.style" @click.stop="edit(cmp)">
    <section class="flex space-between align-center">
      <p
        class="logo"
        id="Home"
        :class="{editable: editMode}"
        @blur="editLogo"
        @click.stop="edit(currCmp.logo)"
      >{{currCmp.logo}}</p>

      <ul class="nav-links flex justify-end align-center">
        <li v-for="child in cmp.children" :key="child.id">
          <component
            :is="child.type"
            :style="child.style"
            :contenteditable="true"
            :href="'#' + child.to"
            @click.stop="edit(child)"
            @blur="editTxt($event,child)"
            :src="child.imgUrl"
          >{{child.txt}}</component>
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
    }
  },
  created() {
    this.currCmp = JSON.parse(JSON.stringify(this.cmp));
    eventBus.$on("editMode", isEditMode => {
      this.editMode = isEditMode;
    });
  },
  methods: {
    edit(cmp) {
      eventBus.$emit('edit', cmp)
    },
    editTxt(ev, cmp) {
      var cmpCopy = JSON.parse(JSON.stringify(cmp));
      cmpCopy.txt = ev.target.innerText;
      eventBus.$emit("updateCmp", cmpCopy);
    },
    editLogo(ev) {
      var cmpCopy = JSON.parse(JSON.stringify(this.currCmp));
      cmpCopy.logo = ev.target.innerText;
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