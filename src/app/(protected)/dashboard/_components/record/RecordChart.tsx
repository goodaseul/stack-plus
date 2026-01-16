// RecordChart.tsx
"use client";

import { useState } from "react";
import { Banner } from "../common/banner/Banner";
import { BannerTitle } from "../common/banner/BannerTitle";
import { useRecordChartData } from "./RecordLineChart/useRecordChartData";
import { RecordChartToggle } from "./RecordLineChart/RecordChartToggle";
import { RecordChartView } from "./RecordLineChart/RecordChartView";
import { useAllWordsQuery } from "@/hooks/queries/words/useAllWordsQuert";

export function RecordChart() {
  const { data: words } = useAllWordsQuery();

  const { dailyData, monthlyData, yearlyData } = useRecordChartData(words);
  const [period, setPeriod] = useState<"daily" | "monthly" | "yearly">("daily");

  const chartData =
    period === "daily"
      ? dailyData
      : period === "monthly"
      ? monthlyData
      : yearlyData;

  return (
    <Banner>
      <BannerTitle
        title={
          period === "daily"
            ? "일일 기록"
            : period === "monthly"
            ? "월간 기록"
            : "연간 기록"
        }
        description="지금까지의 기록을 확인해보세요"
      />

      <RecordChartToggle period={period} onChange={setPeriod} />

      <RecordChartView data={chartData} />
    </Banner>
  );
}
