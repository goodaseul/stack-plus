"use client";

import Button from "@/components/button/Button";
import { CiCirclePlus } from "react-icons/ci";
import { List } from "../../_components/list/List";
import { Title } from "./common/Title";
import { useState } from "react";
import WordModal from "../../_components/modal/WordModal";
import Modal from "../../_components/modal/Modal";
import { useWordsQuery } from "@/hooks/queries/words";

export function RecentWords() {
  // Todo -  상태관리로 하면 좋을듯?
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { data } = useWordsQuery();
  const words = data.slice(0, 6);
  return (
    <div>
      {/* 헤더 */}
      <div className="mb-3 flex items-center justify-between">
        <Title className="mb-0 text-base font-semibold">최근 등록한 단어</Title>

        <Button
          type="button"
          variant="text_underline"
          onClick={() => setIsOpenModal(true)}
          className="text-sm text-gray-600 hover:text-black"
        >
          추가
          <CiCirclePlus className="ml-1 text-base" />
        </Button>
      </div>

      {/* 리스트 */}
      <List words={words} />

      {/* 모달 */}
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <WordModal
            onAdd={() => console.log("add")}
            onClose={() => setIsOpenModal(false)}
          />
        </Modal>
      )}
    </div>
  );
}
