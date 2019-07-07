<template>
  <v-card class="toy-preview">
    <v-img :src="AdorableImgUrl" aspect-ratio="1.75"></v-img>

    <v-card-title primary-title>
      <div>
        <h2 class="headline mb-0">{{toy.name}}</h2>
        <h2>{{ toy.price }}$</h2>
        <h3>{{ inStock }}</h3>
        <div>{{toy.type}}</div>
        <div>{{timeFormat}}</div>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat color="orange" @click="getDetails">details</v-btn>
      <v-btn flat color="green" @click="editToy">edit</v-btn>
      <v-btn flat color="red" @click="emitDelete">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
import moment from 'moment';
export default {
  data() {
    return {
      card_text: ""
    };
  },
  props: ["toy"],
  computed: {
    inStock() {
      return this.toy.inStock ? "IN STOCK" : "OUT OF STOCK";
    },
    timeFormat() {
      return moment(this.toy.createdAt).format("DD-MM-YYYY, HH:MM");
    },
    AdorableImgUrl() {
      return `https://api.adorable.io/avatars/285/${this.toy._id}@adorable.png`;
    }
  },
  methods: {
    getDetails() {
      this.$router.push(`/toy/${this.toy._id}`);
    },
    editToy() {
      this.$router.push(`/toy/edit/${this.toy._id}`);
    },
    emitDelete() {
      this.$emit("emit-delete", this.toy._id);
    }
  }
};
</script>
<style>
.toy-preview {
  margin: 10px;
}
</style>
