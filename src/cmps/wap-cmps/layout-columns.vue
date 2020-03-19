<template>
  <section class="layout-columns" :class="info.subClass">
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