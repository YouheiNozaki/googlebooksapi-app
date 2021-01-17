<template>
  <header>{{ title }}</header>
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
