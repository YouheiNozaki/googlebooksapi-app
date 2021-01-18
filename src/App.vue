<template>
  <Header title="Book Searcher" />
  <main>
    <form>
      <input type="text" v-model="keyword" placeholder="search book" />
      <button @click="getBooks">検索</button>
    </form>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Header from "./components/Header.vue";
import { Books } from "./types/book";
const baseUrl = `https://www.googleapis.com/books/v1/volumes`;

export default defineComponent({
  name: "App",
  components: {
    Header,
  },
  setup() {
    const books = ref<Books>({ books: [] });
    const getBooks = async () => {};

    onMounted(getBooks);

    return {
      books,
      getBooks,
    };
  },
});
</script>

<style></style>
