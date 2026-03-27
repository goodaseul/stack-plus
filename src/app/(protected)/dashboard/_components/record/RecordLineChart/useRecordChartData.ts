import { WordsRequest } from "@/api/types/words";
import { DATE_SLICE, defaultChart } from "@/utils/defaultChart";
import { useMemo } from "react";

export function useRecordChartData(words?: WordsRequest[]) {
  const dailyData = useMemo(
    () => defaultChart(words, DATE_SLICE.daily),
    [words],
  );
  const monthlyData = useMemo(
    () => defaultChart(words, DATE_SLICE.monthly),
    [words],
  );
  const yearlyData = useMemo(
    () => defaultChart(words, DATE_SLICE.yearly),
    [words],
  );

  return { dailyData, monthlyData, yearlyData };
}
