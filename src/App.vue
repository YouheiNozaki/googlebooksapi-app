<template>
  <Header title="Book Searcher" />
  <form @submit.prevent="searchBook">
    <input type="text" @input="search.keyword" placeholder="検索" />
    <button type="submit">検索</button>
  </form>
  <div>
    <BookList :books="books" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import axios from "axios";
import Header from "@/components/Header.vue";
import BookList from "@/components/BookList.vue";
import { Books } from "@/types/book";
const baseUrl = `https://www.googleapis.com/books/v1/volumes`;

export default defineComponent({
  setup() {
    const books = reactive<Books>({ books: [] });
    const search = reactive({ keyword: "" });

    const searchBook = async () => {
      axios.get(`${baseUrl}?q=${search.keyword}`).then((response) => {
        console.log(response.data.items);
        books.books = response.data.items;
      });
    };

    return { books, search, searchBook };
  },
  components: {
    Header,
    BookList,
  },
});
</script>

<style></style>
