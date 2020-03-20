<template>
  <nav
    class="app-nav light-and-shiny"
    :class="info.subClass"
  >
    <nav class="flex">
      <p class="logo">{{info.logo}}</p>
      <ul class="nav-links flex justify-end">
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li>
          <a
            v-for="link in info.links"
            :href="'#' + link.to"
            :key="link.txt"
          >{{link.txt}}</a>
        </li>
      </ul>
    </nav>
  </nav>
</template>

<script>
export default {
  props: {
    info: Object
  }
};
</script>