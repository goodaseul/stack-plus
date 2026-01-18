import { useQuery } from "@tanstack/react-query";
import wordsQueryKeys from "./querykey";
import { getAllWords } from "@/api/words";

export function useAllWordsQuery() {
  return useQuery({
    queryKey: [...wordsQueryKeys.all, "all"],
    queryFn: getAllWords,
    staleTime: 1000 * 60 * 5,
  });
}
