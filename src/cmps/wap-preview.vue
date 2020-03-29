<template>
  <section class="wap-preview ratio-16-9">
    <div>{{wap.title}}</div>
  </section>
</template>

<script>
import {eventBus} from '../services/eventBus.service.js'
export default {
  props: {
    wap: Object
  }
};
</script>
