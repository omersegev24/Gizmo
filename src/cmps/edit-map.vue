<template>
  <section class="edit-map">
    <gmap-autocomplete @place_changed="getAddressData"></gmap-autocomplete>
    <p>Width</p>
    <vue-slider
      v-model="mapData.style.width"
      :min="300"
      :max="1500"
      :contained="true"
      :tooltip="'active'"
      @change="update"
    ></vue-slider>
    <p>Height</p>
    <vue-slider
      v-model="mapData.style.height"
      :min="300"
      :max="1500"
      :contained="true"
      :tooltip="'active'"
      @change="update"
    ></vue-slider>
  </section>
</template>

<script>
import { eventBus } from "../services/eventBus.service.js";
import { mapService } from "../services/map.service.js"
import vueSlider from "vue-slider-component";
export default {
  props: {
    mapCmp: Object
  },
  components: {
    vueSlider
  },
  data() {
    return {
      mapData: {
        style: {
          width: 500,
          height: 500,
        },
        pos: {}
      },
    };
  },
  methods: {
    getAddressData(place) {
      this.mapData.pos = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }

      this.update()
    },
    update() {
      const mapCopy = JSON.parse(JSON.stringify(this.mapCmp))
      mapCopy.style = this.mapData.style
      mapCopy.center = this.mapData.pos
      mapCopy.markers[0].position = this.mapData.pos
      
      eventBus.$emit('updateCmp', mapCopy)
    }
  }
};
</script>

<style>
</style>