import { useWordsQuery } from "./useWordsQuery";
import { FILTERS } from "@/constants/filter";

export function useWordStats() {
  const { data: all } = useWordsQuery({
    filter: FILTERS.ALL,
    page: 1,
    pageSize: 1,
  });

  const { data: memo } = useWordsQuery({
    filter: FILTERS.HAS_MEMO,
    page: 1,
    pageSize: 1,
  });

  const { data: bookmark } = useWordsQuery({
    filter: FILTERS.BOOKMARKED,
    page: 1,
    pageSize: 1,
  });

  return {
    total: all?.totalCount ?? 0,
    memo: memo?.totalCount ?? 0,
    bookmark: bookmark?.totalCount ?? 0,
  };
}
