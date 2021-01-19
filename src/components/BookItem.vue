<template>
  <section></section>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import type { Book } from "@/types/book";

export const BookItem = defineComponent({
  props: {
    book: {
      type: Object as PropType<Book>,
    },
  },
  setup(props) {
    const volumeInfo = computed(() => {
      return props.book?.volumeInfo;
    });

    return { volumeInfo };
  },
});
</script>
