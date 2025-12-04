"use client";
import { useState } from "react";
import Button from "@/components/button/Button";
import { ListType } from "@/types/list";
import ErrorState from "@/components/error-state/ErrorState";
type WordFormProps = {
  onAdd: (item: ListType) => void;
};

export default function WordForm({ onAdd }: WordFormProps) {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [sentence, setSentence] = useState("");
  const [usage, setUsage] = useState("일상생활");

  const [errors, setErrors] = useState({
    word: false,
    meaning: false,
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      word: !word.trim(),
      meaning: !meaning.trim(),
    };

    setErrors(newErrors);

    if (newErrors.word || newErrors.meaning) return;

    onAdd({
      id: Date.now(),
      word,
      meaning,
      sentence,
      usage,
    });

    setWord("");
    setMeaning("");
    setSentence("");
    setUsage("일상생활");

    setErrors({ word: false, meaning: false });
  };
  const LabelStyles = `font-semibold text-lg text-gray-700 flex items-center gap-2`;
  const InputStyles = `pl-2 w-full border-b-2 border-yellow-300 py-2 text-gray-700 focus:outline-none focus:border-yellow-500 transition-colors`;
  return (
    <form onSubmit={onSubmit}>
      <div className="mx-auto max-w-[680px] px-6 py-8">
        <div className="rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-10 space-y-10 border border-yellow-300">
          {/* 단어 / 문장 */}
          <div className="space-y-2">
            <label htmlFor="word" className={LabelStyles}>
              <span>🐾</span> 단어 또는 문장을 입력해주세요
            </label>

            <input
              name="word"
              id="word"
              type="text"
              value={word}
              onChange={(e) => {
                setWord(e.target.value);
                if (errors.word && e.target.value.trim().length > 0) {
                  setErrors((prev) => ({ ...prev, word: false }));
                }
              }}
              placeholder="book / I want to read a book."
              className={InputStyles}
            />
            {errors.word && (
              <ErrorState>단어 Or 문장을 꼭 적어주세요!</ErrorState>
            )}
          </div>

          {/* 뜻 */}
          <div className="space-y-2">
            <label htmlFor="meaning" className={LabelStyles}>
              <span>🐾</span> 뜻을 입력해주세요!
            </label>

            <input
              name="meaning"
              id="meaning"
              type="text"
              value={meaning}
              onChange={(e) => {
                setMeaning(e.target.value);
                if (errors.meaning && e.target.value.trim().length > 0) {
                  setErrors((prev) => ({ ...prev, meaning: false }));
                }
              }}
              placeholder="책 / 나는 책을 읽고싶어."
              className={InputStyles}
            />
            {errors.meaning && <ErrorState>뜻을 꼭 적어주세요!</ErrorState>}
          </div>

          {/* 작문 */}
          <div className="space-y-2">
            <label htmlFor="sentence" className={LabelStyles}>
              <span>🐾</span> 작문을 해주실 수 있나요?
            </label>

            <input
              name="sentence"
              id="sentence"
              type="text"
              value={sentence}
              onChange={(e) => setSentence(e.target.value)}
              placeholder="Actually, I bought books yesterday."
              className={InputStyles}
            />
          </div>

          {/* 사용 위치 */}
          <div className="space-y-2">
            <label htmlFor="usage" className={LabelStyles}>
              <span>🐾</span> 어디서 주로 사용하나요?
            </label>

            <select
              name="usage"
              id="usage"
              value={usage}
              onChange={(e) => setUsage(e.target.value)}
              className={InputStyles}
            >
              <option value="일상생활">일상생활</option>
              <option value="회사">회사</option>
              <option value="학교">학교</option>
            </select>
          </div>

          {/* 버튼 */}
          <Button type="submit">저장하기 🐾</Button>
        </div>
      </div>
    </form>
  );
}
