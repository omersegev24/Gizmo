<template>
  <div class="app-card light-and-shiny" id="card" :class="currCmp.info.subClass">
    <img :src="currCmp.info.imgUrl" alt="Card Image" />
    <h3
      class="card-text"
      :class="{editable: editMode}"
      :contenteditable="editMode"
      @blur="editTitle"
    >{{currCmp.info.title}}</h3>
    <p
      :class="{editable: editMode}"
      :contenteditable="editMode"
      @blur="editSubTitle"
    >{{currCmp.info.subTitle}}</p>

    <button
      :class="{editable: editMode}"
      :contenteditable="editMode"
      @blur="editButton"
    >{{currCmp.info.callToAction}}</button>
  </div>
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