<template>
  <div class="app-card" :style="currCmp.style" :class="currCmp.subClass">
    <component
      v-for="child in cmp.children"
      :is="child.type"
      :key="child.id"
      :style="child.style"
      :contenteditable="true"
      @blur="editTxt($event,child)"
      :src="child.imgUrl"
    >{{child.txt}}</component>
    <!-- <img :src="currCmp.info.imgUrl" alt="Card Image" />
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
    >{{currCmp.info.callToAction}}</button>-->
  </div>
</template>

<script>
import { eventBus } from "../../services/eventBus.service.js";
// import elImg from '../wap-elements-cmp/img.cmp.vue'
import elTitle from '../wap-elements-cmp/title.cmp.vue'
import elButton from '../wap-elements-cmp/button.cmp.vue'
export default {
  props: {
    cmp: Object,
    isEditing: Boolean
  },
  data() {
    return {
      currCmp: {},
      editMode: false
    };
  },
  computed: {
    markCmp() {
      return { 'mark-cmp': this.isEditing }
    }
  },
  created() {
    this.currCmp = JSON.parse(JSON.stringify(this.cmp));
    eventBus.$on("editMode", isEditMode => {
      this.editMode = isEditMode;
    });
  },
  methods: {
    editTxt(ev, cmp) {
      var cmpCopy = JSON.parse(JSON.stringify(cmp));
      cmpCopy.txt = ev.target.innerText;
      eventBus.$emit("updateCmp", cmpCopy);
    },
    cmpClicked(child) {
      eventBus.$emit("edit", child);
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
  },
  components: {
    // elImg,
    elTitle,
    elButton
  }
};
</script>