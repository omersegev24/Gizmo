<template>
  <div class="edit-text flex flex-column" >
    <div class="color-picker">
      <p @click="colorOpen = !colorOpen">Font Color</p>
      <swatches v-if="colorOpen" v-model="currCmp.style.color" colors="text-advanced" inline />

      <p @click="bgcOpen = !bgcOpen">Background Color</p>
      <swatches
        v-if="bgcOpen"
        v-model="currCmp.style.backgroundColor"
        colors="text-advanced"
        inline
      />
    </div>
    <span>Align</span>
    <v-select :options="['left', 'center', 'right']" v-model="currCmp.style.textAlign"></v-select>

    <span>Align Vertical</span>
    <v-select
      :options="['center', 'space-between', 'space-evenly']"
      v-model="currCmp.style.justifyContent"
    ></v-select>

    <span>Text Size</span>
    <vue-slider
      v-model="fontSize"
      :min="0"
      :max="100"
      :contained="true"
      :tooltip="'active'"
      @change="setTextSize"
    ></vue-slider>

    <span>Letter Spacing</span>
    <vue-slider
      v-model="letterSpacing"
      :min="0"
      :max="100"
      :contained="true"
      :tooltip="'active'"
      @change="setLetterSpacing"
    ></vue-slider>

    <span>Font</span>
    <v-select :options="fontFamily" v-model="currCmp.style.fontFamily"></v-select>
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
      bgcOpen: false,
      colorOpen: false,
      fontSize: 5,
      letterSpacing: 2,
      fontFamily: ["Lato", "AlegreyaSans", "Lobster"]
    };
  },
  methods: {
    setTextSize() {
      this.currCmp.style.fontSize = this.fontSize + "px";
      this.update();
    },
    setLetterSpacing() {
      this.currCmp.style.letterSpacing = this.letterSpacing + "px";
      this.update();
    },
    update() {
      this.$emit("updateCmp", JSON.parse(JSON.stringify(this.currCmp)));
    }
  },
  components: {
    swatches,
    vueSlider
  }
};
</script>