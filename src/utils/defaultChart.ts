import { WordsRequest } from "@/api/types/words";

export const DATE_SLICE = {
  daily: 10,
  monthly: 7,
  yearly: 4,
} as const;

export function defaultChart(words: WordsRequest[] | undefined, num: number) {
  if (!words) return [];
  const map = new Map<string, number>();

  words.forEach((item) => {
    const dateKey = item.created_at.slice(0, num);
    map.set(dateKey, (map.get(dateKey) ?? 0) + 1);
  });

  return Array.from(map.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, count]) => ({ label: date, count }));
}
