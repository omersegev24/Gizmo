<template>
  <section class="app-article" id="app-article" :class="currCmp.info.subClass">
    <h3
      :class="{editable: editMode}"
      :contenteditable="editMode"
      @blur="editTitle"
    >{{currCmp.info.title}}</h3>

    <h4
      :class="{editable: editMode}"
      :contenteditable="editMode"
      @blur="editSubTitle"
    >{{currCmp.info.subTitle}}</h4>

    <p :class="{editable: editMode}" :contenteditable="editMode" @blur="editText">{{currCmp.info.txt}}</p>
  </section>
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
    editText(ev) {
      this.currCmp.info.txt = ev.target.innerText;
      this.update();
    },
    update() {
      var cmpCopy = JSON.parse(JSON.stringify(this.currCmp));
      eventBus.$emit("updateCmp", cmpCopy);
    }
  }
};
</script>
