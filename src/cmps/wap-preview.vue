<template>
  <section class="wap-preview">
    <div @click="openEditor(wap._id)">{{wap.title}}</div>
  </section>
</template>

<script>
import {eventBus} from '../services/eventBus.service.js'
export default {
  props: {
    wap: Object
  },
  methods: {
      openEditor(wapId){
          eventBus.$emit('openEditor', wapId)
      }
  },
};
</script>
