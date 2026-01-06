import { FILTER_LABELS, FilterKey } from "@/constants/filter";

type FilterCountItem = {
  total: number;
  filterKey: FilterKey;
};

export function FilterCount({ total, filterKey }: FilterCountItem) {
  return (
    <p className="text-sm text-gray-500">
      {FILTER_LABELS[filterKey]} {total}개
    </p>
  );
}
