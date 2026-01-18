import { useQuery } from "@tanstack/react-query";
import { getWords } from "@/api/words";
import { FILTERS, FilterValue } from "@/constants/filter";
import wordsQueryKeys from "./querykey";
type UseWordsQueryParams = {
  filter?: FilterValue;
  keyword?: string;
  wordId?: string | null;
  page?: number;
  pageSize?: number;
};
export function useWordsQuery({
  filter = FILTERS.ALL,
  keyword = "",
  wordId = "",
  page = 1,
  pageSize = 20,
}: UseWordsQueryParams = {}) {
  return useQuery({
    queryKey: wordsQueryKeys.list({
      filter,
      keyword,
      wordId,
      page,
      pageSize,
    }),
    queryFn: () =>
      getWords({
        filter,
        keyword,
        wordId,
        page,
        pageSize,
        range: {
          from: (page - 1) * pageSize,
          to: page * pageSize - 1,
        },
      }),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}
