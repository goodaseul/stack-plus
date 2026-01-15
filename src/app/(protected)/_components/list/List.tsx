"use client";

import ListActions from "./list-actions/ListActions";
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
            group relative
            gap-3 px-5 py-7 pb-13"
          >
            <div>
              <ListContent
                expression={word.expression}
                meaning={word.meaning}
                usage={word.usage}
                memo={word.memo ?? ""}
                sentence={word.sentence ?? ""}
              />
            </div>

            <ListActions {...word} />
          </li>
        );
      })}
    </ul>
  );
}
