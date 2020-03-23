<template>
  <div class="action-panel">
    <div class="action-container flex">
      <div>
        <!-- <button @click="edit()">Edit</button> -->
        <button @click="remove()">Delete</button>
      </div>
      <div class="move-cmp">
        <button @click="updatePos(1)">
          <i class="fas fa-arrow-down"></i>
        </button>
        <button @click="updatePos(-1)">
          <i class="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../services/eventBus.service.js";
export default {
  props: {
    cmp: Object
  },
  methods: {
    // edit() {
    //   console.log('cmpssssssssssßśš', this.cmp)
    //   eventBus.$emit("edit", this.cmp);
    // },
    remove() {
      eventBus.$emit("remove", this.cmp);
    },
    updatePos(diff) {
      eventBus.$emit("updatePos", { diff, cmp: this.cmp });
    }
  }
};
</script>

<style>
</style>