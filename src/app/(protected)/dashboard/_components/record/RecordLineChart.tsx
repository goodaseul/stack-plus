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
    <Banner>
      {/* 제목 */}
      <BannerTitle
        title={period === "daily" ? "일일 기록" : "월간 기록"}
        description="지금까지의 기록을 확인해보세요"
      />

      {/* 토글 */}
      <div className="mb-4 flex items-center gap-4 border-b border-gray-200">
        <button
          onClick={() => setPeriod("daily")}
          className={`
      relative pb-2 text-sm
      ${
        period === "daily"
          ? "font-medium text-black after:absolute after:left-0 after:bottom-[-1px] after:h-[2px] after:w-full after:bg-gray-900"
          : "text-gray-500 hover:text-black"
      }
    `}
        >
          일간
        </button>

        <button
          onClick={() => setPeriod("monthly")}
          className={`
      relative pb-2 text-sm
      ${
        period === "monthly"
          ? "font-medium text-black after:absolute after:left-0 after:bottom-[-1px] after:h-[2px] after:w-full after:bg-gray-900"
          : "text-gray-500 hover:text-black"
      }
    `}
        >
          월간
        </button>
      </div>

      {/* 차트 */}
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart key={period} data={data}>
            <XAxis
              dataKey="label"
              tick={{ fontSize: 12, fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                fontSize: "12px",
                borderRadius: "8px",
                borderColor: "#E5E7EB",
              }}
            />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#374151"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Banner>
  );
}
