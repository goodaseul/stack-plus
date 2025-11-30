import { ListProps } from "@/types/list";
import ListItem from "./ListItem";

export default function ListItemList({ lists, onDeleteWord }: ListProps) {
  return (
    <>
      {lists.map((item) => (
        <ListItem key={item.id} item={item} onDeleteWord={onDeleteWord} />
      ))}
    </>
  );
}
