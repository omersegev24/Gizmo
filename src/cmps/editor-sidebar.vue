<template>
  <section class="editor-sidbar">
    <div class="accordion" role="presentation">
      <div v-for="item in items" :item="item" :key="item.id">
        <div class="accordion-item" :class="{'is-active': item.active}">
          <div class="accordion-item-title">
            <button @click="toggle(item)" class="accordion-row">
              <h4>{{item.title}}</h4>
              <span class="accordion-row-icon"></span>
            </button>
          </div>
          <transition name="fade">
            <div v-if="item.active" class="item-details">
              <div v-if="item.title === 'Sections'" class="cmp-btns-container flex flex-column">
                <div
                  class="cmp-btn"
                  @click="$emit('addCmp',cmp)"
                  v-for="cmp in cmps"
                  :key="cmp.id"
                >{{cmp.type}}</div>
              </div>
              <div else>{{item.details}}</div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    cmps: Array
  },
  data() {
    return {
      items: [
        {
          id: 1,
          active: false,
          title: "Sections"
        },
        {
          id: 2,
          active: false,
          title: "Elements",
          details: `
          <p>Ah, the 'Breakfast Club' soundtrack! I can't wait til I'm old enough to feel ways about stuff!</p>`
        },
        {
          id: 3,
          active: false,
          title: "Widgets",
          details: `<p>Ah, the 'Breakfast Club' soundtrack! I can't wait til I'm old enough to feel ways about stuff!</p>`
        }
      ]
    };
  },
  methods: {
    toggle(currItem) {
      this.items.forEach((item, index) => {
        if (item.id === currItem.id) item.active = !item.active;
        else item.active = false;
      });
    }
  },
  startTransition(el) {
    el.style.height = el.scrollHeight + "px";
  },
  endTransition(el) {
    el.style.height = "";
  }
};
</script>