<template>
  <div class="actions-panel">
    <button>Delete</button>
    <button @click="edit()">Edit</button>
  </div>
</template>

<script>
import { eventBus } from '../services/eventBus.service.js'
export default {
  props: {
    cmp: Object
  },
  methods: {
    edit(cmp) {
      eventBus.$emit('edit', this.cmp)
    }
  }
}
</script>

<style>
</style>