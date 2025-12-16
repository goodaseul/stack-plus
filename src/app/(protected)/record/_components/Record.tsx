"use client";
import Button from "@/components/button/Button";
import { CiCirclePlus } from "react-icons/ci";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/supabase";
import { WordType } from "@/types/word";
import { Title } from "../../dashboard/_components/common/Title";
import Modal from "../../_components/modal/Modal";
import WordModal from "../../_components/modal/WordModal";
import { Filter } from "../../_components/filter/Filter";
import { FilterCount } from "./FilterCount";
import { List } from "../../_components/list/List";
export function Record() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleModal = () => {
    setIsOpenModal(true);
  };

  const [words, setWords] = useState<WordType[]>([]);

  useEffect(() => {
    const fetchWords = async () => {
      const { data, error } = await supabase.from("words").select("*");

      if (error) {
        console.error("에러:", error);
      } else {
        setWords(data ?? []);
      }
    };

    fetchWords();
  }, []);
  console.log(words?.length);

  //  /words
  //  /words?filter=hasMemo
  //  /words?filter=noMemo
  //  /words?filter=bookmarked
  const filterMenus = ["전체", "메모 있음", "메모 없음 ", "북마크"];
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
      <div className="mt-6 space-y-3">
        <Filter filterMenus={filterMenus} />
        <FilterCount />
      </div>
      {/* Todo -  빈 상태 ux */}
      <List words={words} className="h-180 border-gray-200  bg-white" />
    </>
  );
}
