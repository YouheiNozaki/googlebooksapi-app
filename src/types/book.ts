export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    previewLink: string;
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
