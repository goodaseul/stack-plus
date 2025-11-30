import { ListType } from "@/types/list";
import Button from "../button/Button";

export type ListItemProps = {
  item: ListType;
  onDeleteWord: (id: number) => void;
};

export default function ListItem({ item, onDeleteWord }: ListItemProps) {
  return (
    <>
      <li
        className="px-3 py-3 text-sm border border-dashed rounded-lg border-main"
        key={item.id}
      >
        <p>단어: {item.word}</p>
        <p>뜻: {item.meaning}</p>
        <p>작문: {item.sentence}</p>
        <p>사용처: {item.usage}</p>

        <Button onClick={() => onDeleteWord(item.id)} variant="small">
          삭제 꾹 🐾
        </Button>
      </li>
    </>
  );
}
