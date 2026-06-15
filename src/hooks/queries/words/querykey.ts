import { FilterValue } from "@/constants/filter";

export const wordsQueryKeys = {
  all: ["words"] as const,
  lists: () => [...wordsQueryKeys.all, "list"] as const,
  list: (params: {
    filter: FilterValue;
    keyword: string;
    page: number;
    pageSize: number;
    limit: number | undefined;
  }) => [...wordsQueryKeys.lists(), params] as const,
};

export default wordsQueryKeys;
