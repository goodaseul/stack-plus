import Button from "@/components/button/Button";
import { Period, PERIOD_OPTIONS } from "@/types/chartPeriod";

type Props = {
  period: Period;
  onChange: (period: Period) => void;
};

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
