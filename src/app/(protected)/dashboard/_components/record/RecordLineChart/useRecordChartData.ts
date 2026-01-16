// useRecordChartData.ts
import { WordsApi } from "@/api/types/words";
import { useMemo } from "react";

export function useRecordChartData(words?: WordsApi[]) {
  const dailyData = useMemo(() => {
    if (!words) return [];

    const map = new Map<string, number>();

    words.forEach((item) => {
      const dateKey = item.created_at.slice(0, 10);
      map.set(dateKey, (map.get(dateKey) ?? 0) + 1);
    });

    return Array.from(map.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, count]) => ({ label: date, count }));
  }, [words]);

  const monthlyData = useMemo(() => {
    if (!words) return [];

    const map = new Map<string, number>();

    words.forEach((item) => {
      const dateKey = item.created_at.slice(0, 7);
      map.set(dateKey, (map.get(dateKey) ?? 0) + 1);
    });

    return Array.from(map.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, count]) => ({ label: date, count }));
  }, [words]);

  const yearlyData = useMemo(() => {
    if (!words) return [];

    const map = new Map<string, number>();

    words.forEach((item) => {
      const dateKey = item.created_at.slice(0, 4);
      map.set(dateKey, (map.get(dateKey) ?? 0) + 1);
    });

    return Array.from(map.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, count]) => ({ label: date, count }));
  }, [words]);

  return { dailyData, monthlyData, yearlyData };
}
