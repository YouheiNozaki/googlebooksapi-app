<template>
  <Header title="Book Searcher" />
  <main>
    <form>
      <input type="text" v-model="keyword" placeholder="search book" />
      <button @click="getBooks">検索</button>
    </form>
    <div v-for="book in books" :key="book.id">
      {{ book.title }}
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Header from "@/components/Header.vue";
import BookList from "@/components/BookList.vue";
import { Books } from "@/types/book";
const baseUrl = `https://www.googleapis.com/books/v1/volumes`;

export default defineComponent({
  setup() {
    const state = reactive<Books>({ books: [] });

    const searchBook = () => {};

    return { state, searchBook };
  },
  components: {
    Header,
    BookList,
  },
});
</script>

<style></style>
