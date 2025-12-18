import Button from "@/components/button/Button";
import { Title } from "../../dashboard/_components/common/Title";
import { CiCirclePlus } from "react-icons/ci";
import Modal from "../../_components/modal/Modal";
import WordModal from "../../_components/modal/WordModal";
import { useState } from "react";

export function RecordHeader() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleModal = () => {
    setIsOpenModal(true);
  };
  return (
    <>
      <Title className="flex items-center justify-between">
        모든 단어들
        <Button
          type="button"
          variant="text"
          className="ml-auto text-sm text-gray-700 hover:text-gray-900"
          onClick={handleModal}
        >
          단어 추가하기 <CiCirclePlus className="text-base ml-1" />
        </Button>
      </Title>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <WordModal
            onAdd={() => console.log("add")}
            onClose={() => console.log("close")}
          />
        </Modal>
      )}
      <p className="mt-2 text-sm text-gray-600">
        지금까지 기록한 단어와 메모를 확인해보세요
      </p>
    </>
  );
}
