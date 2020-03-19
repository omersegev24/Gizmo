<template>
  <div class="app-card" :class="info.subClass">
    <img :src="info.imgUrl" alt="Card image" />
    <h3 class="card-text">{{info.title}}</h3>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  }
};
</script>