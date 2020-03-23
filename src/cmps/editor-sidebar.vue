<template>
  <section class="editor-sidebar">
    <div class="top-sidebar flex">
      <div :class="{'active-tab': !editMode}" @click="editMode = false">
        <span class="fas fa-plus"></span> Elements
      </div>
      <div :class="{'active-tab': editMode}" @click="editMode = true">
        <span class="far fa-edit"></span> Edit
      </div>
    </div>

    <edit-panel v-if="editMode" :currCmp="currCmp"></edit-panel>

    <div v-if="!editMode" class="add-cmp accordion" role="presentation">
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
                <div class="cmp-btn" @click="$emit('addCmp',cmp)" v-for="cmp in cmps" :key="cmp.id">
                  <span class="fas fa-plus"></span>
                  {{cmp.type}}
                </div>
              </div>
              <div class="themes-btn-container" v-if="item.title === 'Themes'">
                <button @click="changeWapTheme('light-and-shiny')">Light and Shiny</button>
                <button @click="changeWapTheme('dark-theme')">Dark</button>
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
import { eventBus } from "../services/eventBus.service.js";
import editPanel from '../cmps/edit-panel.vue'
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
        },
        {
          id: 4,
          active: false,
          title: "Themes",
        }
      ],
      editMode: false,
      currCmp: null,
    };
  },
  created() {
    eventBus.$on('edit', cmp => {
      console.log(cmp)
      this.editMode = true;
      this.currCmp = JSON.parse(JSON.stringify(cmp))
    })
  },
  methods: {
    toggle(currItem) {
      this.items.forEach((item, index) => {
        if (item.id === currItem.id) item.active = !item.active;
        else item.active = false;
      });
    },
    changeWapTheme(themeName) {
      this.$store.commit({ type: 'changeWapTheme', themeName });
    }
  },
  components: {
    editPanel
  }
};
</script>
