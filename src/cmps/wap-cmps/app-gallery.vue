<template>
  <div class="app-gallery pet-theme" :style="cmp.style" :class="cmp.subClass">
    <!-- <div  > -->
    <el-image
      v-for="child in cmp.children"
      :key="child.id"
      class="gallery-img"

      :src="child.imgUrl"
      :preview-src-list="imgs"
    >
      <!-- <component
          :is="child.type"
          :style="child.style"
          :src="child.imgUrl"
          :class="{ 'mark-selected':child.id === selectedCmp.id}"
          @click.stop="openEdit(child)"
      ></component>-->
    </el-image>
  </div>
  <!-- </div> -->
</template>

<script>
import { eventBus } from "../../services/eventBus.service.js";
export default {
  name: "app-gallery",
  props: {
    cmp: Object,
    selectedCmp: Object
  },
  methods: {
    openEdit(cmp) {
      //   console.log('app-card open edit', cmp)
      eventBus.$emit("edit", cmp);
    }
  },
  computed: {
    imgs() {
      const images = this.cmp.children.map(child => child.imgUrl)
      return images
    }
  }
};
</script>