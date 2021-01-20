<template>
  <Header title="Book Searcher" />
  <main>
    <form></form>
  </main>
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
    const Bookstate = reactive<Books>({ books: [] });
    const searchState = reactive({ keyword: "" });

    const searchBook = () => {
      return fetchBooks(`${baseUrl}?q=`);
    };

    return { Bookstate, searchState, searchBook };
  },
  components: {
    Header,
    BookList,
  },
});
</script>

<style></style>
