import Link from "next/link";
import { WordType } from "./type";
import { TfiWrite } from "react-icons/tfi";
import Button from "@/components/button/Button";
import { FaRegBookmark } from "react-icons/fa";

export function List({ mockWords }: { mockWords: WordType[] }) {
  return (
    <ul className="border border-green rounded-lg bg-cream p-4 h-48 overflow-y-auto">
      {mockWords.map((mockWord) => {
        return (
          <li
            key={mockWord.id}
            className="flex px-2 py-1 mt-3 first:mt-0 items-center justify-between text-gray transition-all hover:text-black hover:bg-gray/10 rounded-sm"
          >
            <Link
              href={`/words/${mockWord.id}`}
              className="flex items-center w-[80%]"
            >
              <p className="w-1/2 truncate mr-[5%]">{mockWord.word}</p>
              <p className="w-1/2 text-gray-600 truncate">{mockWord.meaning}</p>
            </Link>
            <div className="flex w-[10%] items-center gap-3 justify-end">
              {mockWord.memo && (
                <p className="text-green">
                  <TfiWrite />
                </p>
              )}
              <Button type="button" variant="text">
                <FaRegBookmark className="text-green" />
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
