import Button from "@/components/button/Button";
import { useModifyWordMutation } from "@/hooks/queries/words/useModifyWordMutation";
import { Word, WordUpdateInput } from "@/types/word";
import { RefObject } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { useDeleteWordMutation } from "@/hooks/queries/words/useDeleteWordMutation";
import Modal from "../../modal/Modal";
import WordModal from "../../modal/word/WordModal";
import { useToggleBookmarkMutation } from "@/hooks/queries/words/useToggleBookmarkMutation";
import ConfirmModal from "../../modal/confirm/ConfirmModal";
import { toast } from "sonner";

type ListActionsViewProps = {
  word: Word;
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
  dropdownWrapperRef: RefObject<HTMLDivElement | null>;
  openModal: "edit" | "delete" | null;
  openEditModal: () => void;
  openDeleteModal: () => void;
  closeModal: () => void;
};
export default function ListActionsView({
  word,
  isDropdownOpen,
  toggleDropdown,
  dropdownWrapperRef,
  openModal,
  openEditModal,
  openDeleteModal,
  closeModal,
}: ListActionsViewProps) {
  const { mutate: toggleBookmark } = useToggleBookmarkMutation();
  const modifyWord = useModifyWordMutation();
  const { mutate: deleteWord } = useDeleteWordMutation();
  const handleModify = async (form: WordUpdateInput) => {
    await modifyWord.mutateAsync(form);
    toast.success("수정이 완료되었습니다.");
    closeModal();
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
          className={`${buttonStyles} pointer-events-none`}
          disabled
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
              <Button onClick={openEditModal} variant="text">
                수정하기
              </Button>
            </li>
            <li>
              <Button onClick={openDeleteModal} variant="text">
                삭제하기
              </Button>
            </li>
          </ul>
        )}
      </div>
      {openModal === "edit" && (
        <Modal closeModal={closeModal}>
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
              closeModal();
            }}
            closeModal={closeModal}
          />
        </Modal>
      )}
      {openModal === "delete" && (
        <Modal closeModal={closeModal}>
          <ConfirmModal
            closeModal={closeModal}
            deleteWord={() => deleteWord(word.id)}
            title="정말로 삭제하시겠어요?"
            description="삭제한 후에는 복구가 되지 않아요."
          />
        </Modal>
      )}
    </div>
  );
}
