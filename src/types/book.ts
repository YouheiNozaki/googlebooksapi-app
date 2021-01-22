export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    infoLink: string;
    publishedDate: string;
    description: string;
    imageLinks: {
      thumbnail: string;
    };
  };
}
