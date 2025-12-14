"use client";

import { useSearchParams } from "next/navigation";
import MemoRow from "./MemoRow";

const MOCK_MEMOS = [
  {
    wordId: 1,
    word: "tomorrow",
    memo: "내일이라는 뜻인데 자주 헷갈림",
    updatedAt: "2025-12-14",
  },
  {
    wordId: 2,
    word: "yesterday",
    memo: "발음 주의",
    updatedAt: "2025-12-13",
  },
];

export default function MemoList() {
  const searchParams = useSearchParams();
  const selectedWordId = Number(searchParams.get("wordId"));

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {MOCK_MEMOS.map((item) => (
        <MemoRow
          key={item.wordId}
          {...item}
          selected={item.wordId === selectedWordId}
        />
      ))}
    </ul>
  );
}
