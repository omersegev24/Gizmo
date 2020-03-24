<template>
  <section class="app-contact-us flex space-evenly" id="app-contact-us" :class="cmp.subClass">
 
    <div class="flex flex-column space-evenly">
      <component
        class="info"
        :style="child.style"
        v-for="child in cmp.children"
        :contenteditable="true"
        :is="child.type"
        :cmp="child"
        :key="child.id"
        @change="editTxt($event,child)"
        :class="{ 'mark-selected':child.id === selectedCmp.id}"
        @click.stop="openEdit(child)"
      >{{child.txt}}</component>
    </div>
    <form  class="flex flex-column">
      <label class="flex flex-column">
        Enter Your Name
        <input type="text" placeholder="Name" />
      </label>
      <label class="flex flex-column">
        Enter Your Email *
        <input type="email" placeholder="Email" />
      </label>
      <label class="flex flex-column">
        Enter Your Phone
        <input type="phone" placeholder="Phone" />
      </label>
      <label class="flex flex-column">
        Enter Your Subject
        <input type="text" placeholder="Subject" />
      </label>
      <label class="flex flex-column">
        Message
        <textarea cols="40" rows="3" placeholder="Type your Message here..."></textarea>
      </label>
      <button>Submit</button>
    </form>
  </section>
</template>

<script>
import { eventBus } from "../../services/eventBus.service.js";
export default {
  props: {
    cmp: Object,
    selectedCmp: Object
  },
  methods: {
    editTxt(ev, cmp) {
      var cmpCopy = JSON.parse(JSON.stringify(cmp));
      cmpCopy.txt = ev.target.innerText;
      eventBus.$emit('updateCmp', cmpCopy);
    },
    openEdit(cmp) {
      eventBus.$emit('edit', cmp)
    },
  }
};
</script>
