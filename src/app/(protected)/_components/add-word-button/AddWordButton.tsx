"use client";

import Button from "@/components/button/Button";
import { useUploadWordMutation } from "@/hooks/queries/words/useUploadWordMutation";
import { WordCreateInput } from "@/types/word";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import Modal from "../modal/Modal";
import WordModal from "../modal/word/WordModal";
import { toast } from "sonner";

type AddWordButtonProps = {
  children: React.ReactNode;
};

export default function AddWordButton({ children }: AddWordButtonProps) {
  const [openModal, setOpenModal] = useState(false);
  const uploadWords = useUploadWordMutation();
  const handleSubmit = async (form: WordCreateInput) => {
    await uploadWords.mutateAsync(form);
    toast.success("단어가 추가되었습니다.");
    closeModal();
  };
  const openCreateModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Button
        type="button"
        variant="text_underline"
        className="ml-auto text-sm text-gray-700 hover:text-black"
        onClick={openCreateModal}
      >
        {children} <CiCirclePlus className="text-base ml-1" />
      </Button>

      {openModal && (
        <Modal closeModal={closeModal}>
          <WordModal
            title="단어 추가"
            description="단어와 의미만 입력해도 충분해요"
            initialValues={{
              expression: "",
              meaning: "",
              sentence: "",
              usage: "일상생활",
              memo: "",
            }}
            onSubmit={(data) => {
              handleSubmit(data as WordCreateInput);
              closeModal();
            }}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </>
  );
}
