<template>
  <section>
   <div @click="$emit('addCmp',cmp)" v-for="cmp in cmps" :key="cmp.id">
        {{cmp.type}}
     </div>
  </section>
</template>

<script>
export default {
props:{
    cmps: Array
  },
}
</script>

<style>

</style>