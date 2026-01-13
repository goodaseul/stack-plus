import Button from "@/components/button/Button";
import { BsThreeDots } from "react-icons/bs";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";

type ListActionsProps = {
  memo?: string;
  bookmarked: boolean;
};
export default function ListActions({ memo, bookmarked }: ListActionsProps) {
  return (
    <>
      <div
        className="flex items-center gap-2 
      opacity-60 group-hover:opacity-100 transition-opacity
      justify-end
      "
      >
        {memo && <TfiWrite className="hidden md:block text-gray-500" />}

        <Button type="button" variant="text_underline" className="p-1">
          {bookmarked ? (
            <FaBookmark className="text-gray-700" />
          ) : (
            <FaRegBookmark className="text-gray-500" />
          )}
        </Button>

        <Button type="button" variant="text_underline" className="p-1">
          <BsThreeDots className="text-gray-500" />
        </Button>
      </div>
    </>
  );
}
