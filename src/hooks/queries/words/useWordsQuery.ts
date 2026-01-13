import { useQuery } from "@tanstack/react-query";
import { getWords } from "@/api/words";
import { FilterValue } from "@/constants/filter";
import wordsQueryKeys from "./querykey";

export function useWordsQuery(filter?: FilterValue) {
  return useQuery({
    queryKey: [wordsQueryKeys, filter ?? "ALL"],
    queryFn: () => getWords({ filter }),
    initialData: [],
  });
}
