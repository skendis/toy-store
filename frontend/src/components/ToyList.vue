<template>
  <section class="toy-container">
    <div v-for="toy in toys" :key="toy._id">
      <toy-preview @emit-delete="emitDelete" :toy="toy"></toy-preview>
    </div>
  </section>
</template>

<script>
import ToyPreview from "./ToyPreview";

export default {
  props: ["toys"],
  components: {
    ToyPreview
  },
  methods: {
    emitDelete(id) {
      this.$emit("emit-delete", id);
    }
  }
};
</script>
<style>
.toy-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 100px;
}
</style>