<template>
  <div class="columns is-multiline is-centered" target="_blank">
    <BookItem
      v-for="book in books"
      :key="book.id"
      :book="book"
      class="column is-one-quarter"
    />
  </div>
</template>

<script lang="ts">
import BookItem from "./BookItem.vue";
import { defineComponent, PropType } from "vue";
import type { Book } from "@/types/book";

export default defineComponent({
  props: {
    books: {
      type: Array as PropType<Book[]>,
      required: true,
    },
  },

  components: {
    BookItem,
  },
});
</script>

<style></style>
