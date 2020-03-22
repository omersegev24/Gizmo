<template>
  <section
    class="app-contact-us flex space-evenly light-and-shiny"
    id="app-contact-us"
    :class="currCmp.info.subClass"
  >
    <section class="info">
      <hr />
      <h3
        :class="{editable: editMode}"
        :contenteditable="editMode"
        @blur="editTitle"
      >{{currCmp.info.title}}</h3>

      <div class="adress-info">
        <p
          :class="{editable: editMode}"
          :contenteditable="editMode"
          @blur="editCountry"
        >{{currCmp.info.country}}</p>

        <p
          :class="{editable: editMode}"
          :contenteditable="editMode"
          @blur="editAddress"
        >{{currCmp.info.address}}</p>
      </div>

      <p>
        Tel:
        <span
          :class="{editable: editMode}"
          :contenteditable="editMode"
          @blur="editTitle"
        >{{currCmp.info.phone}}</span>
      </p>

      <a
        href="gmail.com"
        :class="{editable: editMode}"
        :contenteditable="editMode"
        @blur="editEmail"
      >{{currCmp.info.email}}</a>

    </section>
    <form @submit.prevent="contactUs" class="flex flex-column">
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
    cmp: Object
  },
  data() {
    return {
      currCmp: {},
      editMode: false,
      content: {}
    };
  },
  created() {
    this.currCmp = JSON.parse(JSON.stringify(this.cmp));
    eventBus.$on("editMode", isEditMode => {
      this.editMode = isEditMode;
    });
  },
  methods: {
    contactUs() {},
    editTitle(ev) {
      this.currCmp.info.title = ev.target.innerText;
      this.update();
    },
    editCountry(ev) {
      this.currCmp.info.country = ev.target.innerText;
      this.update();
    },
    editAddress(ev) {
      this.currCmp.info.address = ev.target.innerText;
      this.update();
    },
    editEmail(ev) {
      this.currCmp.info.email = ev.target.innerText;
      this.update();
    },
    update() {
      var cmpCopy = JSON.parse(JSON.stringify(this.currCmp));
      eventBus.$emit("updateCmp", cmpCopy);
    }
  }
};
</script>
