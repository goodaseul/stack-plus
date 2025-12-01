"use client";

import { ListType } from "@/types/list";
import WordListItem from "./WordListItem";

type Props = {
  lists: ListType[];
  onDelete: (id: number) => void;
};

export default function WordList({ lists, onDelete }: Props) {
  if (lists.length === 0) {
    return (
      <p className="mt-10 text-gray-500">아직 저장된 단어가 없습니다 🐾</p>
    );
  }

  return (
    <ul className="grid grid-cols-2 gap-5 mt-10">
      {lists.map((item) => (
        <WordListItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
}
