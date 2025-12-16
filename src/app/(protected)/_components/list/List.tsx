"use client";

import Link from "next/link";
import { WordType } from "@/types/word";
import { TfiWrite } from "react-icons/tfi";
import Button from "@/components/button/Button";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

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
        const Content = (
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6 w-full min-w-0">
            {/* 영어 */}
            <p className="text-sm font-medium text-gray-900 truncate md:w-1/2">
              {word.expression}
            </p>

            {/* 한국어 */}
            <p className="text-sm text-gray-600 truncate md:w-1/2 break-keep">
              {word.meaning}
            </p>
          </div>
        );

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
                {Content}
              </Link>
            ) : (
              <div className="flex-1 min-w-0">{Content}</div>
            )}

            {/* 액션 영역 */}
            <div className="flex items-center gap-2 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
              {word.memo && (
                <TfiWrite className="hidden md:block text-gray-500" />
              )}

              <Button type="button" variant="text" className="p-1">
                {word.bookmarked ? (
                  <FaBookmark className="text-gray-700" />
                ) : (
                  <FaRegBookmark className="text-gray-500" />
                )}
              </Button>

              <Button type="button" variant="text" className="p-1">
                <BsThreeDots className="text-gray-500" />
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
