<template>
  <nav class="app-nav" :class="currCmp.subClass">
    <section class="flex space-between align-center">
      <p class="logo" id="Home" :class="{editable: editMode}" :contenteditable="editMode" @blur="editLogo">{{currCmp.logo}}</p>

      <ul class="nav-links flex justify-end align-center">
        <li v-for="child in currCmp.children" :key="child.id">
          <component
            :is="child.type"
            :style="child.style"
            :contenteditable="true"
            :href="'#' + child.to"
            @blur="editTxt($event,child)"
            :src="child.imgUrl"
          >{{child.txt}}</component>
          <!-- <a :href="'#' + link.to">{{link.txt}}</a> -->
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
  name: 'appNav',
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
    this.currCmp = this.cmp;
  },
  methods: {
    edit(cmp) {
      console.log('c', cmp)
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
    openEdit(cmp){
      this.editMode = true
      eventBus.$emit('edit', cmp)
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