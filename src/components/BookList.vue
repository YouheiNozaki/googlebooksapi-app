<template>
  <div class="book-list">
    <!-- メモ:v-forの型を解決する方法がわからない -->
    <BookItem v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<script lang="ts">
import BookItem from "./BookItem.vue";
import { defineComponent, PropType } from "vue";
// import type { Books } from "@/types/book";

export default defineComponent({
  props: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    books: Object as any,
    // 本当は以下のように型を付けたい
    // books: Object as PropType<Books>,
  },

  components: {
    BookItem,
  },
});
</script>

<style></style>
