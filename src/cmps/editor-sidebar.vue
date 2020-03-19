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
              <div v-if="item.title === 'Sections'" class="cmp-btns-container">
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

<style lang="scss" scoped>
* {
  outline: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.accordion {
  padding: 0;
  width: 300px;

  div {
    border-bottom: 1px solid rgba(10, 10, 10, 0.1);
  }

  div:last-child .item-details {
    border-radius: 5px;
  }

  .item-details {
    margin-left: 0;
  }
}

.accordion-row,
.item-details-inner {
  padding: 0.75rem 1.25rem;
}

.accordion-item-title {
  position: relative;

  h4 {
    margin: 0;
    font-size: 1.25rem;
    padding: 10px 1.25rem;
  }
}

.accordion-row {
  width: 100%;
  text-align: left;
  background-color: white;
  border: none;
}

.accordion-row-icon {
  $size: 8px;
  display: block;
  position: absolute;
  top: 0;
  right: 1.25rem;
  bottom: 0;
  margin: auto;
  width: $size;
  height: $size;
  border-right: 2px solid #363636;
  border-bottom: 2px solid #363636;
  transform: translateY(-$size / 4) rotate(45deg);
  transition: transform 0.2s ease;

  .is-active & {
    transform: translateY($size / 4) rotate(225deg);
  }
}
.cmp-btns-container {
  display: flex;
  flex-direction: column;
  
  .cmp-btn {
    padding: 15px;
    cursor: pointer;
    &:hover{
      background-color: #fff;
    }
  }
}

.item-details {
  overflow: hidden;
  background-color: whitesmoke;
}
</style>