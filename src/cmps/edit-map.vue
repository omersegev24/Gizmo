<template>
  <section class="edit-map">
    <!-- <input type="text" v-model="locName" placeholder="Enter your location" /> -->
    <!-- <button @click="panToLoc">Change Location</button> -->
    <gmap-autocomplete @place_changed="getAddressData"></gmap-autocomplete>
    <p>Width</p>
    <vue-slider
      v-model="mapSize.width"
      :min="300"
      :max="960"
      :contained="true"
      :tooltip="'active'"
      @change="changeMapSize"
    ></vue-slider>
    <p>Height</p>
    <vue-slider
      v-model="mapSize.height"
      :min="300"
      :max="960"
      :contained="true"
      :tooltip="'active'"
      @change="changeMapSize"
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
      mapSize: {
        width: null,
        height: null
      },
      pos: {}
    };
  },
  methods: {
    getAddressData(place) {
      console.log(place.geometry.location.lat())
      console.log(place.geometry.location.lng())
      this.pos = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }
      this.mapCmp.info.center = this.pos
      this.mapCmp.info.markers[0].position = this.pos
      eventBus.
      this.update()
    },
    changeMapSize() {
      this.mapCmp.style.height = this.mapSize.height
      this.mapCmp.style.width = this.mapSize.width
      this.update();
    },
    update() {
      console.log('map updated')
      this.$emit("updateCmp", JSON.parse(JSON.stringify(this.mapCmp)));
    }
  }
};
</script>

<style>
</style>