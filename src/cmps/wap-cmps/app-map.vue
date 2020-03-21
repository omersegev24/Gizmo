<template>
  <section class="app-map" :class="info.subClass">
    <GmapMap :center="center" :zoom="12" map-type-id="terrain" :style="`width: ${width}px; height: ${height}px`">
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </section>
</template>

<script>
import { eventBus } from '../../services/eventBus.service'

export default {
  props: {
    info: Object
  },
  data() {
    return {
      center: this.info.center,
      markers: this.info.markers,
      width: 500,
      height: 500,
    };
  },

  created() {
    eventBus.$on('resize-map', (mapSize) => {
      this.width = mapSize.width;
      this.height = mapSize.height;
    })
  }
};
</script>