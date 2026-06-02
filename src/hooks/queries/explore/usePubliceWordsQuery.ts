import { getPublicWords } from "@/api/public";
import { useInfiniteQuery } from "@tanstack/react-query";
import publicWordsQueryKeys from "./querykey";

export function usePublicWordsQuery() {
  return useInfiniteQuery({
    queryKey: publicWordsQueryKeys.all,
    queryFn: getPublicWords,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
}
