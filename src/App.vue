<template>
  <Header title="Book Searcher" />
  <Form />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Form,
  },
});
</script>

<style></style>
