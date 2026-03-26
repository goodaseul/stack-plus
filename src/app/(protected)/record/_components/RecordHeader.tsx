import { Title } from "../../dashboard/_components/common/Title";
import AddWordButton from "../../_components/add-word-button/AddWordButton";

export function RecordHeader() {
  return (
    <Title className="flex items-center justify-between dark:text-white">
      모든 표현들
      <AddWordButton>표현 추가하기 </AddWordButton>
    </Title>
  );
}
