<template>
  <section class="edit-map">
    <pre>{{mapCmp}}</pre>
    <input type="number" v-model="newMapPos.lat" placeholder="Enter Location" />
    <input type="number" v-model="newMapPos.lng" placeholder="Enter Location" />
    <button @click="updateMap">Update Map</button>
    <span>Width</span>
    <vue-slider
      v-model="mapSize.width"
      :min="300"
      :max="960"
      :contained="true"
      :tooltip="'active'"
      @change="changeMapSize"
    ></vue-slider>
    <span>Height</span>
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
import { eventBus } from '../services/eventBus.service.js'
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
      newMapPos: {
        lat: null,
        lng: null
      },
      mapSize: {
        width: null,
        height: null
      }
    };
  },
  methods: {
    updateMap() {
      this.mapCmp.info.center.lat = +this.newMapPos.lat;
      this.mapCmp.info.center.lng = +this.newMapPos.lng;
      this.mapCmp.info.markers[0].position.lat = +this.newMapPos.lat;
      this.mapCmp.info.markers[0].position.lng = +this.newMapPos.lng;
      this.updateCmp(this.mapCmp);
      // this.updateCmp(JSON.parse(JSON.stringify(this.mapCmp)))
    },
    changeMapSize() {
      eventBus.$emit("resize-map", this.mapSize);
    }
  }
};
</script>

<style>
</style>