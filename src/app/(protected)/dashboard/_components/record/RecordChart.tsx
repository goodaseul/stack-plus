"use client";

import { useState } from "react";
import { Banner } from "../common/banner/Banner";
import { BannerTitle } from "../common/banner/BannerTitle";
import { useWordsQuery } from "@/hooks/queries/words";
import { useRecordChartData } from "./RecordLineChart/useRecordChartData";
import { RecordChartToggle } from "./RecordLineChart/RecordChartToggle";
import { RecordChartView } from "./RecordLineChart/RecordChartView";

export function RecordChart() {
  const { data } = useWordsQuery();
  const { dailyData, monthlyData, yearlyData } = useRecordChartData(data);
  const [period, setPeriod] = useState<"daily" | "monthly" | "yearly">("daily");

  const chartData =
    period === "daily"
      ? dailyData
      : period === "monthly"
      ? monthlyData
      : yearlyData;

  return (
    <Banner>
      {/* 제목 */}
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

      {/* 토글 */}
      <RecordChartToggle period={period} onChange={setPeriod} />

      {/* 차트 */}
      <RecordChartView data={chartData} />
    </Banner>
  );
}
