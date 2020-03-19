<template>
  <header :class="info.subClass">
    <h1 class="logo">{{info.logo}}</h1>
    <a v-for="link in info.links" :href="'#' + link.to" :key="link.txt">{{link.txt}}</a>
  </header>
</template>

<script>
export default {
  props: {
    info: Object
  }
};
</script>

<style>
</style>