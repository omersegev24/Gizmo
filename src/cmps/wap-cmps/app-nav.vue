<template>
  <nav class="app-nav" :class="cmp.subClass" @click.stop="edit(cmp)">
    <section class="flex space-between align-center">
      <ul class="nav-links flex justify-end align-center" :class="{'menu-open': isMenuOpen}">
        <li v-for="(child, idx) in cmp.children" :class="'nav-link-' + idx" :key="child.id">
          <component
            :is="child.type"
            :style="child.style"
            :contenteditable="true"
            :href="'#' + child.to"
            @change="editTxt($event,child)"
            :src="child.imgUrl"
            :class="{'mark-selected':child.id === selectedCmp.id}"
            @click.stop="edit(child)"
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
    cmp: Object,
    selectedCmp: Object
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    edit(cmp) {
      eventBus.$emit('edit', cmp)
    },
    editTxt(ev, cmp) {
      var cmpCopy = JSON.parse(JSON.stringify(cmp));
      cmpCopy.txt = ev.target.innerText;
      this.editMode = false
      eventBus.$emit("updateCmp", cmpCopy);
    },
    editLogo(ev) {
      var cmpCopy = JSON.parse(JSON.stringify(this.cmp));
      cmpCopy.logo = ev.target.innerText;
      eventBus.$emit("updateCmp", cmpCopy);
    },
    openEdit(cmp) {
      this.editMode = true
      eventBus.$emit('edit', cmp)
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMobileNav() {
      this.isMenuOpen = false;
    }
  }
};
</script>
