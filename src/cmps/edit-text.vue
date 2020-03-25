<template>
  <div class="edit-text flex flex-column">
    <div class="color-picker">
      <div v-if="!currCmp.children">
        <p @click="colorOpen = !colorOpen">Font Color</p>
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

    <span>Text Size</span>
    <vue-slider
      v-model="fontSize"
      :min="10"
      :max="100"
      :contained="true"
      :tooltip="'active'"
      @change="setTextSize"
    ></vue-slider>

    <span>Letter Spacing</span>
    <vue-slider
      v-model="letterSpacing"
      :max="50"
      :contained="true"
      :tooltip="'active'"
      @change="setLetterSpacing"
    ></vue-slider>

    <span>Section Heigth</span>
    <vue-slider
      v-model="padding"
      :min="0"
      :max="100"
      :contained="true"
      :tooltip="'active'"
      @change="setSectionHeigth"
    ></vue-slider>

    <span>Align</span>
    <v-select :options="['left', 'center', 'right']" v-model="cmp.style.textAlign"></v-select>

    <span>Font</span>
    <v-select :options="fontFamily" v-model="cmp.style.fontFamily"></v-select>
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
      cmp: this.currCmp,
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
      this.cmp.style.fontSize = this.fontSize + "px";
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
      this.cmp = this.currCmp
    }
  },
  components: {
    swatches,
    vueSlider
  }
};
</script>