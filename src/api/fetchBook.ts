export async function fetchBooks<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request, {
    method: "GET",
  });

  return response.json();
}
