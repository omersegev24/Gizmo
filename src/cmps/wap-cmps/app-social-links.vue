<template>
  <div class="app-social-links" :contenteditable="false">
    <a
      :class="{'mark-selected':link.id === selectedCmp.id}"
      v-for="link in cmp.children"
      :key="link.id"
      :href="cmp.url"
      @click.stop="openEdit(link)"
      :style="link.style"
    >
      <i :class="'fab fa-'+ link.social +'-square fa-2x'"></i>
    </a>
  </div>
</template>


<script>
import { eventBus } from '../../services/eventBus.service.js'
export default {
  props: {
    cmp: Object,
    selectedCmp: Object
  },
  methods: {
    openEdit(link) {
      console.log('hello', link)
      eventBus.$emit('edit', link)
    }
  }
}
</script>