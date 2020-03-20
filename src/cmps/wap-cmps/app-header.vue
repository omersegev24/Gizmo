<template>
  <header 
    class="app-header light-and-shiny flex justify-center align-center flex-column" 
    :class="info.subClass">
    <h1 class="title">{{info.title}}</h1>
    <h3 class="sub-title">{{info.subTitle}}</h3>
    <button>{{info.callToAction}}</button>
  </header>
</template>

<script>
export default {
  props: {
    info: Object
  }
};
</script>
