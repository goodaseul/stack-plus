import { useState } from "react";

export function MemoRow({
  wordId,
  word,
  memo,
  updatedAt,
  selected,
}: {
  wordId: number;
  word: string;
  memo: string;
  updatedAt: string;
  selected: boolean;
}) {
  const [editing, setEditing] = useState(selected);
  const [value, setValue] = useState(memo);

  return (
    <li
      className={`
        relative rounded-xl border px-5 py-4 transition
        ${
          selected
            ? "border-green bg-[rgba(183,194,118,0.12)]"
            : "border-gray-200 bg-cream"
        }
      `}
    >
      {/* 왼쪽 메모 라인 = 포인트 컬러 딱 한 번 */}
      <span className="absolute left-0 top-4 h-[calc(100%-2rem)] w-1 rounded-r bg-green" />

      {/* 헤더 */}
      <div className="mb-2 flex items-center justify-between pl-3">
        <strong className="text-sm font-semibold text-gray-strong">
          {word}
        </strong>
        <span className="text-xs text-gray">{updatedAt}</span>
      </div>

      {/* 내용 */}
      <div className="pl-3">
        {editing ? (
          <>
            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="메모를 입력하세요"
              rows={4}
              className="
                w-full resize-none bg-transparent text-sm leading-relaxed text-gray-strong
                focus:outline-none
                border-b border-dashed border-green
              "
            />

            <div className="mt-3 flex gap-3">
              <button className="text-xs font-medium text-green">저장</button>
              <button
                className="text-xs text-gray"
                onClick={() => setEditing(false)}
              >
                취소
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="whitespace-pre-line text-sm leading-relaxed text-gray-strong">
              {memo}
            </p>

            <button
              onClick={() => setEditing(true)}
              className="mt-3 text-xs text-green hover:underline"
            >
              메모 수정
            </button>
          </>
        )}
      </div>
    </li>
  );
}
