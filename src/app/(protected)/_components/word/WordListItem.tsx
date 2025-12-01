"use client";

import { ListType } from "@/types/list";
import Button from "@/components/button/Button";

type Props = {
  item: ListType;
  onDelete: (id: number) => void;
};

export default function WordListItem({ item, onDelete }: Props) {
  return (
    <li className="p-4 border border-main rounded-xl">
      <p>
        <strong>단어:</strong> {item.word}
      </p>
      <p>
        <strong>뜻:</strong> {item.meaning}
      </p>
      <p>
        <strong>작문:</strong> {item.sentence}
      </p>
      <p>
        <strong>사용처:</strong> {item.usage}
      </p>

      <Button variant="small" onClick={() => onDelete(item.id)}>
        삭제 🗑️
      </Button>
    </li>
  );
}
