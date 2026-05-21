"use client";

import { List } from "@/components/list/List";
import { PublicWordRequest } from "@/api/types/words";

export function PublicWordList({ words }: { words: PublicWordRequest[] }) {
  return (
    <List
      words={words}
      renderActions={(word) => {
        return (
          <span className="text-xs text-slate-400">
            ✍️ 작성자 : {word.profiles?.nickname ?? "익명"}님
          </span>
        );
      }}
    />
  );
}
