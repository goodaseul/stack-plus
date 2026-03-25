import Button from "@/components/button/Button";

type Period = "daily" | "monthly" | "yearly";

type Props = {
  period: Period;
  onChange: (period: Period) => void;
};

const PERIOD_OPTIONS: { value: Period; label: string }[] = [
  { value: "daily", label: "일간" },
  { value: "monthly", label: "월간" },
  { value: "yearly", label: "연간" },
];

export function RecordChartToggle({ period, onChange }: Props) {
  return (
    <div className="mb-4 flex items-center gap-4">
      {PERIOD_OPTIONS.map(({ value, label }) => (
        <Button
          key={value}
          onClick={() => onChange(value)}
          variant="text_underline"
          className={
            period === value
              ? "font-medium text-point after:w-full"
              : "text-gray-600 hover:text-point"
          }
        >
          {label}
        </Button>
      ))}
    </div>
  );
}
