export const FILTERS = {
  ALL: null,
  HAS_MEMO: "hasMemo",
  NO_MEMO: "noMemo",
  BOOKMARKED: "bookmarked",
} as const;

export const FILTER_LABELS: Record<keyof typeof FILTERS, string> = {
  ALL: "전체",
  HAS_MEMO: "메모 있음",
  NO_MEMO: "메모 없음",
  BOOKMARKED: "북마크",
};

export type FilterKey = keyof typeof FILTERS;
export type FilterValue = (typeof FILTERS)[FilterKey];

export const parseFilter = (
  queryValue: string | null
): { key: FilterKey; value: FilterValue } => {
  if (!queryValue) return { key: "ALL", value: null };

  const entry = (Object.entries(FILTERS) as [FilterKey, FilterValue][]).find(
    ([, value]) => value === queryValue
  );
  return entry
    ? { key: entry[0], value: entry[1] }
    : { key: "ALL", value: null };
};

export const getFilterValue = (key: FilterKey): FilterValue => {
  return FILTERS[key];
};
