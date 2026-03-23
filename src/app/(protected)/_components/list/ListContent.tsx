import { useEffect, useRef } from "react";

type ListContentProps = {
  expression: string;
  meaning: string;
  memo: string;
  usage: string;
  sentence: string;
};

export default function ListContent({
  memo,
  usage,
  sentence,
  expression,
  meaning,
}: ListContentProps) {
  const lowerSentence = sentence.toLowerCase();
  const lowerExpression = expression.toLowerCase();

  const idx = lowerSentence.indexOf(lowerExpression);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

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
        <p className="text-xl font-bold mb-2 text-black">
          {expression}
          <span> : {meaning}</span>
        </p>

        {sentence && (
          <p className="font-medium">
            {idx === -1 ? (
              sentence
            ) : (
              <>
                {sentence.slice(0, idx)}
                <span className="bg-point px-1">
                  {sentence.slice(idx, idx + expression.length)}
                </span>
                {sentence.slice(idx + expression.length)}
              </>
            )}
          </p>
        )}

        <p className="absolute left-5 bottom-7 text-sm text-gray-600 truncate  break-keep">
          {usage}
        </p>

        {memo && (
          <textarea
            ref={textareaRef}
            value={`메모 : ${memo}`}
            name="memo"
            id={`memo-${expression}`}
            readOnly
            tabIndex={-1}
            className="font-medium font-sm mt-5 resize-none w-full overflow-hidden focus-visible:outline-none"
          />
        )}
      </div>
    </>
  );
}
