type FetcherOptions = RequestInit & {
  params?: Record<string, string | number>;
};

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export async function fetcher<T>(
  url: string,
  options: FetcherOptions = {}
): Promise<T> {
  const { params, headers, ...rest } = options;

  const queryString = params
    ? "?" +
      new URLSearchParams(
        Object.entries(params).map(([k, v]) => [k, String(v)])
      ).toString()
    : "";

  const res = await fetch(`${BASE_URL}${url}${queryString}`, {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...rest,
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(errorBody || "Network error");
  }

  return res.json();
}
