<template>
  <section class="app-map" :class="info.subClass">
    <GmapMap :center="center" :zoom="12" map-type-id="terrain" style="width: 500px; height: 300px">
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        @click="center=m.position"
      />
    </GmapMap>
  </section>
</template>

<script>
export default {
  props: {
    info: Object
  },
  data() {
    return {
      center: this.info.center,
      markers: this.info.markers
    };
  }
};
</script>

<style>
.app-map{
  width:1000rem;
}
</style>