import { useQuery } from "@tanstack/react-query";
import { getWords } from "@/api/words";
import { FilterValue } from "@/constants/filters";

export function useWordsQuery(filter: FilterValue) {
  return useQuery({
    queryKey: ["words", filter],
    queryFn: () => getWords({ filter }),
  });
}
