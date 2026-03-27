import { useQuery } from "@tanstack/react-query";
import { getWords } from "@/api/words";
import wordsQueryKeys from "./querykey";
import { WordsQueryRequest } from "@/api/types/words";
import { FILTERS } from "@/constants/filter";
export function useWordsQuery({
  filter = FILTERS.ALL,
  keyword = "",
  wordId = null,
  page = 1,
  pageSize = 20,
}: WordsQueryRequest = {}) {
  return useQuery({
    queryKey: wordsQueryKeys.list({ filter, keyword, wordId, page, pageSize }),
    queryFn: () => getWords({ filter, keyword, wordId, page, pageSize }),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}
