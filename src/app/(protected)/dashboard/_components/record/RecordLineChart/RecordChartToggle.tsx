import Button from "@/components/button/Button";

type Props = {
  period: "daily" | "monthly" | "yearly";
  onChange: (period: "daily" | "monthly" | "yearly") => void;
};

export function RecordChartToggle({ period, onChange }: Props) {
  return (
    <div className="mb-4 flex items-center gap-4 border-b border-gray-200">
      <Button
        onClick={() => onChange("daily")}
        variant="text_underline"
        className={
          period === "daily"
            ? "font-medium text-black after:w-full"
            : "text-gray-500 hover:text-black"
        }
      >
        일간
      </Button>

      <Button
        onClick={() => onChange("monthly")}
        variant="text_underline"
        className={
          period === "monthly"
            ? "font-medium text-black after:w-full"
            : "text-gray-500 hover:text-black"
        }
      >
        월간
      </Button>

      <Button
        onClick={() => onChange("yearly")}
        variant="text_underline"
        className={
          period === "yearly"
            ? "font-medium text-black after:w-full"
            : "text-gray-500 hover:text-black"
        }
      >
        연간
      </Button>
    </div>
  );
}
