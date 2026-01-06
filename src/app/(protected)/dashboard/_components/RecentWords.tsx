"use client";

import Button from "@/components/button/Button";
import { CiCirclePlus } from "react-icons/ci";
import { List } from "../../_components/list/List";
import { Title } from "./common/Title";
import { useState } from "react";
import WordModal from "../../_components/modal/WordModal";
import Modal from "../../_components/modal/Modal";

export function RecentWords({ mockWords }: { mockWords: WordType[] }) {
  // Todo -  상태관리로 하면 좋을듯?
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-4">
      {/* 헤더 */}
      <div className="mb-3 flex items-center justify-between">
        <Title className="mb-0 text-base font-semibold">최근 등록한 단어</Title>

        <Button
          type="button"
          variant="text"
          onClick={() => setIsOpenModal(true)}
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          추가
          <CiCirclePlus className="ml-1 text-base" />
        </Button>
      </div>

      {/* 리스트 */}
      <List
        words={mockWords}
        className="h-48 border border-gray-200 rounded-md"
      />

      {/* 모달 */}
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <WordModal
            onAdd={() => console.log("add")}
            onClose={() => setIsOpenModal(false)}
          />
        </Modal>
      )}
    </section>
  );
}
