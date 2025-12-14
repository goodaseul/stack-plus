"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Banner } from "../common/banner/Banner";
import { BannerTitle } from "../common/banner/BannerTitle";
import Button from "@/components/button/Button";

const dailyData = [
  { label: "09-01", count: 5 },
  { label: "09-02", count: 2 },
  { label: "09-03", count: 7 },
  { label: "09-04", count: 4 },
];

const monthlyData = [
  { label: "6월", count: 1000 },
  { label: "7월", count: 40 },
  { label: "8월", count: 62 },
];

export function RecordLineChart() {
  const [period, setPeriod] = useState<"daily" | "monthly">("daily");

  const data = period === "daily" ? dailyData : monthlyData;

  return (
    <Banner className="h-auto border border-green/30 hover:bg-cream/15">
      <BannerTitle
        title={period === "daily" ? "일일 기록" : "월간 기록"}
        description={
          <>
            지금까지의<span className="font-semibold">기록</span>을 확인해보세요
          </>
        }
      />

      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold"></h3>

        <div className="flex gap-2">
          {/* Todo- active 시 */}
          <Button onClick={() => setPeriod("daily")}>일간</Button>
          <Button onClick={() => setPeriod("monthly")}>월간</Button>
        </div>
      </div>

      {/* 차트 */}
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart key={period} data={data}>
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#b7c276"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Banner>
  );
}
