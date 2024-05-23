<template>
  <div class="bg-red-400 p-4">
    <p class="text-center text-lg font-semibold">Time ToDo</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["ad"]);
let ad = props.ad;
</script>

<style scoped></style>
