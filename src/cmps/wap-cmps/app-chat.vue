<template>
  <section class="app-chat light-and-shiny" :class="info.subClass">
    <div class="unopened-chat-container flex space-between" @click.prevent="toggleChat" v-if="!chatOpen">
      <section class="unopened-chat-titles">
        <p>Let's Chat!</p>
        <p class="chat-sm-txt">
          <span class="fas fa-bolt"></span>
          We'll reply as soon as we can
        </p>
      </section>
      <span class="arrow-icon fas fa-angle-up flex justify-center align-center"></span>
    </div>
    <div v-if="chatOpen" class="chat-container">
      <div class="unopened-chat-container flex space-between" @click.prevent="toggleChat">
        <section class="unopened-chat-titles">
          <p>Let's Chat!</p>
          <p class="chat-sm-txt">
            <span class="fas fa-bolt"></span>
            We'll reply as soon as we can
          </p>
        </section>
        <span class="arrow-icon fas fa-angle-down flex justify-center align-center"></span>
      </div>
      <ul class="msgs-container">
        <li 
          v-for="(msg, index) in msgs" 
          :key="index"
          :class="[msg.username === 'Support' ? 'support' : '']">
          {{msg.username}}: {{msg.text}}
        </li>
      </ul>
      <div class="msg-send-container">
        <input v-model="msg.text" type="text" placeholder="Type your message..." />
        <span class="msg-send fa fa-send-o" @click="sendMsg" title="Send"></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    info: Object
  },
  data() {
    return {
      msg: {username: 'Guest', text: ''},
      autoMsg: { username: 'Support', text: 'Sure thing honey' },
      msgs: [],
      chatOpen: false
    };
  },

  computed: {
    isSupport() {
      return msg.username === 'Support'
    }
  },

  methods: {
    sendMsg() {
      this.msgs.push(this.msg);
      this.msg = '';
      
      setTimeout(() => {
        this.msgs.push(this.autoMsg);
      }, 1500);
    },
    close() {},
    toggleChat(){
        this.chatOpen = !this.chatOpen;
    }
  }
};
</script>
