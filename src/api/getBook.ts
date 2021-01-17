const baseUrl = `https://www.googleapis.com/books/v1/volumes`;

export const getBook = async (searchWord: string): Promise<any> => {
  const response = await fetch(`${baseUrl}?q=${searchWord}`);
  const data = response.json();

  return data;
};
