<template>
  <div class="edit-text flex flex-column">
    <div class="color-picker">
      <div v-if="!currCmp.children">
        <p @click="colorOpen = !colorOpen">Font Color</p>
        <hr class="divider" v-if="colorOpen" />
        <swatches
          v-if="colorOpen"
          v-model="cmp.style.color"
          @click.native="update"
          colors="material-light"
          swatchSize="23"
          borderRadius="0"
          inline
        />
      </div>

      <div v-if="!currCmp.social">
        <p @click="bgcOpen = !bgcOpen">Background Color</p>
        <hr class="divider" v-if="bgcOpen" />
        <swatches
          v-if="bgcOpen"
          v-model="cmp.style.backgroundColor"
          @click.native="update"
          colors="material-light"
          swatchSize="23"
          borderRadius="0"
          inline
        />
      </div>
    </div>

    <div class="sliders">
      <p>Text Size</p>
      <vue-slider
        v-model="fontSize"
        :min="10"
        :max="100"
        :contained="true"
        :tooltip="'active'"
        @change="setTextSize"
      ></vue-slider>

      <hr class="divider" />

      <p>Letter Spacing</p>
      <vue-slider
        v-model="letterSpacing"
        :max="50"
        :contained="true"
        :tooltip="'active'"
        @change="setLetterSpacing"
      ></vue-slider>

      <hr class="divider" />

      <p>Section Heigth</p>
      <vue-slider
        v-model="padding"
        :min="0"
        :max="100"
        :contained="true"
        :tooltip="'active'"
        @change="setSectionHeigth"
      ></vue-slider>

      <hr class="divider" />
    </div>

    <div class="flex space-between align-center">
      <p>Align:</p>
      <v-select :options="['left', 'center', 'right']" v-model="cmp.style.textAlign"></v-select>
    </div>

    <hr class="divider" />

    <div class="flex space-between align-center">
      <p>Font:</p>
      <v-select :options="fontFamily" v-model="cmp.style.fontFamily"></v-select>
    </div>
  </div>
</template>

<script>
import swatches from "vue-swatches";
import "vue-swatches/dist/vue-swatches.min.css";
import vueSlider from "vue-slider-component";

export default {
  props: {
    currCmp: Object
  },
  data() {
    return {
      cmp: JSON.parse(JSON.stringify(this.currCmp)),
      bgcOpen: false,
      colorOpen: false,
      fontSize: 5,
      letterSpacing: 0,
      padding: 0,
      fontFamily: ["Lato", "AlegreyaSans", "Lobster"]
    };
  },
  methods: {
    setTextSize() {
      this.cmp.style.fontSize = this.cmp.style.fontSize + "px";
      this.update();
    },
    setLetterSpacing() {
      this.cmp.style.letterSpacing = this.letterSpacing + "px";
      this.update();
    },
    setSectionHeigth() {
      this.cmp.style.padding = this.padding + "px";
      this.update();
    },
    update() {
      this.$emit("updateCmp", this.cmp);
    }
  },
  watch: {
    currCmp() {
      this.cmp = JSON.parse(JSON.stringify(this.currCmp))
    }
  },
  components: {
    swatches,
    vueSlider
  }
};
</script>