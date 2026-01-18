import { FilterValue } from "@/constants/filter";

export const wordsQueryKeys = {
  all: ["words"] as const,
  list: (params: {
    filter: FilterValue;
    keyword: string;
    wordId: string | null;
    page?: number;
    pageSize: number;
  }) => [...wordsQueryKeys.all, params] as const,
};

export default wordsQueryKeys;
