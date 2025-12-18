export const FILTER_MAP = {
  전체: null,
  "메모 있음": "hasMemo",
  "메모 없음": "noMemo",
  북마크: "bookmarked",
} as const;

export type FilterValue = "hasMemo" | "noMemo" | "bookmarked" | null;
