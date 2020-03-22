<template>
  <nav class="app-nav light-and-shiny" :class="currCmp.info.subClass">
    <nav class="flex">
      <p
        class="logo"
        id="Home"
        :class="{editable: editMode}"
        :contenteditable="editMode"
        @blur="editLogo"
      >{{currCmp.info.logo}}</p>

      <ul class="nav-links flex justify-end align-center">
        <li>
          <a v-for="link in currCmp.info.links" :href="'#' + link.to" :key="link.txt">{{link.txt}}</a>
        </li>
      </ul>
    </nav>
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