import { FilterValue } from "@/constants/filter";

export const wordsQueryKeys = {
  all: ["words"] as const,
  list: (params: {
    filter: FilterValue;
    keyword: string;
    page: number;
    pageSize: number;
    limit: number | undefined;
  }) => [...wordsQueryKeys.all, params] as const,
};

export default wordsQueryKeys;
