<template>
  <Header title="Book Searcher" />
  <form @submit.prevent="searchBook">
    <input type="text" v-model="state.keyword" placeholder="検索" />
    <button type="submit">検索</button>

    <select name="order" v-model="state.orderBy" @change="searchBook">
      <option disabled value="">選択してください</option>
      <option value="newest">新着順</option>
      <option value="relevance">関連順</option>
    </select>
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
    const state = reactive({
      books: [] as Book[],
      keyword: "",
      orderBy: "relevance",
    });

    const searchBook = () => {
      // TODO:axiosのresponse.dataに型をつける
      axios
        .get(`${baseUrl}?q=${state.keyword}&orderBy=${state.orderBy}`)
        .then((response) => {
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
