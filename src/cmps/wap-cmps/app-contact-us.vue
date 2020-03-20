<template>
  <section class="app-contact-us flex space-evenly" id="app-contact-us" :class="info.subClass">
    <section class="adress">
      <h3>{{info.title}}</h3>
      <p>{{info.address}}</p>
      <p>{{info.phone}}</p>
    </section>
    <form @submit.prevent="contactUs" class="flex flex-column">
      <label class="flex flex-column">
        Enter Your Name
        <input type="text" placeholder="Name"/>
      </label>
      <label class="flex flex-column">
        Enter Your Email *
        <input type="email" placeholder="Email"/>
      </label>
      <label class="flex flex-column">
        Enter Your Phone
        <input type="phone" placeholder="Phone" />
      </label>
      <!-- <label>

        <input type="adress" placeholder="Address" />
      </label> -->
      <label class="flex flex-column">
        Enter Your Subject
        <input type="text" placeholder="Subject" />
      </label>
      <label class="flex flex-column">
        Message
        <textarea cols="40" rows="5" placeholder="Type your Message here..."></textarea>
      </label>
      <button>Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    info: Object
  },
  data() {
    return {
      content: {}
    };
  },
  methods: {
    contactUs() {}
  }
};
</script>
