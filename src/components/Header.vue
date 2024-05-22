<template>
  <p>messi : {{ ad }}</p>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["ad"]);
let ad = props.ad;
</script>

<style scoped></style>
