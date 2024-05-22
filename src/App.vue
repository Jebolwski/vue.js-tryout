<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <Header ad="luke thomas" />
  <RouterView />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      target: "ronaldo",
    };
  },
};
</script>

<style scoped></style>
