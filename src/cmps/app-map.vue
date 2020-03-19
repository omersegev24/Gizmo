<template>
  <section class="app-map">
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
  data() {
    return {
      center: { lat: 32.519, lng: 34.9045 },
      markers: [{ position: {lat: 32.519, lng: 34.9045 } }]
    };
  }
};
</script>