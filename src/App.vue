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
      <div v-if="!state.books || isLoading">
        <Loading />
      </div>
      <BookList :books="state.books" v-else />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import axios from "axios";
import Header from "@/components/Header.vue";
import Loading from "@/components/Loading.vue";
import BookList from "@/components/BookList.vue";
import { Book, Books } from "@/types/book";

const baseUrl = `https://www.googleapis.com/books/v1/volumes`;

export default defineComponent({
  setup() {
    const isLoading = ref(false);
    const state = reactive({
      books: [] as Book[],
      keyword: "",
      orderBy: "relevance",
    });

    const searchBook = async () => {
      isLoading.value = true;
      // useSearchを作って切り出した方が良い？
      const response = await axios.get<Books>(
        `${baseUrl}?q=${state.keyword}&orderBy=${state.orderBy}`
      );
      isLoading.value = false;
      return (state.books = response.data.items);
    };

    return { state, isLoading, searchBook };
  },
  components: {
    Header,
    BookList,
    Loading,
  },
});
</script>

<style lang="scss">
@import "../node_modules/bulma/css/bulma.css";
</style>
