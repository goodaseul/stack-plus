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
      className={`border border-gray-200 rounded-lg p-2 overflow-y-auto overflow-x-hidden ${className}`}
    >
      {words.map((word) => {
        return (
          <li
            key={word.id}
            className="group flex items-start md:items-center justify-between gap-3 px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
          >
            {word.memo ? (
              <Link
                href={`/mypage?tab=memo&wordId=${word.id}`}
                className="flex-1 min-w-0"
              >
                <ListContent
                  expression={word.expression}
                  meaning={word.meaning}
                />
              </Link>
            ) : (
              <div className="flex-1 min-w-0">
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
