<template>
  <nav class="app-nav light-and-shiny" :class="info.subClass">
    <nav class="flex">
      <p class="logo" id="Home">{{info.logo}}</p>
      <ul class="nav-links flex justify-end align-center">
        <!-- <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li> -->
        <li>
          <a
            v-for="link in info.links"
            :href="'#' + link.to"
            :key="link.txt"
          >
            {{link.txt}}
          </a>
        </li>
      </ul>
    </nav>
  </nav>
</template>

<script>
export default {
  props: {
    info: Object
  },
  created() {
    console.log(this.info)
  }
};
</script>