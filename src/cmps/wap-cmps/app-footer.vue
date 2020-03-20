<template>
  <footer class="app-footer" id="app-footer" :class="info.subClass">
    <p>{{info.title}}</p>
  </footer>
</template>

<script>
export default {
  props: {
    info: Object
  }
};
</script>