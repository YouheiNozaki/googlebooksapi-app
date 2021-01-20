<template>
  <Header title="Book Searcher" />

  <input type="text" @input="books.keyword" placeholder="検索" />
  <button type="submit" @click="searchBook">検索</button>

  <div>
    <BookList :books="books" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Header from "@/components/Header.vue";
import BookList from "@/components/BookList.vue";
import { Books } from "@/types/book";
import { fetchBooks } from "./api/fetchBook";
const baseUrl = `https://www.googleapis.com/books/v1/volumes`;

export default defineComponent({
  setup() {
    const books = reactive({ books: [], keyword: "" });

    const searchBook = () => {
      fetchBooks(`${baseUrl}?q=${books.keyword}`);
    };

    return { books, searchBook };
  },
  components: {
    Header,
    BookList,
  },
});
</script>

<style></style>
