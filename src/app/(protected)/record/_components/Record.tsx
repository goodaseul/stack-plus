"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useWordsQuery } from "@/hooks/queries/words";
import { FILTERS, toFilterKey } from "@/constants/filter";
import { RecordHeader } from "./RecordHeader";
import EmptyState from "@/components/empty-state/EmptyState";
import { Pagination } from "./Pagination";
import Loading from "../../_components/loading/Loading";
import ErrorState from "@/components/error-state/ErrorState";
import RecordTopContent from "./RecordTopContent";
import ListActions from "@/components/list/list-actions/ListActions";
import { Word } from "@/types/word";
import { List } from "@/components/list/List";

const ITEMS_PER_PAGE = 20;

export function Record() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const activeFilterKey = toFilterKey(searchParams.get("filter"));

  const wordId = searchParams.get("wordId");
  const keyword = searchParams.get("keyword") ?? "";
  const currentFilter = FILTERS[activeFilterKey];
  const currentPage = Number(searchParams.get("page")) || 1;

  const { data, isLoading, isError } = useWordsQuery({
    filter: currentFilter,
    keyword,
    wordId,
    page: currentPage,
    pageSize: ITEMS_PER_PAGE,
  });

  const words = data?.words ?? [];
  const totalCount = data?.totalCount ?? 0;

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const emptyMessage =
    currentFilter === null ? "아직 표현이 없어요" : "조건에 맞는 표현이 없어요";

  return (
    <>
      <RecordHeader />

      <RecordTopContent
        searchParams={searchParams}
        pathname={pathname}
        keyword={keyword}
        activeFilterKey={activeFilterKey}
        totalCount={totalCount}
      />

      {isLoading && <Loading />}
      {isError && <ErrorState>표현를 불러올 수 없습니다.</ErrorState>}

      {!isLoading && words.length === 0 ? (
        <EmptyState>{emptyMessage}</EmptyState>
      ) : (
        <>
          <List
            words={words}
            renderActions={(word: Word) => <ListActions {...word} />}
          />
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
