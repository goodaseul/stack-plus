import { Title } from "../../dashboard/_components/common/Title";
import AddWordButton from "../../_components/add-word-button/AddWordButton";

export function RecordHeader() {
  return (
    <>
      <Title className="flex items-center justify-between">
        모든 단어들
        <AddWordButton>단어 추가하기 </AddWordButton>
      </Title>

      <p className="mt-2 text-sm text-gray-600">
        지금까지 기록한 단어와 메모를 확인해보세요
      </p>
    </>
  );
}
