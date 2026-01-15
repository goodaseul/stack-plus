import Button from "@/components/button/Button";
import { useModifyWordMutation } from "@/hooks/queries/words/useModifyWordMutation";
import { useToggleBookmarkMutate } from "@/hooks/queries/words/useToggleBookmarkMutate";
import { Word, WordUpdateInput } from "@/types/word";
import { RefObject } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import EditWordModal from "./EditWordModal";

type ListActionsViewProps = {
  word: Word;
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
  onOpen: () => void;
  onClose: () => void;
  dropdownWrapperRef: RefObject<HTMLDivElement | null>;
  isOpenModal: boolean;
};

export default function ListActionsView({
  word,
  isDropdownOpen,
  toggleDropdown,
  onOpen,
  onClose,
  dropdownWrapperRef,
  isOpenModal,
}: ListActionsViewProps) {
  const { mutate: toggleBookmark } = useToggleBookmarkMutate();
  const modifyWords = useModifyWordMutation();

  const handleModify = async (form: WordUpdateInput) => {
    await modifyWords.mutateAsync(form);
    onClose();
  };
  const buttonStyles = `
    flex items-center justify-center w-6 h-6 p-0
  `;
  return (
    <>
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
        <EditWordModal
          word={word}
          onClose={onClose}
          handleModify={handleModify}
        />
      )}
    </>
  );
}
