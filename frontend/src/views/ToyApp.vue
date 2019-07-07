<template>
  <section>
    <toy-list @emit-delete="deleteToy" :toys="toys"></toy-list>
    <div class="text-xs-center">
      <v-pagination v-model="page" :length="5" @input="setPage"></v-pagination>
    </div>
  </section>
</template>

<script>
import ToyList from "../components/ToyList";
export default {
  components: {
    ToyList
  },
  created() {
    this.$store.dispatch({ type: "loadToys" });
  },
  data() {
    return {
      page: 1
    };
  },
  methods: {
    deleteToy(toyId) {
      this.$store.dispatch({ type: "deleteToy", toyId }).then(() => {});
    },
    setPage() {
      this.$store.commit("setPage", this.page);
      this.$store.dispatch({ type: "loadToys" });
    }
  },
  computed: {
    toys() {
      return this.$store.getters.toysToShow;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    }
  }
};
</script>
