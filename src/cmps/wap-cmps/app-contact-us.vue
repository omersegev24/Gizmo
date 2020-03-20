<template>
  <section class="app-contact-us" id="app-contact-us" :class="info.subClass">
    <h3>{{info.title}}</h3>
    <p>{{info.address}}</p>
    <p>{{info.phone}}</p>
    <form @submit.prevent="contactUs">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />
      <input type="text" placeholder="Address" />
      <input type="text" placeholder="Subject" />
      <textarea cols="30" rows="10" placeholder="Type your Message here..."></textarea>
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
