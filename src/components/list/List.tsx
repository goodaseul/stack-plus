"use client";

import { BaseWord } from "@/types/word";
import ListContent from "./ListContent";
import { usePathname } from "next/navigation";

export function List<T extends BaseWord>({
  words,
  className,
  renderActions,
}: {
  words: T[];
  className?: string;
  renderActions?: (word: T) => React.ReactNode;
}) {
  const pathname = usePathname();
  const isRecordPage = pathname === "/record";

  return (
    <ul
      className={`
        grid gap-4
        ${isRecordPage ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2 md:grid-cols-3"}
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
            className="border border-gray-200 dark:border-point rounded-lg 
            group relative gap-3 px-5 py-7 pb-13"
          >
            {isRecordPage ? <div>{content}</div> : <>{content}</>}
            {renderActions?.(word)}
          </li>
        );
      })}
    </ul>
  );
}
