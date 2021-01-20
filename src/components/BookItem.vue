<template>
  <section>
    <a :href="book?.volumeInfo.previewLink">
      <div>{{ book?.volumeInfo.title }}</div>
      <img :src="book?.volumeInfo.imageLinks.thumbnail" />
    </a>
  </section>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import type { Book } from "@/types/book";

export default defineComponent({
  props: {
    book: Object as PropType<Book>,
  },
});
</script>
