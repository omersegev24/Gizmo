<template>
<section class="app-article" id="app-article" :class="info.subClass">
    <h3>{{info.title}}</h3>
    <h4>{{info.subtitle}}</h4>
    <p>{{info.txt}}</p>
</section>
</template>

<script>
export default {
  props: {
    info: Object
  }
};
</script>
