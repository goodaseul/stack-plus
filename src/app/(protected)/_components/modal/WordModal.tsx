"use client";
import Button from "@/components/button/Button";
import ErrorState from "@/components/error-state/ErrorState";
import { ListType } from "@/types/list";
import { useState } from "react";

type WordFormProps = {
  onAdd: (item: ListType) => void;
};

export default function WordModal({ onAdd }: WordFormProps) {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [sentence, setSentence] = useState("");
  const [usage, setUsage] = useState("일상생활");
  const [memo, setMemo] = useState("");

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
      memo,
    });

    setWord("");
    setMeaning("");
    setSentence("");
    setUsage("일상생활");

    setErrors({ word: false, meaning: false });
  };
  const LabelStyles = `font-semibold text-lg text-gray flex items-center gap-2`;
  const InputStyles = `pl-2 w-full border-b-2 border-green py-2 text-gray focus:outline-none focus:border-green transition-colors`;

  return (
    <form onSubmit={onSubmit}>
      <div className="mx-auto max-w-[680px] px-6 py-8">
        <div className="rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-10 space-y-10 border border-green">
          {/* 단어 */}
          <div className="space-y-2">
            <label htmlFor="word" className={LabelStyles}>
              단어를 입력해주세요
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
              placeholder="book"
              className={InputStyles}
            />
            {errors.word && <ErrorState>단어를 꼭 적어주세요!</ErrorState>}
          </div>

          {/* 뜻 */}
          <div className="space-y-2">
            <label htmlFor="meaning" className={LabelStyles}>
              뜻을 입력해주세요!
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
              작문을 해주실 수 있나요?
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
              어디서 주로 사용하나요?
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

          {/* 메모 */}
          <div className="space-y-2">
            <label htmlFor="memo" className={LabelStyles}>
              메모할것이 있나요?
            </label>

            <textarea
              name="memo"
              id="memo"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              placeholder="나올 때마다 헷갈리는 단어 ! 제대로 알고가자"
              className={`${InputStyles} resize-none`}
            />
          </div>

          {/* 버튼 */}
          <div className="flex items-center justify-center gap-2">
            <Button variant="outline" type="button">
              취소하기
            </Button>
            <Button type="submit">저장하기 </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
