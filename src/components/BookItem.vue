<template>
  <section>
    <a :href="volumeInfo.previewLink">
      <div>{{ volumeInfo.title }}</div>
      <img :src="volumeInfo.imageLinks.thumbnail" />
    </a>
  </section>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import type { Book } from "@/types/book";

export default defineComponent({
  props: {
    book: Object as PropType<Book>,
  },
  setup(props) {
    const volumeInfo = computed(() => {
      return props.book?.volumeInfo;
    });

    return { volumeInfo };
  },
});
</script>
