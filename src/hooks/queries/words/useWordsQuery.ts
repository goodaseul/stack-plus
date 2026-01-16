import { useQuery } from "@tanstack/react-query";
import { getWords } from "@/api/words";
import { FilterValue } from "@/constants/filter";
import wordsQueryKeys from "./querykey";

type UseWordsQueryParams = {
  filter?: FilterValue;
  keyword?: string;
  wordId?: string | null;
  page?: number;
  pageSize?: number;
};
export function useWordsQuery({
  filter,
  keyword,
  wordId,
  page = 1,
  pageSize = 20,
}: UseWordsQueryParams = {}) {
  return useQuery({
    queryKey: wordsQueryKeys.list({
      filter: filter ?? "ALL",
      keyword: keyword ?? "",
      wordId: wordId ?? "",
      page: page.toString(),
    }),
    queryFn: () =>
      getWords({
        filter,
        keyword,
        wordId,
        range: { from: 0, to: 10000 },
        page,
        pageSize,
      }),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}
