"use client";

import { List } from "../../_components/list/List";
import { Title } from "./common/Title";
import { useWordsQuery } from "@/hooks/queries/words";
import { useMobileSize } from "@/hooks/useMobileSize";
import AddWordButton from "../../_components/add-word-button/AddWordButton";
import EmptyState from "@/components/empty-state/EmptyState";

export function RecentWords() {
  const { data } = useWordsQuery();
  const isMobile = useMobileSize();

  const words = data?.words.slice(0, isMobile ? 2 : 4) ?? [];

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <Title className="text-base">최근 등록한 단어</Title>
        <AddWordButton>추가 </AddWordButton>
      </div>

      {words.length === 0 ? (
        <EmptyState>아직 저장된 단어가 없습니다.</EmptyState>
      ) : (
        <List words={words} />
      )}
    </div>
  );
}
