import { toRefs } from "vue";

export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publishedDate: string;
    description: string;
    imageLinks: {
      thumbnail: string;
    };
  };
}

export interface Books {
  books: Book[];
}

export const useBook = () => {
  const bookState = toRefs<Books>({ books: [] });
};
