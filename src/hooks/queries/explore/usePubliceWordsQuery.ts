import { getPublicWords } from "@/api/public";
import { useQuery } from "@tanstack/react-query";
import publicWordsQueryKeys from "./querykey";

export function usePublicWordsQuery() {
  return useQuery({
    queryKey: publicWordsQueryKeys.all,
    queryFn: getPublicWords,
  });
}
