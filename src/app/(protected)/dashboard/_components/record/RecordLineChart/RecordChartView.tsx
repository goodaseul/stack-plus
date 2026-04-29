import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ChartProps = {
  data: { label: string; count: number }[];
};

export function RecordChartView({ data }: ChartProps) {
  return (
    <div className="h-56 w-full [--chart-text:#6B7280] [--chart-line:#1a1a1a] dark:[--chart-text:#9CA3AF] dark:[--chart-line:#9CA3AF]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fontSize: 12, fill: "var(--chart-text)" }}
            tickMargin={20}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "var(--chart-text)" }}
            tickMargin={20}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              fontSize: "12px",
              borderRadius: "8px",
              backgroundColor: "var(--tooltip-bg, #fff)",
              borderColor: "#E5E7EB",
              color: "#1a1a1a",
            }}
            itemStyle={{ color: "#1a1a1a" }}
          />
          <Line
            type="monotone"
            dataKey="count"
            stroke="var(--chart-line)"
            strokeWidth={1.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
