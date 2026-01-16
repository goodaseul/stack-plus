"use client";

import ListActions from "./list-actions/ListActions";
import ListContent from "./ListContent";
import { Word } from "@/types/word";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function List({
  words,
  className,
}: {
  words: Word[];
  className?: string;
}) {
  const searchParams = useSearchParams();
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
        return (
          <li
            key={word.id}
            className="
            border border-gray-200 rounded-lg 
            group relative
            gap-3 px-5 py-7 pb-13"
          >
            <Link href={createWordLink(`${word.id}`, word.expression)}>
              <div>
                <ListContent
                  expression={word.expression}
                  meaning={word.meaning}
                  usage={word.usage}
                  memo={word.memo ?? ""}
                  sentence={word.sentence ?? ""}
                />
              </div>
            </Link>
            <ListActions {...word} />
          </li>
        );
      })}
    </ul>
  );
}
