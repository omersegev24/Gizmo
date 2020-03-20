<template>
  <section class="app-contact-us flex space-evenly" id="app-contact-us" :class="info.subClass">
    <section class="info">
      <hr/>
      <h3>{{info.title}}</h3>
      <div class="adress-info">
        <p>{{info.country}}</p>
        <p>{{info.address}}</p>
      </div>
      <p>Tel: {{info.phone}}</p>
      <a href="gmail.com">{{info.email}}</a>
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
