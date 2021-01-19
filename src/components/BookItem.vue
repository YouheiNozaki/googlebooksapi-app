<template>
  <section>
    <div>{{ book.volumeInfo.title }}</div>
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
