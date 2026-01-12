"use client";

import Button from "@/components/button/Button";
import ErrorState from "@/components/error-state/ErrorState";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

type WordFormProps = {
  onAdd: (item: PopupAddType) => void;
  onClose: () => void;
};

export default function WordModal({ onAdd, onClose }: WordFormProps) {
  const [expression, setExpression] = useState("");
  const [meaning, setMeaning] = useState("");
  const [sentence, setSentence] = useState("");
  const [usage, setUsage] = useState("일상생활");
  const [memo, setMemo] = useState("");

  const [errors, setErrors] = useState({
    expression: false,
    meaning: false,
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      expression: !expression.trim(),
      meaning: !meaning.trim(),
    };

    setErrors(newErrors);
    if (newErrors.expression || newErrors.meaning) return;

    onAdd({
      id: Date.now(),
      expression,
      meaning,
      sentence,
      usage,
      memo,
    });

    onClose();
  };

  const LabelStyles = "text-sm font-medium text-gray-700";
  const InputStyles =
    "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition";
  const SelectStyles =
    "w-full appearance-none rounded-md border border-gray-300 px-3 py-2 pr-10 text-sm text-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition";

  return (
    <form onSubmit={onSubmit}>
      <div className="relative mx-auto max-w-[640px] rounded-2xl bg-white p-8 space-y-8">
        {/* X 버튼 */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-md p-1 text-gray-500 hover:text-black hover:bg-gray-100 transition"
          aria-label="닫기"
        >
          <IoClose className="text-xl" />
        </button>

        {/* 헤더 */}
        <div>
          <h2 className="text-xl font-semibold text-black">단어 추가</h2>
          <p className="mt-1 text-sm text-gray-600">
            단어와 의미만 입력해도 충분해요
          </p>
        </div>

        {/* 단어 */}
        <div className="space-y-1">
          <label htmlFor="word" className={LabelStyles}>
            단어 *
          </label>
          <input
            id="word"
            type="text"
            value={expression}
            onChange={(e) => {
              setExpression(e.target.value);
              if (errors.expression && e.target.value.trim()) {
                setErrors((prev) => ({ ...prev, expression: false }));
              }
            }}
            placeholder="book"
            className={InputStyles}
          />
          {errors.expression && <ErrorState>단어를 입력해주세요</ErrorState>}
        </div>

        {/* 뜻 */}
        <div className="space-y-1">
          <label htmlFor="meaning" className={LabelStyles}>
            뜻 *
          </label>
          <input
            id="meaning"
            type="text"
            value={meaning}
            onChange={(e) => {
              setMeaning(e.target.value);
              if (errors.meaning && e.target.value.trim()) {
                setErrors((prev) => ({ ...prev, meaning: false }));
              }
            }}
            placeholder="책"
            className={InputStyles}
          />
          {errors.meaning && <ErrorState>뜻을 입력해주세요</ErrorState>}
        </div>

        {/* 작문 */}
        <div className="space-y-1">
          <label htmlFor="sentence" className={LabelStyles}>
            예문
          </label>
          <input
            id="sentence"
            type="text"
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
            placeholder="I bought a book yesterday."
            className={InputStyles}
          />
        </div>

        {/* 사용 위치 */}
        <div className="space-y-1 relative ">
          <label htmlFor="usage" className={LabelStyles}>
            사용 장소
          </label>
          <div className="flex items-center">
            <select
              id="usage"
              value={usage}
              onChange={(e) => setUsage(e.target.value)}
              className={SelectStyles}
            >
              <option value="일상생활">일상생활</option>
              <option value="회사">회사</option>
              <option value="학교">학교</option>
            </select>
            <FiChevronDown
              className="
                pointer-events-none
                absolute right-3
                text-gray-400
                "
              size={18}
            />
          </div>
        </div>

        {/* 메모 */}
        <div className="space-y-1">
          <label htmlFor="memo" className={LabelStyles}>
            메모
          </label>
          <textarea
            id="memo"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="헷갈렸던 포인트 정리"
            className={`${InputStyles} min-h-[90px] resize-none`}
          />
        </div>

        {/* 버튼 */}
        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="outline" onClick={onClose}>
            취소
          </Button>
          <Button type="submit">저장</Button>
        </div>
      </div>
    </form>
  );
}
