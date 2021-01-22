<template>
  <Header title="Book Searcher" />
  <main>
    <form @submit.prevent="searchBook">
      <div class="is-flex container is-max-desktop is-align-items-center p-2">
        <input
          class="input"
          type="text"
          v-model="state.keyword"
          placeholder="本を検索"
        />

        <button type="submit" class="button is-primary">検索</button>

        <div class="select is-primary">
          <select name="order" v-model="state.orderBy" @change="searchBook">
            <option value="newest">新着順</option>
            <option value="relevance">関連順</option>
          </select>
        </div>
      </div>
    </form>

    <div>
      <BookList :books="state.books" />
    </div>
  </main>
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

<style lang="scss">
@import "../node_modules/bulma/css/bulma.css";
</style>
