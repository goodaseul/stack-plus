import Button from "@/components/button/Button";
import { useToggleBookmarkMutate } from "@/hooks/queries/words/useToggleBookmarkMutate";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import Modal from "../modal/Modal";
import WordModal from "../modal/WordModal";
import { Word, WordUpdateInput } from "@/types/word";
import { useModifyWordMutation } from "@/hooks/queries/words/useModifyWordMutation";

export default function ListActions({ ...word }: Word) {
  const { mutate: toggleBookmark } = useToggleBookmarkMutate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownWrapperRef = useRef<HTMLDivElement | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const modifyWords = useModifyWordMutation();

  useClickOutside(
    dropdownWrapperRef,
    () => {
      setIsDropdownOpen(false);
    },
    isDropdownOpen
  );

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleModify = async (form: WordUpdateInput) => {
    await modifyWords.mutateAsync(form);
    onClose();
  };

  const onOpen = () => {
    setIsOpenModal(true);
  };
  const onClose = () => {
    setIsOpenModal(false);
  };

  const buttonStyles = `
    flex items-center justify-center w-6 h-6 p-0
  `;
  return (
    <div
      className="flex items-center gap-1
      justify-end absolute right-5 bottom-7
      "
    >
      {word.memo && (
        <Button
          type="button"
          variant="text"
          className={`${buttonStyles}`}
          href="/mypage?filter=hasMemo"
        >
          <TfiWrite className=" text-gray-500" />
        </Button>
      )}

      <Button
        type="button"
        variant="text"
        className={`${buttonStyles}`}
        onClick={() =>
          toggleBookmark({
            wordId: word.id,
            bookmarked: word.bookmarked,
          })
        }
      >
        {word.bookmarked ? (
          <FaBookmark className="text-gray-700" />
        ) : (
          <FaRegBookmark className="text-gray-500" />
        )}
      </Button>
      <div ref={dropdownWrapperRef}>
        <Button
          type="button"
          variant="text"
          className={`${buttonStyles}`}
          onClick={toggleDropdown}
        >
          <BsThreeDots className="text-gray-500" />
        </Button>
        {isDropdownOpen && (
          <ul
            className="absolute z-10 right-0 -bottom-23 w-max rounded-xl
         bg-white px-5 py-3 border border-gray-200 shadow-sm"
          >
            <li>
              <Button onClick={onOpen} variant="text">
                수정하기
              </Button>
            </li>
            <li>
              <Button href="/" variant="text">
                삭제하기
              </Button>
            </li>
          </ul>
        )}
      </div>

      {isOpenModal && (
        <Modal onClose={onClose}>
          <WordModal
            title="단어 수정"
            description="필요한 부분만 고쳐도 돼요"
            initialValues={{
              id: word.id,
              expression: word.expression,
              meaning: word.meaning,
              sentence: word.sentence ?? "",
              usage: word.usage,
              memo: word.memo ?? "",
            }}
            onSubmit={(data) => {
              handleModify(data as WordUpdateInput);
              onClose();
            }}
            onClose={onClose}
          />
        </Modal>
      )}
    </div>
  );
}
