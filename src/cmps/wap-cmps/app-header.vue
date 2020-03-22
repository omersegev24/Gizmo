<template>
  <header
    class="app-header light-and-shiny flex justify-center align-center flex-column"
    id="app-header"
    :class="currCmp.info.subClass"
  >
    <h2
      class="title"
      :class="{editable: editMode}"
      :contenteditable="editMode"
      @blur="editTitle"
    >{{currCmp.info.title}}</h2>
    <h3
      class="sub-title"
      :class="{editable: editMode}"
      :contenteditable="editMode"
      @blur="editSubTitle"
    >{{currCmp.info.subTitle}}</h3>

    <button
      :class="{editable: editMode}"
      :contenteditable="editMode"
      @blur="editButton"
    >{{currCmp.info.callToAction}}</button>
  </header>
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
    editTitle(ev) {
      this.currCmp.info.title = ev.target.innerText;
      this.update();
    },
    editSubTitle(ev) {
      this.currCmp.info.subTitle = ev.target.innerText;
      this.update();
    },
    editButton(ev) {
      this.currCmp.info.callToAction = ev.target.innerText;
      this.update();
    },
    update() {
      var cmpCopy = JSON.parse(JSON.stringify(this.currCmp));
      eventBus.$emit("updateCmp", cmpCopy);
    }
  }
};
</script>

