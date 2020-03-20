<template>
  <nav class="main-nav flex ">
      <ul class="links">
      <h1 class="logo"><router-link to="/">Gizmo</router-link></h1>
      <router-link to="/templates">Templates</router-link>
      <router-link to="/explore">Explore</router-link>
      <router-link to="/support">Support</router-link>
      </ul>
      <router-link to="/editor">Editor</router-link>
      <router-link to="/signin">Sign in</router-link>
  </nav>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
nav{
  margin-bottom: 30px;
}
</style>