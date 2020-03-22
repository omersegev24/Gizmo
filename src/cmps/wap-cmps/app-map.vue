<template>
  <section class="app-map light-and-shiny" :class="cmp.info.subClass">
    <GmapMap
      class="map"
      :center="center"
      :zoom="12"
      map-type-id="terrain"
      :style="`width: ${cmp.style.width}px; height: ${cmp.style.height}px`"
    >
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
import { eventBus } from '../../services/eventBus.service'

export default {
  props: {
    cmp: Object
  },
  data() {
    return {
      currCmp: {},
      center: this.cmp.info.center,
      markers: this.cmp.info.markers,
      width: 500,
      height: 500,
    };
  },
  created() {
    // this.currCmp = JSON.parse(JSON.stringify(this.cmp));
    // // eventBus.$on('updateMap', mapCmp => this.currCmp = mapCmp)
    // eventBus.$on('resize-map', (mapSize) => {
    //   this.width = mapSize.width;
    //   this.height = mapSize.height;
    // })
    // eventBus.$on('updateLoc', loc => {
    //   console.log(loc.lat)
    // })
  },
};
</script>
