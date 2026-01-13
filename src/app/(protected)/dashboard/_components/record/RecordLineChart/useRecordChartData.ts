// hooks/useRecordChartData.ts
import { useMemo } from "react";

export function useRecordChartData(data?: WordType[]) {
  const dailyData = useMemo(() => {
    if (!data) return [];

    const map = new Map<string, number>();

    data.forEach((item) => {
      const [yyyy, mm, dd] = item.created_at.slice(0, 10).split("-");
      const label = `${mm}-${dd}`;

      map.set(label, (map.get(label) ?? 0) + 1);
    });

    return Array.from(map.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([label, count]) => ({ label, count }));
  }, [data]);

  const monthlyData = useMemo(() => {
    if (!data) return [];

    const map = new Map<string, number>();

    data.forEach((item) => {
      const [yyyy, mm] = item.created_at.slice(0, 7).split("-");
      const label = `${yyyy}-${mm}`; // 2026-01

      map.set(label, (map.get(label) ?? 0) + 1);
    });

    return Array.from(map.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([label, count]) => ({ label, count }));
  }, [data]);

  const yearlyData = useMemo(() => {
    if (!data) return [];

    const map = new Map<string, number>();

    data.forEach((item) => {
      const [yyyy] = item.created_at.slice(0, 4).split("-");
      const label = `${yyyy}년`;

      map.set(label, (map.get(label) ?? 0) + 1);
    });

    return Array.from(map.entries())
      .sort(([a], [b]) => parseInt(a) - parseInt(b))
      .map(([label, count]) => ({ label, count }));
  }, [data]);

  return { dailyData, monthlyData, yearlyData };
}
