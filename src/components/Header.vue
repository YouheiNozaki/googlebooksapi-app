<template>
  <header class="container m-6">
    <h1 class="title has-text-centered">
      {{ title }}
    </h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  props: {
    title: String,
  },
});
</script>

<style scoped></style>
