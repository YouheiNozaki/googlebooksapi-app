<template>
  <div class="book-list">
    <BookItem v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<script lang="ts">
import BookItem from "./BookItem.vue";
import { defineComponent, PropType } from "vue";
import type { Books } from "@/types/book";

export default defineComponent({
  props: {
    books: Object as PropType<Books>,
  },

  components: {
    BookItem,
  },
});
</script>

<style></style>
