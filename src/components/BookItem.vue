<template>
  <section class="card m-6">
    <a :href="book?.volumeInfo.infoLink">
      <template v-if="book.volumeInfo.imageLinks">
        <div class="card-image">
          <figure class="image">
            <img
              :src="book?.volumeInfo.imageLinks.thumbnail"
              :alt="book.volumeInfo.title"
            />
          </figure>
        </div>
      </template>
      <template v-else>
        <div class="card-image">
          <figure class="image">
            <img
              src="@/assets/img/noimage.png"
              :alt="book.volumeInfo.title"
              width="128"
            />
          </figure>
        </div>
      </template>
      <div class="card-content">
        <h4 class="title">{{ book?.volumeInfo.title }}</h4>
        <span v-for="(author, index) in book.volumeInfo.authors" :key="index">
          <em> {{ author }} </em>
        </span>
        <p>{{ book.volumeInfo.publishedDate }}</p>
        <p class="card-description">{{ book.volumeInfo.description }}</p>
      </div>
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
<style scoped>
.card-description {
  margin-top: 2rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
