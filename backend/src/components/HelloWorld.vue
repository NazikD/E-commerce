<script setup>
import { ref, computed } from "vue";
import store from "../store";

const test = computed(()=> store.state.test);

</script>

<template>
  {{ test }}

    <p class="bg-purple-500 text-3xl font-bold underline">Hello world!</p>

</template>

<style scoped>
</style>
