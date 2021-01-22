<template>
  <section>
    <a :href="book?.volumeInfo.infoLink">
      <h2>{{ book?.volumeInfo.title }}</h2>
      <img :src="book?.volumeInfo.imageLinks.thumbnail" />
      <p>{{ book.volumeInfo.publishedDate }}</p>
      <span v-for="(author, index) in book.volumeInfo.authors" :key="index">
        <em> {{ author }} </em>
      </span>
      <p>{{ book.volumeInfo.description }}</p>
    </a>
  </section>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import type { Book } from "@/types/book";

export default defineComponent({
  props: {
    book: {
      type: Object as PropType<Book>,
      required: true,
    },
  },
});
</script>
