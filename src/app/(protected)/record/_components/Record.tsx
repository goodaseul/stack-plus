"use client";
import { FilterCount } from "./FilterCount";
import { List } from "../../_components/list/List";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useWordsQuery } from "@/hooks/queries/words";
import {
  FILTER_LABELS,
  FilterKey,
  FILTERS,
  toFilterKey,
} from "@/constants/filter";
import { RecordHeader } from "./RecordHeader";
import { Filter } from "../../_components/filter/Filter";
import EmptyState from "@/components/empty-state/EmptyState";
import SearchInput from "./SearchInput";
import { Pagination } from "./Pagination";
import Loading from "../../_components/loading/Loading";
import ErrorState from "@/components/error-state/ErrorState";

const ITEMS_PER_PAGE = 20;

export function Record() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const wordId = searchParams.get("wordId");
  const keyword = searchParams.get("keyword") ?? "";
  const currentPage = Number(searchParams.get("page")) || 1;

  const activeFilterKey = toFilterKey(searchParams.get("filter"));
  const currentFilter = FILTERS[activeFilterKey];

  const { data, isLoading, isError } = useWordsQuery({
    filter: currentFilter,
    keyword,
    wordId,
    page: currentPage,
    pageSize: ITEMS_PER_PAGE,
  });

  const words = data?.words ?? [];
  const totalCount = data?.totalCount ?? 0;

  const handleFilterClick = (filterKey: FilterKey) => {
    const value = FILTERS[filterKey];
    const params = new URLSearchParams(searchParams);

    if (value === null) params.delete("filter");
    else params.set("filter", value);

    params.delete("page");

    router.push(`${pathname}?${params.toString()}`);
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const emptyMessage =
    currentFilter === null ? "아직 표현가 없어요" : "조건에 맞는 표현가 없어요";

  return (
    <>
      <RecordHeader />
      <div className="mt-6 space-y-3">
        <SearchInput keyword={keyword} />
        <FilterCount filterKey={activeFilterKey} total={totalCount} />

        <Filter
          filterMenus={FILTER_LABELS}
          activeFilter={activeFilterKey}
          onClick={handleFilterClick}
        />
      </div>

      {isLoading && <Loading />}
      {isError && <ErrorState>표현를 불러올 수 없습니다.</ErrorState>}

      {words.length === 0 ? (
        <EmptyState>{emptyMessage}</EmptyState>
      ) : (
        <>
          <List words={words} />
          <Pagination
            currentPage={currentPage}
            totalItems={totalCount}
            itemsPerPage={ITEMS_PER_PAGE}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
}
