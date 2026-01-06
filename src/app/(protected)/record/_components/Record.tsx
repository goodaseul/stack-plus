"use client";
import { FilterCount } from "./FilterCount";
import { List } from "../../_components/list/List";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useWordsQuery } from "@/hooks/queries/words";
import {
  FILTER_LABELS,
  FilterKey,
  getFilterValue,
  parseFilter,
} from "@/constants/filter";
import { RecordHeader } from "./RecordHeader";
import { Filter } from "../../_components/filter/Filter";
import EmptyState from "@/components/empty-state/EmptyState";

export function Record() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const { key: activeFilterKey, value: currentFilter } = parseFilter(
    searchParams.get("filter")
  );

  const { data: words = [] } = useWordsQuery(currentFilter);

  const handleFilterClick = (filterKey: FilterKey) => {
    const value = getFilterValue(filterKey);
    router.push(value === null ? pathname : `${pathname}?filter=${value}`);
  };

  const emptyMessage =
    currentFilter === null ? "아직 단어가 없어요" : "조건에 맞는 단어가 없어요";
  return (
    <>
      <RecordHeader />
      <div className="mt-6 space-y-3">
        <FilterCount filterKey={activeFilterKey} total={words.length} />

        <Filter
          filterMenus={FILTER_LABELS}
          activeFilter={activeFilterKey}
          onClick={handleFilterClick}
        />
      </div>
      {words.length === 0 ? (
        <EmptyState>{emptyMessage}</EmptyState>
      ) : (
        <List words={words} className="h-180 border-gray-200  bg-white" />
      )}
    </>
  );
}
