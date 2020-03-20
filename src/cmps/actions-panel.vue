<template>
  <div class="actions-panel">
    <button @click="remove()">Delete</button>
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
    edit() {
      eventBus.$emit('edit', this.cmp)
    },
    remove() {
      eventBus.$emit('remove', this.cmp)
    }
  }
}
</script>

<style>
</style>