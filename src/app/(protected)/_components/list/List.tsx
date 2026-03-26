"use client";

import ListActions from "./list-actions/ListActions";
import ListContent from "./ListContent";
import { Word } from "@/types/word";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export function List({
  words,
  className,
}: {
  words: Word[];
  className?: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const isRecordPage = pathname === "/record";

  const createWordLink = (expression: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("expression", expression);
    return `/record?keyword=${encodeURIComponent(expression)}`;
  };

  return (
    <ul
      className={`
        grid
        gap-4
        ${isRecordPage ? " grid-cols-1 sm:grid-cols-2" : "grid-cols-2 md:grid-cols-3"}
        ${className}`}
    >
      {words.map((word) => {
        const content = (
          <ListContent
            expression={word.expression}
            meaning={word.meaning}
            usage={word.usage}
            memo={word.memo ?? ""}
            sentence={word.sentence ?? ""}
            isRecordPage={isRecordPage}
          />
        );
        return (
          <li
            key={word.id}
            className="
            border border-gray-200 dark:border-point rounded-lg 
            group relative
            gap-3 px-5 py-7 pb-13
            "
          >
            {isRecordPage ? (
              <div>{content}</div>
            ) : (
              <Link href={createWordLink(`${word.expression}`)}>{content}</Link>
            )}
            <ListActions {...word} />
          </li>
        );
      })}
    </ul>
  );
}
