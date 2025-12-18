"use client";
import { FilterCount } from "./FilterCount";
import { List } from "../../_components/list/List";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useWordsQuery } from "@/hooks/queries/words";
import { FILTER_MAP, FilterValue } from "@/constants/filters";
import { RecordHeader } from "./RecordHeader";
import { Filter } from "../../_components/filter/Filter";
import EmptyState from "@/components/empty-state/EmptyState";

export function Record() {
  const searchParams = useSearchParams();
  const rawFilter = searchParams.get("filter");

  const filter: FilterValue =
    rawFilter === "hasMemo" ||
    rawFilter === "noMemo" ||
    rawFilter === "bookmarked"
      ? rawFilter
      : null;

  // 2. 데이터 요청
  const { data: words = [] } = useWordsQuery(filter);

  // 3. URL 변경 로직
  const router = useRouter();
  const pathname = usePathname();

  const handleFilterClick = (value: FilterValue) => {
    if (!value) router.push(pathname);
    else router.push(`${pathname}?filter=${value}`);
  };

  return (
    <>
      <RecordHeader />
      <div className="mt-6 space-y-3">
        <FilterCount filter={filter} total={words.length} />

        <Filter
          filterMenus={Object.keys(FILTER_MAP)}
          activeFilter={filter}
          onClick={handleFilterClick}
        />
      </div>
      {words.length === 0 ? (
        <EmptyState>
          {filter === null ? "아직 단어가 없어요" : "조건에 맞는 단어가 없어요"}
        </EmptyState>
      ) : (
        <List words={words ?? []} className="h-180 border-gray-200  bg-white" />
      )}
    </>
  );
}
