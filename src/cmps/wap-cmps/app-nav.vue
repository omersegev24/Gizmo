<template>
  <nav class="app-nav" :class="cmp.subClass">
    <section class="flex space-between align-center">
      <p
        class="logo"
        id="Home"
        :class="{editable: editMode}"
        :contenteditable="editMode"
        @blur="editLogo"
        @click.stop="openEdit(cmp.logo)"
      >{{cmp.logo}}</p>

      <ul class="nav-links flex justify-end align-center">
        <li v-for="child in cmp.children" :key="child.id">
          <component
            :is="child.type"
            :style="child.style"
            :contenteditable="true"
            :href="'#' + child.to"
            @blur="editTxt($event,child)"
            @click.stop="openEdit(child)"
            :src="child.imgUrl"
          >{{child.txt}}</component>
          <!-- <a :href="'#' + link.to">{{link.txt}}</a> -->
        </li>
      </ul>
      <!-- @click="toggleMenu" -->
      <span class="hamburger-menu fas fa-bars"></span>
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
      editMode: false
    };
  },
  methods: {
    editTxt(ev, cmp) {
      var cmpCopy = JSON.parse(JSON.stringify(this.cmp));
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
    }
  }
};
</script>