// RecordChart.tsx
"use client";

import { useState } from "react";
import { Banner } from "../common/banner/Banner";
import { BannerTitle } from "../common/banner/BannerTitle";
import { useRecordChartData } from "./RecordLineChart/useRecordChartData";
import { RecordChartToggle } from "./RecordLineChart/RecordChartToggle";
import { RecordChartView } from "./RecordLineChart/RecordChartView";
import { useAllWordsQuery } from "@/hooks/queries/words/useAllWordsQuery";
import EmptyState from "@/components/empty-state/EmptyState";
import { Period, PERIOD_LABELS } from "@/constants/chartPeriod";

export function RecordChart() {
  const { data: words } = useAllWordsQuery();

  const { dailyData, monthlyData, yearlyData } = useRecordChartData(words);
  const [period, setPeriod] = useState<Period>("daily");

  const chartDataMap: Record<Period, typeof dailyData> = {
    daily: dailyData,
    monthly: monthlyData,
    yearly: yearlyData,
  };

  return (
    <Banner>
      <BannerTitle
        title={PERIOD_LABELS[period]}
        description="지금까지의 기록을 확인해보세요."
      />

      <RecordChartToggle period={period} onChange={setPeriod} />

      {words?.length === 0 ? (
        <EmptyState>아직 저장된 표현이 없습니다.</EmptyState>
      ) : (
        <RecordChartView data={chartDataMap[period] ?? []} />
      )}
    </Banner>
  );
}
