<template>
  <div :id="item.id" class="accordion-item" :class="{'is-active': item.active}">
    <dt class="accordion-item-title">
      <!-- <button  class="accordion-item-trigger"> -->
      <h4 class="accordion-item-title">{{item.title}}</h4>
      <span class="accordion-row-icon"></span>
      <!-- </button> -->
    </dt>
    <transition name="fade">
      <dd v-if="item.active" class="item-details">
        <div v-for="cmp in item.cmps" :key="cmp.id" class="cmp-btns-container flex flex-column">
          {{cmp.type}}
        </div>
      </dd>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['item', 'multiple'],
}

</script>

<style>
</style>

