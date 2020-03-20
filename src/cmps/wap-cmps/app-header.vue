<template>
  <header class="app-header light-and-shiny flex justify-center align-center flex-column" :class="info.subClass">
    <h1 class="title" :class="{editable: editMode}"
      :contenteditable="editMode"
      >{{info.title}}</h1>
    <h3 class="sub-title" :class="{editable: editMode}"
      :contenteditable="editMode"
      >{{info.subTitle}}</h3>
    <span
      :class="{editable: editMode}"
      :contenteditable="editMode"
    >Hello {{info.title}}</span>
  
    <button @click="editMode = !editMode">{{info.callToAction}}</button>
  </header>
</template>

<script>
export default {
  props: {
    info: Object
  },
  data(){
    return {
      editMode: false
    }
  },
};
</script>

