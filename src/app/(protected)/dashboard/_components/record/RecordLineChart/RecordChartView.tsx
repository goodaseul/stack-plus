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
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fontSize: 12, fill: "#6B7280" }}
            tickMargin={20}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#6B7280" }}
            tickMargin={20}
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
  );
}
