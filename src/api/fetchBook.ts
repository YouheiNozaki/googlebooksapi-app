export async function fetchBooks<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);

  return response.json();
}
