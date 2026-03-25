export type Period = "daily" | "monthly" | "yearly";

export const PERIOD_LABELS: Record<Period, string> = {
  daily: "일일 기록",
  monthly: "월간 기록",
  yearly: "연간 기록",
};

export const PERIOD_OPTIONS: { value: Period; label: string }[] = [
  { value: "daily", label: "일간" },
  { value: "monthly", label: "월간" },
  { value: "yearly", label: "연간" },
];
