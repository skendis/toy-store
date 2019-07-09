<template>
  <section>
    <toy-list @emit-delete="deleteToy" :toys="toys"></toy-list>
    <div class="text-xs-center">
      <v-btn flat color="green" @click="addToy">Add</v-btn>
    </div>
    <div class="text-xs-center">
      <v-pagination v-model="page" :length="pageCount" @input="setPage"></v-pagination>
    </div>
    <button v-if="!chatIsOpen" class="chatButton" @click="toggleChat"><i class="far fa-comments"></i></button>
    <toy-chat v-if="chatIsOpen" @close-chat="toggleChat"></toy-chat>
  </section>
</template>

<script>
import ToyList from "../components/ToyList";
import ToyChat from "../components/ToyChat";
export default {
  components: {
    ToyList,
    ToyChat
  },
  created() {
    this.$store.dispatch({ type: "loadToys" });
  },
  data() {
    return {
      page: 1,
      chatIsOpen: false
    };
  },
  methods: {
    deleteToy(toyId) {
      this.$store.dispatch({ type: "deleteToy", toyId }).then(() => {});
    },
    setPage() {
      this.$store.commit("setPage", this.page);
      this.$store.dispatch({ type: "loadToys" });
    },
    addToy() {
      this.$router.push(`/toy/new`);
    },
    toggleChat() {
      this.chatIsOpen = !this.chatIsOpen
    }
  },
  computed: {
    toys() {
      return this.$store.getters.toysToShow;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
    pageCount() {
      return this.$store.getters.pagesCount;
    },
    isOpen() {
      return this.chatIsOpen;
    }
  }
};
</script>
<style>
.chatButton {
  position: fixed;
  font-size: 2.2rem;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  background-color: blue;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 300px;
  transition: 0.3s;
}
.chatButton:hover {
  background-color: white;
  color: blue;
}
</style>
