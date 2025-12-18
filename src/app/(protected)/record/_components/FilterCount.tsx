import { FilterValue } from "@/constants/filters";

type FilterCountItem = {
  total: number;
  filter: FilterValue;
};

export function FilterCount({ total, filter }: FilterCountItem) {
  return (
    <p className="text-sm text-gray-500">
      {filter === null && `전체 ${total}개`}
      {filter === "hasMemo" && `메모 있음 ${total}개`}
      {filter === "noMemo" && `메모 없음 ${total}개`}
      {filter === "bookmarked" && `북마크 ${total}개`}
    </p>
  );
}
