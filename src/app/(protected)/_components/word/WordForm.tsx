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
  const InputStyles = `w-full p-3 text-base font-bold transition-all focus:text-lg focus-visible:outline-none border-b-3 border-main`;
  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      {/* 단어 / 문장 */}
      <div>
        <label htmlFor="word">🐾 단어 Or 문장을 적어주세요!</label>
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
        {errors.word && <ErrorState>단어 Or 문장을 꼭 적어주세요!</ErrorState>}
      </div>

      <div>
        <label htmlFor="meaning">🐾 뜻을 적어주세요!</label>
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

      <div>
        <label htmlFor="sentence">🐾 작문을 해주실 수 있나요?</label>
        <input
          name="sentence"
          id="sentence"
          type="text"
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
          className={InputStyles}
          placeholder="Actually, I bought books yesterday."
        />
      </div>

      <div>
        <label htmlFor="usage">🐾 어디서 주로 사용하나요?</label>
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

      <Button type="submit">저장 꾹 🐾</Button>
    </form>
  );
}
