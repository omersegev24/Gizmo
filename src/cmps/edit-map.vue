<template>
  <section class="edit-map">
    <input type="text" v-model="locName" placeholder="Enter your location" />
    <button @click="getLocByName(locName)">Change Location</button>
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
import vueSlider from "vue-slider-component";
import axios from "axios";

export default {
  props: {
    mapCmp: Object
  },
  components: {
    vueSlider
  },
  data() {
    return {
      locName: "",
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
    async getLocByName(locName) {
      const API_KEY = "AIzaSyCS9KKJZD6rGF93tIgOd3qqW8GNz4oZIBA";
      let prmLocation = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${locName}&key=${API_KEY}`)
      let location = prmLocation.data.results[0].geometry.location;
      this.mapCmp.info.center.lat = location.lat;
      this.mapCmp.info.center.lng = location.lng;
      this.mapCmp.info.markers[0].position.lat = location.lat;
      this.mapCmp.info.markers[0].position.lng = location.lng;
      this.update(this.mapCmp);
    },
    changeMapSize() {
      eventBus.$emit("resize-map", this.mapSize);
    },
    update(updatedMap) {
      this.$emit("updateCmp", JSON.parse(JSON.stringify(updatedMap)));
    }
  }
};
</script>

<style>
</style>