<template>
  <div class="flex flex-column">
    <span>Font Color</span>
    <input type="color" v-model="currCmp.style.color" />

    <span>Background Color</span>
    <input type="color" v-model="currCmp.style.backgroundColor" />

    <span>Align</span>
    <select v-model="currCmp.style.textAlign">
      <option value="left">Left</option>
      <option value="center">Center</option>
      <option value="right">Right</option>
    </select>

    <span>Align Vertical</span>
    <select v-model="currCmp.style.justifyContent">
      <option value="center">Center</option>
      <option value="space-around">Space Around</option>
      <option value="space-between">Space Between</option>
      <option value="space-evenly">Space Evenly</option>
    </select>

    <span>Text Size</span>
    <input type="range" v-model="fontSize" @input="setTextSize" min="5" max="100" />

    <span>Letter Spacing</span>
    <input type="range" v-model="letterSpacing" @input="setLetterSpacing" min="0" max="50" />

    <span>Font</span>
    <select v-model="currCmp.style.fontFamily">
      <option v-for="font in fontFamily" :key="font" :value="font">{{font}}</option>
    </select>

  </div>
</template>

<script>
export default {
  props: {
    currCmp: Object
  },
  data() {
    return {
      fontSize: 5,
      letterSpacing: 2,
      fontFamily: ["Lato", "AlegreyaSans", "Lobster"]
    };
  },
  methods: {
    setTextSize() {
      this.currCmp.style.fontSize = this.fontSize + "px";
      this.update()
    },
    setLetterSpacing() {
      this.currCmp.style.letterSpacing = this.letterSpacing + "px";
      this.update()
    },
    update(){
        this.$emit('updateCmp', JSON.parse(JSON.stringify(this.currCmp)))
    }
  }
};
</script>