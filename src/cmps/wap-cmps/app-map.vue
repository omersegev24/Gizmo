<template>
  <section class="app-map" :class="cmp.info.subClass">
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
    cmp: Object
  },
  data() {
    return {
      center: this.cmp.info.center,
      markers: this.cmp.info.markers
    };
  }
};
</script>
