<template>
  <div class="app-card light-and-shiny" :class="info.subClass">
    <img :src="info.imgUrl" alt="Card Image" />
    <h3 class="card-text">{{info.title}}</h3>
    <p>Check out our team</p>
    <button>Check it out</button>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  }
};
</script>