<template>
  <section class="chat-app">
    <div @click.prevent="toggleChat" v-if="!chatOpen">Chat</div>
    <div v-if="chatOpen" class="chat-container">
      <a @click="toggleChat">X</a>
      <ul>
        <li v-for="(msg, index) in msgs" :key="index">{{msg.username}}: {{msg.text}}</li>
      </ul>
      <input v-model="msg.text" type="text" />
      <button @click="sendMsg">Send</button>
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
      autoMsg: { username: "Support", text: "Sure thing honey" },
      msgs: [],
      chatOpen: false
    };
  },
  methods: {
    sendMsg() {
      this.msgs.push(this.msg);
      this.msg = "";
      
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
