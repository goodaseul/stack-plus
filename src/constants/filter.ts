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

export const toFilterKey = (query: string | null): FilterKey => {
  if (!query) return "ALL";

  const found = (Object.keys(FILTERS) as FilterKey[]).find(
    (key) => FILTERS[key] === query,
  );

  return found ?? "ALL";
};
