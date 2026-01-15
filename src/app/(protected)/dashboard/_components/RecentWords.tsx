"use client";

import Button from "@/components/button/Button";
import { List } from "../../_components/list/List";
import { Title } from "./common/Title";
import { useState } from "react";
import WordModal from "../../_components/modal/WordModal";
import Modal from "../../_components/modal/Modal";
import { useWordsQuery } from "@/hooks/queries/words";
import { useMobileSize } from "@/hooks/useMobileSize";
import { useUploadWordMutation } from "@/hooks/queries/words/useUploadWordMutation";
import { WordCreateInput } from "@/types/word";

export function RecentWords() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { data = [] } = useWordsQuery();
  const uploadWords = useUploadWordMutation();
  const isMobile = useMobileSize();
  const words = data.slice(0, isMobile ? 2 : 4);

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
    <div>
      <div className="mb-5 flex items-center justify-between">
        <Title className="text-base">최근 등록한 단어</Title>

        <Button variant="text_underline" type="button" onClick={onOpen}>
          추가
        </Button>
      </div>

      <List words={words} />

      {isOpenModal && (
        <Modal onClose={onClose}>
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
              onClose();
            }}
            onClose={onClose}
          />
        </Modal>
      )}
    </div>
  );
}
