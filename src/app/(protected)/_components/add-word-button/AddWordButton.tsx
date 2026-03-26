"use client";

import Button from "@/components/button/Button";
import { useUploadWordMutation } from "@/hooks/queries/words/useUploadWordMutation";
import { WordCreateInput } from "@/types/word";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import Modal from "../modal/Modal";
import WordModal from "../modal/word/WordModal";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { isDuplicateWordError } from "@/api/types/errors";

export default function AddWordButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openModal, setOpenModal] = useState(false);
  const { mutateAsync: uploadWords } = useUploadWordMutation();
  const router = useRouter();

  const onSubmit = async (form: WordCreateInput) => {
    try {
      await uploadWords(form);
      toast.success("표현가 추가되었습니다.");
      closeModal();
    } catch (error) {
      if (isDuplicateWordError(error)) {
        toast.error(`"${error.expression}"는(은) 이미 존재하는 표현입니다.`);
        closeModal();
        router.push(`/record?keyword=${error.expression}`);
      } else {
        toast.error("표현 추가에 실패했습니다.");
      }
    }
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Button
        type="button"
        variant="text_underline"
        className="text-sm text-gray-700 hover:text-black
        dark:text-white dark:hover:text-white
        "
        onClick={() => setOpenModal(true)}
      >
        {children} <CiCirclePlus className="text-base ml-1" />
      </Button>

      {openModal && (
        <Modal closeModal={closeModal}>
          <WordModal
            mode="create"
            title="표현 추가"
            description="표현과 의미만 입력해도 충분해요"
            initialValues={{
              expression: "",
              meaning: "",
              sentence: "",
              usage: "일상생활",
              memo: "",
            }}
            onSubmit={onSubmit}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </>
  );
}
