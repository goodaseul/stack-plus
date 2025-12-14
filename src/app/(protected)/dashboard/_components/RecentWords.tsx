"use client";
import Button from "@/components/button/Button";
import { CiCirclePlus } from "react-icons/ci";
import { WordType } from "../../_components/list/type";
import { List } from "../../_components/list/List";
import { Title } from "./common/Title";
import { useState } from "react";
import WordModal from "../../_components/modal/WordModal";
import Modal from "../../_components/modal/Modal";

export function RecentWords({ mockWords }: { mockWords: WordType[] }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleModal = () => {
    setIsOpenModal(true);
  };
  return (
    <div>
      <Title>
        최근 등록한 단어
        <Button
          type="button"
          variant="text"
          className="text-sm text-gray-strong"
          onClick={handleModal}
        >
          단어 추가하기 <CiCirclePlus className="text-lg ml-1" />
        </Button>
      </Title>
      <List words={mockWords} className="border-green bg-cream h-48" />

      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <WordModal onAdd={() => console.log("?")} />
        </Modal>
      )}
    </div>
  );
}
