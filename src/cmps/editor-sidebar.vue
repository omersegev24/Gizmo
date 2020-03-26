<template>
  <section class="editor-sidebar flex flex-column">
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
            <button @click="toggle(item)" class="accordion-row flex space-between align-center">
              <h4>{{item.title}}</h4>
              <template v-if="!item.active" class="accordion-row-icon">
                <span>
                  <i class="fas fa-angle-down"></i>
                </span>
              </template>
              <template v-else>
                <span>
                  <i class="fas fa-angle-up"></i>
                </span>
              </template>
              <!-- <span class="accordion-row-icon"></span> -->
            </button>
          </div>
          <transition name="fade">
            <div v-if="item.active" class="item-details">
              <div
                v-if="item.title === 'Sections'"
                class="cmp-btns-container flex flex-wrap space-evenly"
              >
                <div class="cmp-btn" @click="$emit('addCmp',cmp)" v-for="cmp in filteredCmps" :key="cmp.id">
                  <div v-if="cmp.type !== 'app-youtube' && cmp.type !== 'app-map'">
                    <p :class="cmpType(cmp.type).class + ' fa-2x'"></p>
                    <p>{{cmpType(cmp.type).name}}</p>
                  </div>
                </div>
              </div>
              <div
                v-else-if="item.title === 'Widgets'"
                class="cmp-btns-container flex flex-wrap space-evenly"
              >
                <div class="cmp-btn" @click="$emit('addCmp',cmp)" v-for="widget in widgets" :key="widget.id">
                  <div v-if="widget.type === 'app-youtube' || widget.type === 'app-map'">
                    <p :class="widgetsCmps(widget.type).class + ' fa-2x'"></p>
                    <p>{{widgetsCmps(widget.type).name}}</p>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <div class="save-btns flex justify-center align-center">
      <button>Publish</button>
      <button @click="saveWap">Save</button>
    </div>
  </section>
</template>

<script>
import { eventBus } from "../services/eventBus.service.js";
import editPanel from "../cmps/edit-panel.vue";
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
          title: "Sections",
          type: "selection-cmps",
          cmps: ""
        },
        {
          id: 2,
          active: false,
          title: "Elements",
          cmps: {}
        },
        {
          id: 3,
          active: false,
          title: "Widgets",
          cmps: {}
        }
      ],
      editMode: false
    };
  },
  created() {
    eventBus.$on("edit", cmp => {
      this.editMode = true;
    });
    this.items[0].cmps = this.cmps;
  },
  computed: {
    currCmp() {
      return this.$store.getters.getSelectedCmp;
    },
    filteredCmps() {
      return this.cmps.filter(cmp => 
        cmp.type !== 'app-youtube' && cmp.type !== 'app-map'
      );
    },
    widgets() {
      return this.cmps.filter(cmp => 
        cmp.type === 'app-youtube' || cmp.type === 'app-map'
      );
    }
  },
  methods: {
    saveWap() {
      eventBus.$emit("saveWap");
    },
    toggle(currItem) {
      this.items.forEach((item, index) => {
        if (item.id === currItem.id) item.active = !item.active;
        else item.active = false;
      });
    },
    cmpType(type) {
      switch (type) {
        case "app-header":
          return { name: "Header", class: "fas fa-heading" };
        case "app-article":
          return { name: "Article", class: "fas fa-newspaper" };
        case "layout-2-columns":
          return { name: "Cards", class: "fas fa-th-large" };
        case "layout-3-columns":
          return { name: "Columns", class: "fas fa-th" };
        case "app-card":
          return { name: "Card", class: "fas fa-square" };
        case "app-footer":
          return { name: "Footer", class: "fab fa-facebook-f" };
        case "app-contact":
          return { name: "Contact ", class: "fas fa-address-card" };
        case "app-chat":
          return { name: "Chat", class: "fas fa-comment-dots" };
        case "app-youtube":
          return { name: "YouTube", class: "fab fa-youtube" };
        case "app-social-links":
          return { name: "Social Links", class: "fas fa-share-alt" };
        case "app-map":
          return { name: "Map", class: "fas fa-map-marked-alt" };
      }
    },
    widgetsCmps(type) {
      switch (type) {
        case "app-youtube":
          return { name: "YouTube", class: "fab fa-youtube" };
        case "app-map":
          return { name: "Map", class: "fas fa-map-marked-alt" };
        default:
          return false;
      }
    }
  },
  components: {
    editPanel
  }
};
</script>
