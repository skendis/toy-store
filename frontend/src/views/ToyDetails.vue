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
  </v-card>
</template>
<script>
import toyService from "../services/ToyService";
import moment from "moment";
export default {
  data() {
    return {
      toy: ""
    };
  },

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
  created() {
    const { id } = this.$route.params;
    toyService.getById(id).then(toy => {
      this.toy = toy;
      console.log(this.toy);
    });
  }
};
</script>
