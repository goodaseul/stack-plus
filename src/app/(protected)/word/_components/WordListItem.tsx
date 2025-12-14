"use client";

import { ListType } from "@/types/list";
import Button from "@/components/button/Button";

type Props = {
  item: ListType;
  onDelete: (id: number) => void;
};

export function WordListItem({ item, onDelete }: Props) {
  return (
    <>
      <Button onClick={() => onDelete(item.id)}>
        삭제
        <span className="inline-block group-hover:rotate-6 transition-transform">
          🐾
        </span>
      </Button>
      <li className="rounded-2xl bg-yellow-50 border border-yellow-300 p-6 mb-4 shadow-sm hover:shadow-md transition-all">
        <p className="font-bold text-lg text-gray-900">{item.word}</p>
        <p className="text-gray-600 mt-1">{item.sentence}</p>
        <p className="text-gray-700 font-medium mt-3">{item.usage}</p>
      </li>
    </>
  );
}
