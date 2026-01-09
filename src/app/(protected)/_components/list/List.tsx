"use client";

import Link from "next/link";
import ListActions from "./ListActions";
import ListContent from "./ListContent";

export function List({
  words,
  className,
}: {
  words: WordType[];
  className?: string;
}) {
  return (
    <ul
      className={`p-2
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
            gap-3 p-5 hover:bg-gray-50 transition-colors"
          >
            {word.memo ? (
              <Link href={`/mypage?tab=memo&wordId=${word.id}`} className="">
                <ListContent
                  expression={word.expression}
                  meaning={word.meaning}
                />
              </Link>
            ) : (
              <div className="">
                <ListContent
                  expression={word.expression}
                  meaning={word.meaning}
                />
              </div>
            )}

            <ListActions memo={word.memo} bookmarked={word.bookmarked} />
          </li>
        );
      })}
    </ul>
  );
}
