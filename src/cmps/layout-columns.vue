<template>
  <section class="layout-columns">
    <component v-for="child in info.children" :is="child.type" :info="child.info" :key="child.id"></component>
  </section>
</template>

<script>
export default {
  props: {
    info: Object
  }
};
</script>

<style>
/* flex//grid */
</style>