<template>
  <div class="video-container">
    <h3 class="title">{{cmp.info.title}}</h3>
    <iframe :src="cmp.info.url"></iframe>
  </div>
</template>

<script>
export default {
  props: {
    cmp: Object
  },
}
</script>

<style>
</style>