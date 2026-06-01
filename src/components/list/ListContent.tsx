"use client";
import useToggleIsPublicMutation from "@/hooks/queries/words/useToggleIsPublicMutation";
import { BaseWord } from "@/types/word";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { FiGlobe, FiLock } from "react-icons/fi";

type ListContentProps = {
  expression: string;
  meaning: string;
  memo: string;
  usage: string;
  sentence: string;
  isRecordPage: boolean;
  word: BaseWord;
};

export default function ListContent({
  memo,
  usage,
  sentence,
  expression,
  meaning,
  isRecordPage,
  word,
}: ListContentProps) {
  const { mutate: toggleIsPublic } = useToggleIsPublicMutation();

  const lowerSentence = sentence.toLowerCase();
  const lowerExpression = expression.toLowerCase();

  const idx = lowerSentence.indexOf(lowerExpression);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isPublicPage = usePathname();

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [memo]);
  return (
    <>
      <div className="gap-1 md:gap-6 w-full">
        {isPublicPage !== "/explore" && (
          <button
            onClick={() =>
              toggleIsPublic({ wordId: word.id, is_public: !word.is_public })
            }
            className="flex items-center ml-auto justify-end gap-1 text-xs text-gray-400"
          >
            {word.is_public ? (
              <>
                <FiGlobe className="text-point" /> <span>공개중</span>
              </>
            ) : (
              <>
                <FiLock /> <span>비공개</span>
              </>
            )}
          </button>
        )}

        <p className="text-md md:text-lg lg:text-xl font-bold mb-2 text-black dark:text-white">
          {expression}
          <span> : {meaning}</span>
        </p>

        {sentence && isRecordPage && (
          <p className="font-medium text-sm md:text-md lg:text-lg">
            {idx === -1 ? (
              sentence
            ) : (
              <>
                {sentence.slice(0, idx)}
                <span className="bg-point text-white px-1">
                  {sentence.slice(idx, idx + expression.length)}
                </span>
                {sentence.slice(idx + expression.length)}
              </>
            )}
          </p>
        )}

        <p className="absolute left-5 bottom-7 text-sm text-gray-600 dark:text-gray-100 truncate  break-keep">
          {usage}
        </p>

        {isRecordPage && memo && (
          <textarea
            ref={textareaRef}
            value={`${memo}`}
            name="memo"
            id={`memo-${expression}`}
            readOnly
            // tabIndex={-1}
            className="font-medium text-sm md:text-md lg:text-lg  mt-5 resize-none w-full overflow-hidden focus-visible:outline-none"
          />
        )}
      </div>
    </>
  );
}
