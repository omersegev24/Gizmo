<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <template-page></template-page>
  </div>
</template>

<script>
// @ is an alias to /src
import templatePage from './template.vue'

export default {
  name: 'Home',
  components: {
  templatePage
  }
}
</script>
