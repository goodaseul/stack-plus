"use client";
import { List } from "../_components/list/List";
import { Title } from "../dashboard/_components/common/Title";
import { Filter } from "../_components/filter/Filter";
import { FilterCount } from "./_components/FilterCount";
import Button from "@/components/button/Button";
import { CiCirclePlus } from "react-icons/ci";
import Modal from "../_components/modal/Modal";
import WordModal from "../_components/modal/WordModal";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { WordType } from "../_components/list/type";

export default function RecordPage() {
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
    <div className="w-full p-5 md:p-15">
      <Title>
        모든 단어들{" "}
        <Button
          type="button"
          variant="text"
          className="text-sm text-gray-strong"
          onClick={handleModal}
        >
          단어 추가하기 <CiCirclePlus className="text-lg ml-1" />
        </Button>
      </Title>

      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <WordModal onAdd={() => console.log("?")} />
        </Modal>
      )}

      <p>지금까지 기록한 단어와 메모를 확인해보세요</p>
      <Filter filterMenus={filterMenus} />
      <FilterCount />

      {/* Todo -  빈 상태 ux */}
      <List words={words} className="h-180 border-green bg-white" />
    </div>
  );
}
