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
  const createWordLink = (wordId: string, expression: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("wordId", wordId);
    params.set("keyword", expression);
    return `/record?${params.toString()}`;
  };
  return (
    <ul
      className={`
        grid grid-cols-1 sm:grid-cols-2
        gap-4
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
          />
        );
        return (
          <li
            key={word.id}
            className="
            border border-gray-200 rounded-lg 
            group relative
            gap-3 px-5 py-7 pb-13"
          >
            {isRecordPage ? (
              <div>{content}</div>
            ) : (
              <Link href={createWordLink(`${word.id}`, word.expression)}>
                {content}
              </Link>
            )}
            <ListActions {...word} />
          </li>
        );
      })}
    </ul>
  );
}
