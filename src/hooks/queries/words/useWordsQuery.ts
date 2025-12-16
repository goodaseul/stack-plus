import { useQuery } from "@tanstack/react-query";
import wordsQueryKeys from "./querykey";
import { getWords } from "@/api/words";

export function useWordsQuery() {
  return useQuery({
    queryKey: wordsQueryKeys.list(),
    queryFn: getWords,
  });
}
