import Button from "@/components/button/Button";
import { useToggleBookmarkMutate } from "@/hooks/queries/words/useToggleBookmarkMutate";
import { BsThreeDots } from "react-icons/bs";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";

type ListActionsProps = {
  memo?: string;
  bookmarked: boolean;
  wordId: number;
};
export default function ListActions({
  memo,
  bookmarked,
  wordId,
}: ListActionsProps) {
  const { mutate: toggleBookmark } = useToggleBookmarkMutate();
  const buttonStyles = `
    flex items-center justify-center w-6 h-6 p-0
  `;
  return (
    <>
      <div
        className="flex items-center gap-1
      opacity-60 group-hover:opacity-100 transition-opacity
      justify-end
      "
      >
        {memo && (
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
              wordId: wordId,
              bookmarked: bookmarked,
            })
          }
        >
          {bookmarked ? (
            <FaBookmark className="text-gray-700" />
          ) : (
            <FaRegBookmark className="text-gray-500" />
          )}
        </Button>

        {/* 메모가 있으면? 메모 수정하기 : 메모 작성하기 */}
        {/* 단어 수정하기 */}
        {/* 단어 삭제하기 */}
        <Button type="button" variant="text" className={`${buttonStyles}`}>
          <BsThreeDots className="text-gray-500" />
        </Button>
      </div>
    </>
  );
}
