import { Word, WordUpdateInput } from "@/types/word";
import Modal from "../../modal/Modal";
import WordModal from "../../modal/WordModal";
type EditWordModalProps = {
  word: Word;
  onClose: () => void;
  handleModify: (form: WordUpdateInput) => Promise<void>;
};
export default function EditWordModal({
  word,
  onClose,
  handleModify,
}: EditWordModalProps) {
  return (
    <Modal onClose={onClose}>
      <WordModal
        title="단어 수정"
        description="필요한 부분만 고쳐도 돼요"
        initialValues={{
          id: word.id,
          expression: word.expression,
          meaning: word.meaning,
          sentence: word.sentence ?? "",
          usage: word.usage,
          memo: word.memo ?? "",
        }}
        onSubmit={(data) => {
          handleModify(data as WordUpdateInput);
          onClose();
        }}
        onClose={onClose}
      />
    </Modal>
  );
}
