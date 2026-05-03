"use client";

import { List } from "../../_components/list/List";
import { Title } from "./common/Title";
import { useWordsQuery } from "@/hooks/queries/words";
import { useMobileSize } from "@/hooks/useMobileSize";
import AddWordButton from "../../_components/add-word-button/AddWordButton";
import EmptyState from "@/components/empty-state/EmptyState";
import Loading from "../../_components/loading/Loading";
import ErrorState from "@/components/error-state/ErrorState";

export function RecentWords() {
  const isMobile = useMobileSize();
  const { data, isLoading, isError } = useWordsQuery({
    limit: isMobile ? 8 : 6,
  });

  const words = data?.words ?? [];
  return (
    <div className="h-full">
      <div className="mb-5 flex items-center justify-between ">
        <Title className="text-base text-black dark:text-white">
          최근 등록한 표현
        </Title>
        <AddWordButton>추가 </AddWordButton>
      </div>

      {isLoading && <Loading />}
      {isError && <ErrorState>표현를 불러올 수 없습니다.</ErrorState>}
      {!isLoading && words.length === 0 ? (
        <EmptyState>아직 저장된 표현이 없습니다.</EmptyState>
      ) : (
        <List words={words} />
      )}
    </div>
  );
}
