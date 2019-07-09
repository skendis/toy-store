<template>
  <div class="chat-window">
    <button @click="emitCloseChat" class="close-btn">X</button>
    <div class="chat-messages">
      <ul id="messages" v-for="(message,idx) in messages" :key="idx">
        <li>{{message.user}}-{{message.message}}</li>
      </ul>
    </div>
    <div>
      <form class="chat-form">
        <input v-model="message" type="text" class="chat-input" />
        <button @click.prevent="sendMessage" class="chat-btn">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
export default {
  data() {
    return {
      user: "clientVue",
      message: "",
      messages: [],
      socket: io("https://sergei-toy.herokuapp.com")
    };
  },
  methods: {
    emitCloseChat() {
      this.$emit("close-chat");
    },
    sendMessage() {
      this.socket.emit("SEND_MESSAGE", {
        user: this.user,
        message: this.message
      });
      this.message = "";
    }
  },
  mounted() {
    this.socket.on("MESSAGE", data => {
      this.messages = [...this.messages, data];
      // you can also do this.messages.push(data)
    });
  },
  destroyed() {
    this.socket.disconnect();
  }
};
</script>
<style scoped>
.chat-window {
  background: #80bef1;
  position: absolute;
  top: 50%;
  left: 50%;
  box-shadow: 2px 0px 20px 14px #a7a7a7;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  transform: translate(-50%, -50%);
}

.chat-form {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #fafafa;
}
.chat-input {
  width: 70%;
  height: 40px;
}
.chat-btn {
  width: 30%;
  background-color: #bff288;
}
.chat-messages {
  padding: 2px;
  color: white;
  font-size:1.2rem;
}
.chat-messages ul{
  list-style-type: none;
  padding: 0;
}
.close-btn {
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: #bff288;
  color: black;
  border-radius: 300px;
  width: 20px;
  height: 20px;
}
</style>