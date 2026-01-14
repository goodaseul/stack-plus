"use client";

import Link from "next/link";
import ListActions from "./ListActions";
import ListContent from "./ListContent";
import { Word } from "@/types/word";

export function List({
  words,
  className,
}: {
  words: Word[];
  className?: string;
}) {
  return (
    <ul
      className={`
        grid grid-cols-1 sm:grid-cols-2
        gap-4
        ${className}`}
    >
      {words.map((word) => {
        return (
          <li
            key={word.id}
            className="
            border border-gray-200 rounded-lg 
            group 
            gap-3 px-5 py-7 hover:bg-gray-50 transition-colors"
          >
            {word.memo ? (
              <Link href={`/mypage?tab=memo&wordId=${word.id}`} className="">
                <ListContent
                  expression={word.expression}
                  meaning={word.meaning}
                />
              </Link>
            ) : (
              <div>
                <ListContent
                  expression={word.expression}
                  meaning={word.meaning}
                />
              </div>
            )}

            <ListActions
              memo={word.memo}
              bookmarked={word.bookmarked}
              wordId={word.id}
            />
          </li>
        );
      })}
    </ul>
  );
}
