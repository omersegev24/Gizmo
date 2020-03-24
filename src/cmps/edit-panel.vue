<template>
  <div class="edit-panel flex flex-column">
    <div v-if="!currCmp">
      <p>Pick a section to start editing!</p>
    </div>
    <div v-else>
      <section v-if="currCmp.type === 'app-map'" class="map-edit-panel">
        <edit-map :mapCmp="cmpCopy"></edit-map>
      </section>

      <div v-for="(child, index) in linkInputs" :key="child.id">
        <div v-for="(item, key) in child" :key="key">
          <p>{{key}}</p>
          <input type="text" v-model="cmpCopy.links[index][key]" placeholder="Enter text..." />
        </div>
      </div>

      <div v-if="currCmp.imgUrl">
        <p>{{'Image'}}</p>
        <input @change="uploadImg" id="file" type="file" />
        <label class="btn-3" for="file">
          <span>select</span>
        </label>
        <img :src="imgPreview" style="width: 250px, heigth: 250px" />
      </div>

      <edit-text :currCmp="cmpCopy" @updateCmp="updateCmp"></edit-text>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../services/eventBus.service.js";
import cloudinaryService from "../services/cloudinary.service.js";

import editText from "./edit-text.vue";
import editMap from "./edit-map.vue";

export default {
  props: {
    currCmp: Object
  },
  data() {
    return {
      cmpCopy: JSON.parse(JSON.stringify(this.currCmp))
    };
  },
  computed: {
    linkInputs() {
      if (this.currCmp.links) {
        return this.currCmp.links;
      }
    },
    imgPreview() {
      return !this.currCmp.imgUrl
        ? this.currCmp.imgUrl
        : "http://res.cloudinary.com/omer1234/image/upload/v1584998858/li0hhzwliqjrqcqv2coz.jpg";
    }
  },
  watch: {
    cmpCopy: {
      handler() {
        // this.cmpCopy = JSON.parse(JSON.stringify(this.currCmp));
        this.updateCmp(this.cmpCopy);
      },
      deep: true
    },
    currCmp() {
      this.cmpCopy = JSON.parse(JSON.stringify(this.currCmp));
    }
  },
  methods: {
    updateCmp(cmp) {
      eventBus.$emit("updateCmp", cmp);
    },
    async uploadImg(ev) {
      const res = await cloudinaryService.uploadImg(ev);
      const { url } = res;

      this.cmpCopy.imgUrl = url
        ? url
        : "http://res.cloudinary.com/omer1234/image/upload/v1584998858/li0hhzwliqjrqcqv2coz.jpg";
    }
  },
  components: {
    editText,
    editMap
  }
};
</script>

<style lang="scss" scoped>
[type="file"] {
  height: 0;
  overflow: hidden;
  width: 0;
}
[type="file"] + label {
  background: #f15d22;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Poppins", sans-serif;
  font-size: inherit;
  font-weight: 600;
  margin-bottom: 1rem;
  outline: none;
  padding: 10px 25px;
  position: relative;
  transition: all 0.3s;
  vertical-align: middle;

  &.btn-3 {
    background-color: #3353f5;
    border-radius: 5px;
    overflow: hidden;

    span {
      display: inline-block;
      height: 100%;
      transition: all 0.3s;
      width: 100%;
    }

    &::before {
      color: #fff;
      content: "\f093";
      font-family: "Font Awesome 5 Free";
      font-size: 100%;
      height: 100%;
      left: 0;
      line-height: 2.6;
      position: absolute;
      top: -180%;
      transition: all 0.3s;
      width: 100%;
    }

    &:hover {
      background-color: darken(#3353f5, 30%);

      span {
        transform: translateY(300%);
      }
      &::before {
        top: 0;
      }
    }
  }
}
</style>