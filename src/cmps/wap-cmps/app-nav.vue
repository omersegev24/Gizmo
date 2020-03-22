<template>
  <nav class="app-nav light-and-shiny" :class="info.subClass">
    <section class="flex space-between">
      <p class="logo" id="Home">{{info.logo}}</p>
      <ul class="nav-links flex justify-end align-center">
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
    </section>
  </nav>
</template>

<script>
export default {
  props: {
    info: Object
  },
};
</script>