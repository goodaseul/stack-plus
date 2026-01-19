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
  const { data, isLoading, isError } = useWordsQuery();
  const isMobile = useMobileSize();

  const words = data?.words.slice(0, isMobile ? 2 : 4) ?? [];

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <Title className="text-base">최근 등록한 단어</Title>
        <AddWordButton>추가 </AddWordButton>
      </div>

      {isLoading && <Loading />}
      {isError && <ErrorState>단어를 불러올 수 없습니다.</ErrorState>}
      {!isLoading && words.length === 0 ? (
        <EmptyState>아직 저장된 단어가 없습니다.</EmptyState>
      ) : (
        <List words={words} />
      )}
    </div>
  );
}
