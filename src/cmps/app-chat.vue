<template>
  <section class="chat-app">
    <div @click.prevent="toggleChat">Chat</div>
    <div v-if="chatOpen" class="chat-container">
      <a @click="close">X</a>
      <ul>
        <li v-for="msg in msgs" :key="msg"></li>
      </ul>
      <input v-model="msg" type="text" />
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
      msg: "",
      msgs: [],
      chatOpen: false
    };
  },
  methods: {
    sendMsg() {
      this.msgs.push(this.msg);
      this.msg = "";
    },
    close() {},
    toggleChat(){
        this.chatOpen = !this.chatOpen;
    }
  }
};
</script>
