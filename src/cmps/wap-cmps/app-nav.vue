<template>
  <nav class="app-nav" :class="currCmp.subClass" @click.stop="edit(cmp)">
    <section class="flex space-between align-center">
      <!-- <p
        class="logo"
        id="Home"
      >{{currCmp.logo}}</p>-->

      <ul class="nav-links flex justify-end align-center" :class="{'menu-open': isMenuOpen}">
        <li v-for="child in cmp.children" :key="child.id">
          <component
            :is="child.type"
            :style="child.style"
            :contenteditable="true"
            :href="'#' + child.to"
            @blur="editTxt($event,child)"
            :src="child.imgUrl"
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
  },
  data() {
    return {
      currCmp: {},
      editMode: false,
      isMenuOpen: false
    }
  },
  created() {
    this.currCmp = this.cmp;
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
<style>
.marked {
  border: 20px solid blue;
}
</style>