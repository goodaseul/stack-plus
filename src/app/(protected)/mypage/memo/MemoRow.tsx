import { useState } from "react";

export function MemoRow({
  word,
  memo,
  updatedAt,
  selected,
}: {
  word: string;
  memo: string;
  updatedAt: string;
  selected: boolean;
}) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(memo);

  return (
    <li
      className={`
        relative rounded-xl border px-5 py-4 transition
        ${
          selected
            ? "border-gray-400 bg-gray-50"
            : "border-gray-200 bg-white hover:bg-gray-50"
        }
      `}
    >
      {/* 헤더 */}
      <div className="mb-2 flex items-center justify-between">
        <strong className="text-sm font-medium text-gray-900">{word}</strong>
        <span className="text-xs text-gray-500">{updatedAt}</span>
      </div>

      {/* 내용 */}
      {editing ? (
        <>
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="메모를 입력하세요"
            rows={4}
            className="
              w-full resize-none rounded-md border border-gray-200
              p-2 text-sm leading-relaxed text-gray-800
              focus:outline-none focus:ring-1 focus:ring-gray-400
            "
          />

          <div className="mt-3 flex gap-3">
            <button className="text-xs font-medium text-gray-900">저장</button>
            <button
              className="text-xs text-gray-500 hover:text-gray-900"
              onClick={() => {
                setValue(memo);
                setEditing(false);
              }}
            >
              취소
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="whitespace-pre-line text-sm leading-relaxed text-gray-700">
            {memo || "메모가 없습니다."}
          </p>

          <button
            onClick={() => setEditing(true)}
            className="mt-3 text-xs text-gray-500 hover:text-gray-900"
          >
            메모 수정
          </button>
        </>
      )}
    </li>
  );
}
