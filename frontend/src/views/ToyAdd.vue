<template>
  <v-card class="toy-preview">
      <br>
      <br>
    <v-card-title primary-title>
      <div>
        <v-text-field v-model="toy.name" :rules="nameRules" :counter="20" label="toy name"></v-text-field>
        <v-text-field v-model="toy.price" :rules="nameRules" :counter="20" label="toy price"></v-text-field>
        <v-text-field v-model="toy.type" :rules="nameRules" :counter="20" label="toy type"></v-text-field>
        <label for="inStock">in stock</label>
        <input type="checkbox" name="inStock" v-model="toy.inStock" />
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="green" @click="saveToy">Save</v-btn>

    </v-card-actions>
  </v-card>
</template>
<script>
import toyService from "../services/ToyService";
import moment from "moment";
export default {
  data() {
    return {
      toy: {
          name:'',
          price:null,
          type:'',
          inStock:false
      },
      nameRules: []
    };
  },
  computed: {},
  methods: {
    saveToy() {
      this.$store.dispatch({ type: "saveToy", toy: this.toy }).then(() => {
        this.$router.push("/");
      });
    }
  },
  created() {}
};
</script>
