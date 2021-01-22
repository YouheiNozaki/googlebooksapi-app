<template>
  <section>
    <a :href="book?.volumeInfo.infoLink">
      <template v-if="book.volumeInfo.imageLinks">
        <img
          :src="book?.volumeInfo.imageLinks.thumbnail"
          :alt="book.volumeInfo.title"
        />
      </template>
      <template v-else>
        <img
          src="@/assets/img/noimage.png"
          :alt="book.volumeInfo.title"
          width="128"
        />
      </template>
      <h4>{{ book?.volumeInfo.title }}</h4>
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
