import Button from "@/components/button/Button";
import { Title } from "../../dashboard/_components/common/Title";
import { CiCirclePlus } from "react-icons/ci";
import Modal from "../../_components/modal/Modal";
import WordModal from "../../_components/modal/WordModal";
import { useState } from "react";
import { WordCreateInput } from "@/types/word";
import { useUploadWordMutation } from "@/hooks/queries/words/useUploadWordMutation";

export function RecordHeader() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const uploadWords = useUploadWordMutation();
  const handleSubmit = async (form: WordCreateInput) => {
    await uploadWords.mutateAsync(form);
    onClose();
  };
  const onOpen = () => {
    setIsOpenModal(true);
  };
  const onClose = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Title className="flex items-center justify-between">
        모든 단어들
        <Button
          type="button"
          variant="text_underline"
          className="ml-auto text-sm text-gray-700 hover:text-black"
          onClick={onOpen}
        >
          단어 추가하기 <CiCirclePlus className="text-base ml-1" />
        </Button>
      </Title>
      {isOpenModal && (
        <Modal onClose={onClose}>
          <WordModal onAdd={handleSubmit} onClose={onClose} />
        </Modal>
      )}
      <p className="mt-2 text-sm text-gray-600">
        지금까지 기록한 단어와 메모를 확인해보세요
      </p>
    </>
  );
}
