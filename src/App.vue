<template>
  <Header title="Book Searcher" />
  <form @submit.prevent="searchBook">
    <input type="text" v-model="state.keyword" placeholder="検索" />
    <button type="submit">検索</button>
  </form>
  <div>
    <BookList :books="state.books" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import axios from "axios";
import Header from "@/components/Header.vue";
import BookList from "@/components/BookList.vue";
import { Book } from "@/types/book";
const baseUrl = `https://www.googleapis.com/books/v1/volumes`;

export default defineComponent({
  setup() {
    const state = reactive({ books: [] as Book[], keyword: "" });

    const searchBook = () => {
      axios.get(`${baseUrl}?q=${state.keyword}`).then((response) => {
        console.log(response.data.items);
        state.books = response.data.items;
      });
    };

    return { state, searchBook };
  },
  components: {
    Header,
    BookList,
  },
});
</script>

<style></style>
