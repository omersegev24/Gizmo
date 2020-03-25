<template>
  <dl class="add-cmp accordion" role="presentation">
    <accordion-item
      v-for="item in content"
      :multiple="multiple"
      :item="item"
      :key="item.id"
      @click.native="toggle(item)"
      class="accordion-row"
    ></accordion-item>
  </dl>
</template>

<script>
import accordionItem from './accordion-item.cmp.vue'
export default {
  props: {
    content: {
      type: Array,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  methods: {
    toggle(currItem) {
      console.log('clicked', currItem);

      this.content.forEach((item, index) => {
        if (item.id === currItem.id) item.active = !item.active;
        else item.active = false;
      })
    },
  },
  // mounted() {
  //   this.groupId = this.$el.id
  // },
  components: {
    accordionItem
  }
}
</script>

<style>
</style>