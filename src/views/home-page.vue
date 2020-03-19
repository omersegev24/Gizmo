<template>
  <div class="home">
    <default-wap></default-wap>
  </div>
</template>

<script>
// @ is an alias to /src
import defaultWap from '@/cmps/default-wap.vue';

export default {
  name: 'Home',
  components: {
    defaultWap
  }
}
</script>
